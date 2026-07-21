const select = (selector) => document.querySelector(selector);
const app = select('#prompterApp');
const scroller = select('#scroller');
const script = select('#script');
const speed = select('#speed');
const fontSize = select('#fontSize');
const lineHeight = select('#lineHeight');
const playButton = select('#playBtn');
const sampleScript = `안녕하세요.\n\n지금부터 오늘의 이야기를 시작하겠습니다.\n\nEzprompter는 카메라를 바라보면서도\n자연스럽게 대본을 읽을 수 있도록 만든\n온라인 텔레프롬프터입니다.\n\n먼저 내 목소리에 맞춰 속도를 조절하고,\n글자 크기와 행간을 읽기 편하게 설정해 보세요.\n\n준비가 되었다면 시작 버튼을 누르고\n여러분의 이야기에 집중하세요.`;
const englishSampleScript = `Hello.\n\nLet’s begin today’s story.\n\nEzprompter is an online teleprompter\nthat helps you read naturally\nwhile looking toward the camera.\n\nFirst, adjust the speed to match your voice,\nthen set the text size and line spacing\nfor comfortable reading.\n\nWhen you are ready, press Start\nand focus on telling your story.`;
const scriptStorageKey = 'mediprompter-script';
const settingsStorageKey = 'mediprompter-settings';
let isPlaying = false;
let isEditing = false;
let animationFrame = 0;
let previousTime = 0;
let scrollPosition = 0;

// 현재 사이트 언어에 맞는 UI 문구를 반환하며 번역 모듈이 없으면 한국어를 사용한다.
function translate(koreanText) {
  return window.EzI18n ? window.EzI18n.text(koreanText) : koreanText;
}

// 저장할 대본이 비어 있을 때 현재 언어에 맞는 기본 예문을 제공한다.
function getDefaultSampleScript() {
  return document.documentElement.lang === 'en' ? englishSampleScript : sampleScript;
}

// 저장소 접근이 차단된 브라우저에서도 앱이 중단되지 않도록 값을 안전하게 읽는다.
function readStorage(key) {
  try { return localStorage.getItem(key); }
  catch { return null; }
}

// 저장소 접근이 허용된 경우에만 값을 기록하고 실패 시 현재 세션 동작은 유지한다.
function writeStorage(key, value) {
  try { localStorage.setItem(key, value); }
  catch { select('#status').textContent = translate('브라우저 설정으로 인해 대본을 저장하지 못했습니다.'); }
}

// localStorage 값이 손상되었을 때도 기본 설정으로 실행되도록 저장값을 안전하게 읽는다.
function loadSettings() {
  try {
    const saved = JSON.parse(readStorage(settingsStorageKey) || '{}');
    return {
      speed: clamp(Number(saved.speed) || 54, 1, 160),
      fontSize: clamp(Number(saved.fontSize) || 56, 28, 110),
      lineHeight: clamp(Number(saved.lineHeight) || 1.42, 1, 2.2),
      align: saved.align === 'left' ? 'left' : 'center',
      mirror: saved.mirror === true
    };
  } catch {
    return { speed: 54, fontSize: 56, lineHeight: 1.42, align: 'center', mirror: false };
  }
}

// 숫자를 지정한 최솟값과 최댓값 사이로 제한해 잘못된 저장값을 방어한다.
function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

// 현재 설정을 브라우저에 저장하며 외부 서버로는 전송하지 않는다.
function saveSettings() {
  writeStorage(settingsStorageKey, JSON.stringify(settings));
}

// 슬라이더와 대본 스타일에 현재 설정을 함께 반영한다.
function applySettings() {
  speed.value = settings.speed;
  fontSize.value = settings.fontSize;
  lineHeight.value = Math.round(settings.lineHeight * 100);
  select('#speedOutput').value = settings.speed;
  select('#fontOutput').value = settings.fontSize;
  select('#lineOutput').value = settings.lineHeight.toFixed(2);
  script.style.fontSize = `${settings.fontSize}px`;
  script.style.lineHeight = settings.lineHeight;
  script.style.textAlign = settings.align;
  app.classList.toggle('mirror', settings.mirror);
  select('#alignBtn').setAttribute('aria-pressed', String(settings.align === 'left'));
  select('#mirrorBtn').setAttribute('aria-pressed', String(settings.mirror));
}

// 스크롤 위치를 바탕으로 하단 진행률 표시를 갱신한다.
function updateProgress() {
  const maximumScroll = scroller.scrollHeight - scroller.clientHeight;
  const percentage = maximumScroll > 0 ? scroller.scrollTop / maximumScroll * 100 : 0;
  select('#progressBar').style.width = `${percentage}%`;
}

// 재생을 멈추고 버튼과 접근성 상태 메시지를 동기화한다.
function pausePrompter() {
  isPlaying = false;
  cancelAnimationFrame(animationFrame);
  playButton.textContent = translate(scroller.scrollTop > 0 ? '계속' : '시작');
  select('#status').textContent = translate('재생 일시 정지');
}

