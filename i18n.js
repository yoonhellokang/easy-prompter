const languageStorageKey = 'ezprompter-language';

const englishText = {
  '본문으로 바로가기': 'Skip to main content', '텔레프롬프터': 'Teleprompter', '사용법': 'How to use', '촬영 팁': 'Recording tips', '소개': 'About', '바로 시작': 'Get started',
  '주요 메뉴': 'Main menu', '서비스 특징': 'Service features', '텔레프롬프터 설정': 'Teleprompter settings', '대본 재생 화면': 'Script playback area', '스크롤되는 대본': 'Scrolling script', '하단 메뉴': 'Footer menu', 'Ezprompter 홈': 'Ezprompter home',
  '무료 · 설치 없음 · 기기 내 저장': 'FREE · NO INSTALLATION · SAVED ON DEVICE',
  '카메라를 보며': 'Look at the camera', '자연스럽게 말하세요': 'and speak naturally',
  'Ezprompter는 발표, 강의, 인터뷰와 영상 촬영을 위한 브라우저 텔레프롬프터입니다. 회원가입 없이 대본을 넣고 내 속도에 맞춰 연습할 수 있습니다.': 'Ezprompter is a browser-based teleprompter for presentations, lectures, interviews, and video recording. Add your script and practice at your own pace without creating an account.',
  '텔레프롬프터 열기': 'Open teleprompter', '3분 사용법 보기': 'View the 3-minute guide',
  '대본은 서버로 전송하지 않음': 'Scripts are never sent to a server', '모바일·태블릿·PC 지원': 'Works on mobile, tablet, and desktop', '좌우 반전과 전체 화면': 'Mirror mode and fullscreen',
  '전하고 싶은 이야기에': 'Focus completely on', '온전히 집중하세요.': 'what you want to say.', '온라인 텔레프롬프터': 'Online teleprompter',
  '대본과 설정은 이 브라우저의 저장 공간에만 보관됩니다.': 'Your script and settings are stored only in this browser.',
  '속도': 'Speed', '글자': 'Text size', '행간': 'Line spacing', '왼쪽 정렬': 'Align left', '좌우 반전': 'Mirror', '대본 편집': 'Edit script', '전체 화면': 'Fullscreen', '시작': 'Start',
  'Space 시작·정지 · ↑↓ 속도 · R 처음으로 · E 편집': 'Space play/pause · ↑↓ speed · R restart · E edit', '재생 준비': 'Ready to play',
  '브라우저 설정으로 인해 대본을 저장하지 못했습니다.': 'Your browser settings prevented the script from being saved.',
  '계속': 'Resume', '재생 일시 정지': 'Playback paused', '정지': 'Pause', '대본 재생 중': 'Playing script',
  '대본 처음으로 이동': 'Returned to the start', '편집 완료': 'Finish editing',
  '이 브라우저는 전체 화면을 지원하지 않습니다.': 'This browser does not support fullscreen.', '전체 화면을 시작할 수 없습니다.': 'Fullscreen could not be started.',
  '처음이라면 이렇게 시작하세요': 'Get started in three steps', '복잡한 설정 없이 세 단계면 충분합니다.': 'Three simple steps are all it takes.',
  '대본을 붙여 넣기': 'Paste your script', '‘대본 편집’을 누르고 원고를 입력하세요. 짧은 문장 단위로 줄을 바꾸면 읽는 호흡을 잡기 쉽습니다.': 'Select “Edit script” and enter your text. Breaking lines into short phrases makes it easier to find a natural rhythm.',
  '읽기 편하게 맞추기': 'Make it comfortable to read', '카메라와 눈 사이 거리에 맞춰 글자 크기를 정하고, 소리 내어 읽으며 속도를 조절하세요.': 'Set the text size for your distance from the camera, then read aloud and adjust the speed.',
  '시선 확인 후 촬영': 'Check your gaze and record', '전체 화면과 좌우 반전을 필요에 따라 켜고, 기준선 근처의 문장을 보며 자연스럽게 말하세요.': 'Use fullscreen and mirror mode as needed, then speak naturally while reading near the guide line.',
  '더 자연스러운 촬영을 위한 6가지 팁': '6 tips for more natural recordings', '실제 촬영에서 바로 적용할 수 있는 기본 원칙입니다.': 'Practical principles you can use in your next recording.',
  '대본을 말하는 문장으로 바꾸기': 'Write the way you speak', '글로 읽기 좋은 문장과 입으로 말하기 좋은 문장은 다릅니다. 긴 수식어를 줄이고 한 문장에 하나의 메시지만 담아 보세요. 평소 쓰는 단어로 바꾸면 표정과 억양도 자연스러워집니다.': 'Written and spoken sentences work differently. Remove long modifiers, keep one idea per sentence, and use familiar words for more natural expression and intonation.',
  '한 줄을 짧게 유지하기': 'Keep each line short', '시선이 좌우로 크게 움직이면 카메라에서 읽는 모습이 드러납니다. 대본 너비를 좁히거나 문장을 적절히 줄바꿈해 한 줄의 이동 거리를 줄이세요.': 'Wide eye movement makes reading noticeable on camera. Use a narrower script area or line breaks to shorten each scan.',
  '속도보다 호흡을 먼저 맞추기': 'Match your breathing before speed', '처음부터 빠르게 설정하지 마세요. 평소 말하기 속도로 한 문단을 읽고, 문장 끝에서 충분히 숨을 쉴 수 있는지 확인한 다음 조금씩 속도를 높이는 편이 좋습니다.': 'Do not start too fast. Read a paragraph at your normal pace, make sure you can breathe at sentence breaks, then increase the speed gradually.',
  '렌즈 가까이에 화면 배치하기': 'Place the screen near the lens', '화면과 렌즈가 멀수록 시선 차이가 커집니다. 스마트폰이나 태블릿을 렌즈 바로 아래에 두고, 읽는 기준선이 가능한 한 렌즈 가까이에 오도록 높이를 맞추세요.': 'The farther the screen is from the lens, the more your gaze shifts. Place the device just below the lens and align the guide line as close to it as possible.',
  '강조와 멈춤을 대본에 표시하기': 'Mark emphasis and pauses', '강조할 단어 앞에 줄바꿈을 넣고, 잠시 멈출 곳에는 빈 줄이나 ‘/’를 사용해 보세요. 시각적 표시가 있으면 같은 속도로 흘러가도 말의 리듬을 유지하기 쉽습니다.': 'Add a line break before emphasized words and use a blank line or “/” for pauses. Visual cues help maintain your speaking rhythm.',
  '30초 분량으로 먼저 테스트하기': 'Start with a 30-second test', '전체 촬영 전에 짧은 구간을 녹화해 시선, 음량, 스크롤 속도를 확인하세요. 한 번의 짧은 테스트가 긴 재촬영을 줄여 줍니다.': 'Record a short section before the full take to check your gaze, volume, and scroll speed. A quick test can prevent a lengthy retake.',
  '자주 묻는 질문': 'Frequently asked questions', '입력한 대본이 외부로 전송되나요?': 'Is my script sent anywhere?',
  '아니요. 대본은 브라우저의 localStorage에만 저장되며 별도 서버로 전송하지 않습니다. 공용 기기에서는 사용 후 브라우저 사이트 데이터를 삭제해 주세요.': 'No. Your script is stored only in this browser’s localStorage and is not sent to a separate server. Clear the site data after using a shared device.',
  '스마트폰에서도 사용할 수 있나요?': 'Can I use it on a smartphone?', '최신 모바일 브라우저에서 사용할 수 있습니다. 화면을 가로로 돌리고 전체 화면을 사용하면 더 넓은 대본 화면을 확보할 수 있습니다.': 'Yes, it works in modern mobile browsers. Rotate the screen and use fullscreen for a wider script area.',
  '좌우 반전은 언제 사용하나요?': 'When should I use mirror mode?', '반투명 반사 유리를 사용하는 텔레프롬프터 장비에 화면을 비출 때 사용합니다. 일반 화면을 직접 보는 경우에는 반전을 끄면 됩니다.': 'Use it with teleprompter hardware that reflects the display in glass. Leave it off when reading directly from a screen.',
  '저장한 대본은 얼마나 오래 남나요?': 'How long is my script saved?', '브라우저 사이트 데이터를 지우거나 비공개 모드를 종료하기 전까지 해당 브라우저에 남습니다. 브라우저나 기기 사이에서 자동 동기화되지는 않습니다.': 'It remains in that browser until you clear site data or close a private session. It does not sync between browsers or devices.',
  '말하는 사람의 시선을 위한 간결한 도구.': 'A simple tool that keeps speakers looking forward.', '서비스 소개': 'About', '개인정보처리방침': 'Privacy policy', '상세 사용 가이드': 'Detailed user guide', '사용 가이드': 'User guide', '개인정보': 'Privacy'
};