// 현재 위치에서 자동 스크롤을 시작한다.
function startPrompter() {
  if (isEditing) return;
  isPlaying = true;
  previousTime = 0;
  scrollPosition = scroller.scrollTop;
  playButton.textContent = translate('정지');
  select('#status').textContent = translate('대본 재생 중');
  animationFrame = requestAnimationFrame(runAnimation);
}

// 프레임 간 경과 시간에 비례해 일정한 속도로 대본을 이동한다.
function runAnimation(currentTime) {
  if (!isPlaying) return;
  if (!previousTime) previousTime = currentTime;
  const elapsed = Math.min(40, currentTime - previousTime);
  previousTime = currentTime;
  scrollPosition += settings.speed * elapsed / 1000;
  scroller.scrollTop = scrollPosition;
  updateProgress();
  if (scrollPosition >= scroller.scrollHeight - scroller.clientHeight - 2) resetPrompter();
  else animationFrame = requestAnimationFrame(runAnimation);
}

// 대본을 처음 위치로 돌리고 재생 상태를 초기화한다.
function resetPrompter() {
  pausePrompter();
  scroller.scrollTop = 0;
  scrollPosition = 0;
  playButton.textContent = translate('시작');
  select('#status').textContent = translate('대본 처음으로 이동');
  updateProgress();
}

// 편집 모드를 전환하고 완료 시 빈 대본을 기본 예문으로 대체해 저장한다.
function setEditing(enabled) {
  isEditing = enabled;
  pausePrompter();
  script.contentEditable = String(enabled);
  select('#editBtn').setAttribute('aria-pressed', String(enabled));
  select('#editBtn').textContent = translate(enabled ? '편집 완료' : '대본 편집');
  if (enabled) script.focus();
  else {
    const savedScript = script.innerText.trim() || getDefaultSampleScript();
    script.textContent = savedScript;
    writeStorage(scriptStorageKey, savedScript);
    script.blur();
  }
}

// 전체 화면 API 지원 여부를 확인하고 텔레프롬프터 영역의 전체 화면을 전환한다.
async function toggleFullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (app.requestFullscreen) {
      await app.requestFullscreen();
      select('#fullBtn').blur();
    }
    else select('#status').textContent = translate('이 브라우저는 전체 화면을 지원하지 않습니다.');
  } catch {
    select('#status').textContent = translate('전체 화면을 시작할 수 없습니다.');
  }
}

const settings = loadSettings();
script.textContent = readStorage(scriptStorageKey) || getDefaultSampleScript();
applySettings();
updateProgress();

speed.addEventListener('input', () => { settings.speed = Number(speed.value); applySettings(); saveSettings(); });
fontSize.addEventListener('input', () => { settings.fontSize = Number(fontSize.value); applySettings(); saveSettings(); });
lineHeight.addEventListener('input', () => { settings.lineHeight = Number(lineHeight.value) / 100; applySettings(); saveSettings(); });
playButton.addEventListener('click', () => { if (isPlaying) pausePrompter(); else startPrompter(); });
select('#editBtn').addEventListener('click', () => setEditing(!isEditing));
select('#alignBtn').addEventListener('click', () => { settings.align = settings.align === 'center' ? 'left' : 'center'; applySettings(); saveSettings(); });
select('#mirrorBtn').addEventListener('click', () => { settings.mirror = !settings.mirror; applySettings(); saveSettings(); });
select('#fullBtn').addEventListener('click', toggleFullscreen);
scroller.addEventListener('scroll', () => { if (!isPlaying) scrollPosition = scroller.scrollTop; updateProgress(); }, { passive: true });
script.addEventListener('input', () => { if (isEditing) writeStorage(scriptStorageKey, script.innerText); });

// 언어가 바뀌면 현재 재생 상태의 동적 버튼과 상태 문구도 함께 갱신한다.
document.addEventListener('ezprompter:languagechange', () => {
  select('#editBtn').textContent = translate(isEditing ? '편집 완료' : '대본 편집');
  if (isPlaying) {
    playButton.textContent = translate('정지');
    select('#status').textContent = translate('대본 재생 중');
  } else {
    playButton.textContent = translate(scroller.scrollTop > 0 ? '계속' : '시작');
    select('#status').textContent = translate('재생 일시 정지');
  }
});

// 편집 중에는 입력을 보호하고 평상시에는 핵심 단축키를 처리한다.
document.addEventListener('keydown', (event) => {
  if (isEditing) {
    if (event.key === 'Escape' || ((event.ctrlKey || event.metaKey) && event.key === 'Enter')) setEditing(false);
    return;
  }
  if (event.code === 'Space') {
    const isFormInput = event.target.matches('input, textarea, select, [contenteditable="true"]');
    if (!isFormInput) {
      event.preventDefault();
      if (isPlaying) pausePrompter(); else startPrompter();
    }
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault();
    const direction = event.key === 'ArrowUp' ? 1 : -1;
    settings.speed = clamp(settings.speed + direction * (event.shiftKey ? 5 : 1), 1, 160);
    applySettings();
    saveSettings();
  } else if (event.key.toLowerCase() === 'r') resetPrompter();
  else if (event.key.toLowerCase() === 'e') {
    event.preventDefault();
    setEditing(true);
  }
});