const pageMetadata = {
  ko: {
    title: 'Ezprompter — 무료 온라인 텔레프롬프터',
    description: '설치 없이 사용하는 무료 온라인 텔레프롬프터. 대본 자동 스크롤, 속도·글자 크기 조절, 좌우 반전과 실전 촬영 가이드를 제공합니다.'
  },
  en: {
    title: 'Ezprompter — Free Online Teleprompter',
    description: 'A free online teleprompter with automatic scrolling, speed and text controls, mirror mode, and practical recording tips.'
  }
};

// 저장소 사용이 제한된 환경에서도 언어 설정을 안전하게 읽는다.
function readLanguagePreference() { try { return localStorage.getItem(languageStorageKey); } catch { return null; } }

// 사용자가 고른 언어를 다음 방문에도 유지하되 저장 실패는 무시한다.
function saveLanguagePreference(language) { try { localStorage.setItem(languageStorageKey, language); } catch { /* 자동 감지는 저장소 없이도 동작한다. */ } }

// 공유 가능한 ?lang 링크를 우선하고, 그 외에는 저장값과 브라우저 기본 언어 순으로 결정한다.
function getInitialLanguage() {
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  if (requestedLanguage === 'ko' || requestedLanguage === 'en') return requestedLanguage;
  const savedLanguage = readLanguagePreference();
  if (savedLanguage === 'ko' || savedLanguage === 'en') return savedLanguage;
  return navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

// 최초 번역 전에 원문을 보존하고 선택 언어의 텍스트로 전환한다.
function translateTextNodes(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    if (!node.parentElement || ['SCRIPT', 'STYLE', 'OPTION'].includes(node.parentElement.tagName)) return;
    if (node.__koreanText === undefined) node.__koreanText = node.nodeValue;
    const koreanText = node.__koreanText;
    const trimmedText = koreanText.trim();
    const translatedText = englishText[trimmedText];
    node.nodeValue = language === 'en' && translatedText ? koreanText.replace(trimmedText, translatedText) : koreanText;
  });
}

// 화면에 보이지 않는 접근성 레이블도 표시 언어와 동일하게 맞춘다.
function translateAttributes(language) {
  document.querySelectorAll('[aria-label]').forEach((element) => {
    if (!element.dataset.koreanAriaLabel) element.dataset.koreanAriaLabel = element.getAttribute('aria-label');
    const koreanLabel = element.dataset.koreanAriaLabel;
    element.setAttribute('aria-label', language === 'en' ? englishText[koreanLabel] || koreanLabel : koreanLabel);
  });
}

// 검색 결과와 브라우저 탭에 표시되는 홈 문서 정보도 선택 언어로 갱신한다.
function translatePageMetadata(language) {
  const metadata = pageMetadata[language];
  if (!metadata) return;
  document.title = metadata.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', metadata.description);
  const openGraphTitle = document.querySelector('meta[property="og:title"]');
  const openGraphDescription = document.querySelector('meta[property="og:description"]');
  if (openGraphTitle) openGraphTitle.setAttribute('content', metadata.title);
  if (openGraphDescription) openGraphDescription.setAttribute('content', metadata.description);
}

// 문서 언어와 정적 UI를 동기화하고 다른 스크립트에 변경 사실을 알린다.
function applyLanguage(language, notify = true) {
  document.documentElement.lang = language;
  translateTextNodes(language);
  translateAttributes(language);
  translatePageMetadata(language);
  const languageSelect = document.querySelector('#languageSelect');
  if (languageSelect) {
    languageSelect.value = language;
    languageSelect.setAttribute('aria-label', language === 'ko' ? '언어 선택' : 'Select language');
  }
  if (notify) document.dispatchEvent(new CustomEvent('ezprompter:languagechange', { detail: { language } }));
}

window.EzI18n = {
  get language() { return document.documentElement.lang; },
  text(koreanText) { return this.language === 'en' ? englishText[koreanText] || koreanText : koreanText; },
  applyLanguage
};

applyLanguage(getInitialLanguage(), false);
const languageSelect = document.querySelector('#languageSelect');
if (languageSelect) {
  // 명시적인 사용자 선택을 저장하고 현재 페이지에 즉시 적용한다.
  languageSelect.addEventListener('change', (event) => {
    const language = event.target.value === 'ko' ? 'ko' : 'en';
    saveLanguagePreference(language);
    applyLanguage(language);
  });
}
