const languageStorageKey = 'ezprompter-language';

const englishText = {
  '본문으로 바로가기': 'Skip to main content', '텔레프롬프터': 'Teleprompter', '사용법': 'How to use', '촬영 팁': 'Recording tips', '소개': 'About', '바로 시작': 'Get started',
  '주요 메뉴': 'Main menu', '서비스 특징': 'Service features', '텔레프롬프터 설정': 'Teleprompter settings', '대본 재생 화면': 'Script playback area', '스크롤되는 대본': 'Scrolling script', '하단 메뉴': 'Footer menu', 'Ezprompter 홈': 'Ezprompter home', '언어 선택': 'Select language',
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

const chineseText = {
  '본문으로 바로가기': '跳到主要内容', '텔레프롬프터': '提词器', '사용법': '使用方法', '촬영 팁': '拍摄技巧', '소개': '关于', '바로 시작': '立即开始',
  '주요 메뉴': '主菜单', '서비스 특징': '服务特点', '텔레프롬프터 설정': '提词器设置', '대본 재생 화면': '文稿播放区域', '스크롤되는 대본': '滚动文稿', '하단 메뉴': '页脚菜单', 'Ezprompter 홈': 'Ezprompter 首页', '언어 선택': '选择语言',
  '무료 · 설치 없음 · 기기 내 저장': '免费 · 无需安装 · 保存在设备上', '카메라를 보며': '看着镜头', '자연스럽게 말하세요': '自然地表达',
  'Ezprompter는 발표, 강의, 인터뷰와 영상 촬영을 위한 브라우저 텔레프롬프터입니다. 회원가입 없이 대본을 넣고 내 속도에 맞춰 연습할 수 있습니다.': 'Ezprompter 是一款适用于演讲、授课、采访和视频拍摄的浏览器提词器。无需注册，输入文稿即可按自己的节奏练习。',
  '텔레프롬프터 열기': '打开提词器', '3분 사용법 보기': '查看 3 分钟指南', '대본은 서버로 전송하지 않음': '文稿不会发送到服务器', '모바일·태블릿·PC 지원': '支持手机、平板和电脑', '좌우 반전과 전체 화면': '镜像与全屏',
  '전하고 싶은 이야기에': '专注于', '온전히 집중하세요.': '你想表达的内容。', '온라인 텔레프롬프터': '在线提词器', '대본과 설정은 이 브라우저의 저장 공간에만 보관됩니다.': '文稿和设置仅保存在此浏览器中。',
  '속도': '速度', '글자': '字号', '행간': '行距', '왼쪽 정렬': '左对齐', '좌우 반전': '镜像', '대본 편집': '编辑文稿', '전체 화면': '全屏', '시작': '开始', '계속': '继续', '정지': '暂停', '편집 완료': '完成编辑',
  'Space 시작·정지 · ↑↓ 속도 · R 처음으로 · E 편집': '空格 播放/暂停 · ↑↓ 速度 · R 重置 · E 编辑', '재생 준비': '准备播放', '재생 일시 정지': '已暂停', '대본 재생 중': '正在播放文稿', '대본 처음으로 이동': '已返回开头',
  '브라우저 설정으로 인해 대본을 저장하지 못했습니다.': '由于浏览器设置，无法保存文稿。', '이 브라우저는 전체 화면을 지원하지 않습니다.': '此浏览器不支持全屏。', '전체 화면을 시작할 수 없습니다.': '无法启动全屏。',
  '처음이라면 이렇게 시작하세요': '三步快速开始', '복잡한 설정 없이 세 단계면 충분합니다.': '无需复杂设置，只需三个步骤。', '대본을 붙여 넣기': '粘贴文稿', '‘대본 편집’을 누르고 원고를 입력하세요. 짧은 문장 단위로 줄을 바꾸면 읽는 호흡을 잡기 쉽습니다.': '点击“编辑文稿”并输入内容。按短句换行，更容易掌握自然的朗读节奏。', '읽기 편하게 맞추기': '调整至舒适阅读', '카메라와 눈 사이 거리에 맞춰 글자 크기를 정하고, 소리 내어 읽으며 속도를 조절하세요.': '根据眼睛与镜头的距离调整字号，并在朗读时调节速度。', '시선 확인 후 촬영': '确认视线后拍摄', '전체 화면과 좌우 반전을 필요에 따라 켜고, 기준선 근처의 문장을 보며 자연스럽게 말하세요.': '按需开启全屏和镜像，注视参考线附近的文字并自然表达。',
  '더 자연스러운 촬영을 위한 6가지 팁': '让拍摄更自然的 6 个技巧', '실제 촬영에서 바로 적용할 수 있는 기본 원칙입니다.': '这些基本原则可以直接用于实际拍摄。', '대본을 말하는 문장으로 바꾸기': '把文稿改成口语', '글로 읽기 좋은 문장과 입으로 말하기 좋은 문장은 다릅니다. 긴 수식어를 줄이고 한 문장에 하나의 메시지만 담아 보세요. 평소 쓰는 단어로 바꾸면 표정과 억양도 자연스러워집니다.': '书面语和口语并不相同。减少冗长修饰，每句话只表达一个重点，并使用熟悉的词语，让表情和语调更自然。', '한 줄을 짧게 유지하기': '保持每行简短', '시선이 좌우로 크게 움직이면 카메라에서 읽는 모습이 드러납니다. 대본 너비를 좁히거나 문장을 적절히 줄바꿈해 한 줄의 이동 거리를 줄이세요.': '视线左右移动过大会显得像在读稿。缩窄文稿区域或适当换行，以缩短每行的扫视距离。', '속도보다 호흡을 먼저 맞추기': '先调整呼吸，再调整速度', '처음부터 빠르게 설정하지 마세요. 평소 말하기 속도로 한 문단을 읽고, 문장 끝에서 충분히 숨을 쉴 수 있는지 확인한 다음 조금씩 속도를 높이는 편이 좋습니다.': '不要一开始就设置得太快。先以平时语速读一段，确认句末有足够时间呼吸，再逐渐加速。', '렌즈 가까이에 화면 배치하기': '将屏幕靠近镜头', '화면과 렌즈가 멀수록 시선 차이가 커집니다. 스마트폰이나 태블릿을 렌즈 바로 아래에 두고, 읽는 기준선이 가능한 한 렌즈 가까이에 오도록 높이를 맞추세요.': '屏幕离镜头越远，视线偏差越明显。将手机或平板放在镜头正下方，并让参考线尽量靠近镜头。', '강조와 멈춤을 대본에 표시하기': '标记重音和停顿', '강조할 단어 앞에 줄바꿈을 넣고, 잠시 멈출 곳에는 빈 줄이나 ‘/’를 사용해 보세요. 시각적 표시가 있으면 같은 속도로 흘러가도 말의 리듬을 유지하기 쉽습니다.': '在需要强调的词前换行，在停顿处使用空行或“/”。视觉提示有助于保持表达节奏。', '30초 분량으로 먼저 테스트하기': '先进行 30 秒测试', '전체 촬영 전에 짧은 구간을 녹화해 시선, 음량, 스크롤 속도를 확인하세요. 한 번의 짧은 테스트가 긴 재촬영을 줄여 줍니다.': '正式拍摄前先录制一小段，检查视线、音量和滚动速度。短暂测试可以避免耗时重拍。',
  '자주 묻는 질문': '常见问题', '입력한 대본이 외부로 전송되나요?': '输入的文稿会发送到外部吗？', '아니요. 대본은 브라우저의 localStorage에만 저장되며 별도 서버로 전송하지 않습니다. 공용 기기에서는 사용 후 브라우저 사이트 데이터를 삭제해 주세요.': '不会。文稿只保存在浏览器的本地存储中，不会发送到其他服务器。使用公共设备后请清除网站数据。', '스마트폰에서도 사용할 수 있나요?': '可以在手机上使用吗？', '최신 모바일 브라우저에서 사용할 수 있습니다. 화면을 가로로 돌리고 전체 화면을 사용하면 더 넓은 대본 화면을 확보할 수 있습니다.': '可以在现代移动浏览器中使用。横屏并开启全屏可获得更宽的文稿区域。', '좌우 반전은 언제 사용하나요?': '什么时候使用镜像？', '반투명 반사 유리를 사용하는 텔레프롬프터 장비에 화면을 비출 때 사용합니다. 일반 화면을 직접 보는 경우에는 반전을 끄면 됩니다.': '使用带半透明反射玻璃的提词器设备时开启。直接观看普通屏幕时请关闭镜像。', '저장한 대본은 얼마나 오래 남나요?': '保存的文稿会保留多久？', '브라우저 사이트 데이터를 지우거나 비공개 모드를 종료하기 전까지 해당 브라우저에 남습니다. 브라우저나 기기 사이에서 자동 동기화되지는 않습니다.': '文稿会保留在该浏览器中，直到清除网站数据或结束隐私浏览。不同浏览器或设备之间不会自动同步。',
  '말하는 사람의 시선을 위한 간결한 도구.': '让讲述者保持目光向前的简洁工具。', '서비스 소개': '服务介绍', '개인정보처리방침': '隐私政策', '상세 사용 가이드': '详细使用指南', '사용 가이드': '使用指南', '개인정보': '隐私'
};

const hindiText = {
  '본문으로 바로가기': 'मुख्य सामग्री पर जाएँ', '텔레프롬프터': 'टेलीप्रॉम्प्टर', '사용법': 'उपयोग विधि', '촬영 팁': 'रिकॉर्डिंग सुझाव', '소개': 'परिचय', '바로 시작': 'अभी शुरू करें',
  '주요 메뉴': 'मुख्य मेन्यू', '서비스 특징': 'सेवा की विशेषताएँ', '텔레프롬프터 설정': 'टेलीप्रॉम्प्टर सेटिंग्स', '대본 재생 화면': 'स्क्रिप्ट प्लेबैक क्षेत्र', '스크롤되는 대본': 'स्क्रॉल होती स्क्रिप्ट', '하단 메뉴': 'फ़ुटर मेन्यू', 'Ezprompter 홈': 'Ezprompter होम', '언어 선택': 'भाषा चुनें',
  '무료 · 설치 없음 · 기기 내 저장': 'मुफ़्त · इंस्टॉलेशन नहीं · डिवाइस पर सेव', '카메라를 보며': 'कैमरे की ओर देखें', '자연스럽게 말하세요': 'और स्वाभाविक रूप से बोलें',
  'Ezprompter는 발표, 강의, 인터뷰와 영상 촬영을 위한 브라우저 텔레프롬프터입니다. 회원가입 없이 대본을 넣고 내 속도에 맞춰 연습할 수 있습니다.': 'Ezprompter प्रस्तुतियों, व्याख्यानों, साक्षात्कारों और वीडियो रिकॉर्डिंग के लिए ब्राउज़र-आधारित टेलीप्रॉम्प्टर है। बिना खाता बनाए स्क्रिप्ट डालें और अपनी गति से अभ्यास करें।',
  '텔레프롬프터 열기': 'टेलीप्रॉम्प्टर खोलें', '3분 사용법 보기': '3 मिनट की गाइड देखें', '대본은 서버로 전송하지 않음': 'स्क्रिप्ट सर्वर पर नहीं भेजी जाती', '모바일·태블릿·PC 지원': 'मोबाइल, टैबलेट और पीसी समर्थित', '좌우 반전과 전체 화면': 'मिरर और फ़ुलस्क्रीन',
  '전하고 싶은 이야기에': 'अपनी बात पर', '온전히 집중하세요.': 'पूरा ध्यान दें।', '온라인 텔레프롬프터': 'ऑनलाइन टेलीप्रॉम्प्टर', '대본과 설정은 이 브라우저의 저장 공간에만 보관됩니다.': 'आपकी स्क्रिप्ट और सेटिंग्स केवल इस ब्राउज़र में सेव होती हैं।',
  '속도': 'गति', '글자': 'अक्षर आकार', '행간': 'पंक्ति अंतर', '왼쪽 정렬': 'बाएँ संरेखित करें', '좌우 반전': 'मिरर', '대본 편집': 'स्क्रिप्ट संपादित करें', '전체 화면': 'फ़ुलस्क्रीन', '시작': 'शुरू करें', '계속': 'जारी रखें', '정지': 'रोकें', '편집 완료': 'संपादन पूरा',
  'Space 시작·정지 · ↑↓ 속도 · R 처음으로 · E 편집': 'Space चलाएँ/रोकें · ↑↓ गति · R शुरुआत · E संपादन', '재생 준비': 'चलाने के लिए तैयार', '재생 일시 정지': 'प्लेबैक रुका', '대본 재생 중': 'स्क्रिप्ट चल रही है', '대본 처음으로 이동': 'शुरुआत पर लौटे',
  '브라우저 설정으로 인해 대본을 저장하지 못했습니다.': 'ब्राउज़र सेटिंग्स के कारण स्क्रिप्ट सेव नहीं हो सकी।', '이 브라우저는 전체 화면을 지원하지 않습니다.': 'यह ब्राउज़र फ़ुलस्क्रीन का समर्थन नहीं करता।', '전체 화면을 시작할 수 없습니다.': 'फ़ुलस्क्रीन शुरू नहीं हो सका।',
  '처음이라면 이렇게 시작하세요': 'तीन चरणों में शुरुआत करें', '복잡한 설정 없이 세 단계면 충분합니다.': 'बिना जटिल सेटिंग के केवल तीन चरण।', '대본을 붙여 넣기': 'अपनी स्क्रिप्ट पेस्ट करें', '‘대본 편집’을 누르고 원고를 입력하세요. 짧은 문장 단위로 줄을 바꾸면 읽는 호흡을 잡기 쉽습니다.': '“स्क्रिप्ट संपादित करें” चुनकर अपना पाठ लिखें। छोटे वाक्यांशों में पंक्ति बदलने से सहज लय मिलती है।', '읽기 편하게 맞추기': 'पढ़ने में सहज बनाएँ', '카메라와 눈 사이 거리에 맞춰 글자 크기를 정하고, 소리 내어 읽으며 속도를 조절하세요.': 'कैमरे से दूरी के अनुसार अक्षर आकार तय करें और ज़ोर से पढ़ते हुए गति समायोजित करें।', '시선 확인 후 촬영': 'नज़र जाँचकर रिकॉर्ड करें', '전체 화면과 좌우 반전을 필요에 따라 켜고, 기준선 근처의 문장을 보며 자연스럽게 말하세요.': 'ज़रूरत के अनुसार फ़ुलस्क्रीन और मिरर चालू करें, फिर गाइड लाइन के पास पढ़ते हुए स्वाभाविक रूप से बोलें।',
  '더 자연스러운 촬영을 위한 6가지 팁': 'स्वाभाविक रिकॉर्डिंग के लिए 6 सुझाव', '실제 촬영에서 바로 적용할 수 있는 기본 원칙입니다.': 'इन बुनियादी सिद्धांतों को रिकॉर्डिंग में तुरंत अपनाएँ।', '대본을 말하는 문장으로 바꾸기': 'बोलचाल की भाषा में लिखें', '글로 읽기 좋은 문장과 입으로 말하기 좋은 문장은 다릅니다. 긴 수식어를 줄이고 한 문장에 하나의 메시지만 담아 보세요. 평소 쓰는 단어로 바꾸면 표정과 억양도 자연스러워집니다.': 'लिखित और बोली जाने वाली भाषा अलग होती है। लंबे विशेषण घटाएँ, हर वाक्य में एक विचार रखें और परिचित शब्दों का उपयोग करें।', '한 줄을 짧게 유지하기': 'हर पंक्ति छोटी रखें', '시선이 좌우로 크게 움직이면 카메라에서 읽는 모습이 드러납니다. 대본 너비를 좁히거나 문장을 적절히 줄바꿈해 한 줄의 이동 거리를 줄이세요.': 'आँखों का अधिक दाएँ-बाएँ जाना कैमरे पर पढ़ना स्पष्ट कर देता है। स्क्रिप्ट की चौड़ाई घटाएँ या उचित पंक्ति-विराम दें।', '속도보다 호흡을 먼저 맞추기': 'गति से पहले साँस मिलाएँ', '처음부터 빠르게 설정하지 마세요. 평소 말하기 속도로 한 문단을 읽고, 문장 끝에서 충분히 숨을 쉴 수 있는지 확인한 다음 조금씩 속도를 높이는 편이 좋습니다.': 'शुरुआत में गति तेज़ न रखें। सामान्य गति से एक अनुच्छेद पढ़ें, वाक्य के अंत में साँस लेने का समय जाँचें और धीरे-धीरे गति बढ़ाएँ।', '렌즈 가까이에 화면 배치하기': 'स्क्रीन को लेंस के पास रखें', '화면과 렌즈가 멀수록 시선 차이가 커집니다. 스마트폰이나 태블릿을 렌즈 바로 아래에 두고, 읽는 기준선이 가능한 한 렌즈 가까이에 오도록 높이를 맞추세요.': 'स्क्रीन जितनी लेंस से दूर होगी, नज़र का अंतर उतना दिखेगा। फ़ोन या टैबलेट को लेंस के ठीक नीचे रखें और गाइड लाइन को लेंस के पास लाएँ।', '강조와 멈춤을 대본에 표시하기': 'ज़ोर और विराम चिह्नित करें', '강조할 단어 앞에 줄바꿈을 넣고, 잠시 멈출 곳에는 빈 줄이나 ‘/’를 사용해 보세요. 시각적 표시가 있으면 같은 속도로 흘러가도 말의 리듬을 유지하기 쉽습니다.': 'ज़ोर वाले शब्द से पहले नई पंक्ति और विराम के लिए खाली पंक्ति या “/” रखें। दृश्य संकेत बोलने की लय बनाए रखते हैं।', '30초 분량으로 먼저 테스트하기': 'पहले 30 सेकंड जाँचें', '전체 촬영 전에 짧은 구간을 녹화해 시선, 음량, 스크롤 속도를 확인하세요. 한 번의 짧은 테스트가 긴 재촬영을 줄여 줍니다.': 'पूरी रिकॉर्डिंग से पहले छोटा भाग रिकॉर्ड करके नज़र, आवाज़ और स्क्रॉल गति जाँचें। छोटा परीक्षण लंबे रीटेक से बचाता है।',
  '자주 묻는 질문': 'अक्सर पूछे जाने वाले प्रश्न', '입력한 대본이 외부로 전송되나요?': 'क्या मेरी स्क्रिप्ट कहीं भेजी जाती है?', '아니요. 대본은 브라우저의 localStorage에만 저장되며 별도 서버로 전송하지 않습니다. 공용 기기에서는 사용 후 브라우저 사이트 데이터를 삭제해 주세요.': 'नहीं। स्क्रिप्ट केवल इस ब्राउज़र के स्थानीय स्टोरेज में रहती है और किसी सर्वर पर नहीं भेजी जाती। साझा डिवाइस पर उपयोग के बाद साइट डेटा मिटाएँ।', '스마트폰에서도 사용할 수 있나요?': 'क्या इसे स्मार्टफ़ोन पर उपयोग कर सकते हैं?', '최신 모바일 브라우저에서 사용할 수 있습니다. 화면을 가로로 돌리고 전체 화면을 사용하면 더 넓은 대본 화면을 확보할 수 있습니다.': 'हाँ, यह आधुनिक मोबाइल ब्राउज़र में काम करता है। स्क्रीन घुमाएँ और चौड़ी स्क्रिप्ट के लिए फ़ुलस्क्रीन उपयोग करें।', '좌우 반전은 언제 사용하나요?': 'मिरर मोड कब उपयोग करें?', '반투명 반사 유리를 사용하는 텔레프롬프터 장비에 화면을 비출 때 사용합니다. 일반 화면을 직접 보는 경우에는 반전을 끄면 됩니다.': 'इसे परावर्तक काँच वाले टेलीप्रॉम्प्टर उपकरण के साथ उपयोग करें। सामान्य स्क्रीन सीधे देखते समय इसे बंद रखें।', '저장한 대본은 얼마나 오래 남나요?': 'सेव स्क्रिप्ट कितने समय रहती है?', '브라우저 사이트 데이터를 지우거나 비공개 모드를 종료하기 전까지 해당 브라우저에 남습니다. 브라우저나 기기 사이에서 자동 동기화되지는 않습니다.': 'यह ब्राउज़र में तब तक रहती है जब तक साइट डेटा मिटाया न जाए या निजी सत्र बंद न हो। यह ब्राउज़र या डिवाइस के बीच सिंक नहीं होती।',
  '말하는 사람의 시선을 위한 간결한 도구.': 'वक्ता की नज़र सामने रखने वाला सरल उपकरण।', '서비스 소개': 'सेवा परिचय', '개인정보처리방침': 'गोपनीयता नीति', '상세 사용 가이드': 'विस्तृत उपयोग गाइड', '사용 가이드': 'उपयोग गाइड', '개인정보': 'गोपनीयता'
};

const japaneseText = {
  ...englishText,
  '본문으로 바로가기': 'メインコンテンツへ移動', '텔레프롬프터': 'テレプロンプター', '사용법': '使い方', '촬영 팁': '撮影のヒント', '소개': '紹介', '바로 시작': '今すぐ始める', '주요 메뉴': 'メインメニュー', '서비스 특징': 'サービスの特徴', '텔레프롬프터 설정': 'テレプロンプター設定', '대본 재생 화면': '原稿再生エリア', '스크롤되는 대본': 'スクロールする原稿', '하단 메뉴': 'フッターメニュー', 'Ezprompter 홈': 'Ezprompter ホーム', '언어 선택': '言語を選択',
  '무료 · 설치 없음 · 기기 내 저장': '無料・インストール不要・端末内に保存', '카메라를 보며': 'カメラを見ながら', '자연스럽게 말하세요': '自然に話しましょう', 'Ezprompter는 발표, 강의, 인터뷰와 영상 촬영을 위한 브라우저 텔레프롬프터입니다. 회원가입 없이 대본을 넣고 내 속도에 맞춰 연습할 수 있습니다.': 'Ezprompterは、プレゼン、講義、インタビュー、動画撮影に使えるブラウザ型テレプロンプターです。登録不要で原稿を入力し、自分のペースで練習できます。',
  '텔레프롬프터 열기': 'テレプロンプターを開く', '3분 사용법 보기': '3分ガイドを見る', '대본은 서버로 전송하지 않음': '原稿をサーバーに送信しません', '모바일·태블릿·PC 지원': 'スマホ・タブレット・PC対応', '좌우 반전과 전체 화면': '左右反転と全画面', '전하고 싶은 이야기에': '伝えたいことに', '온전히 집중하세요.': '集中しましょう。', '온라인 텔레프롬프터': 'オンラインテレプロンプター', '대본과 설정은 이 브라우저의 저장 공간에만 보관됩니다.': '原稿と設定は、このブラウザ内にのみ保存されます。',
  '속도': '速度', '글자': '文字サイズ', '행간': '行間', '왼쪽 정렬': '左揃え', '좌우 반전': '左右反転', '대본 편집': '原稿を編集', '전체 화면': '全画面', '시작': '開始', '계속': '再開', '정지': '一時停止', '편집 완료': '編集を完了', 'Space 시작·정지 · ↑↓ 속도 · R 처음으로 · E 편집': 'Space 再生・停止 · ↑↓ 速度 · R 先頭 · E 編集', '재생 준비': '再生準備完了', '재생 일시 정지': '一時停止中', '대본 재생 중': '原稿を再生中', '대본 처음으로 이동': '先頭に戻りました', '브라우저 설정으로 인해 대본을 저장하지 못했습니다.': 'ブラウザの設定により原稿を保存できませんでした。', '이 브라우저는 전체 화면을 지원하지 않습니다.': 'このブラウザは全画面表示に対応していません。', '전체 화면을 시작할 수 없습니다.': '全画面表示を開始できませんでした。',
  '처음이라면 이렇게 시작하세요': '3ステップで始めましょう', '복잡한 설정 없이 세 단계면 충분합니다.': '複雑な設定は不要。3ステップで使えます。', '대본을 붙여 넣기': '原稿を貼り付ける', '‘대본 편집’을 누르고 원고를 입력하세요. 짧은 문장 단위로 줄을 바꾸면 읽는 호흡을 잡기 쉽습니다.': '「原稿を編集」を押して文章を入力します。短いフレーズごとに改行すると、自然なリズムで読みやすくなります。', '읽기 편하게 맞추기': '読みやすく調整する', '카메라와 눈 사이 거리에 맞춰 글자 크기를 정하고, 소리 내어 읽으며 속도를 조절하세요.': 'カメラとの距離に合わせて文字サイズを決め、声に出して読みながら速度を調整します。', '시선 확인 후 촬영': '視線を確認して撮影', '전체 화면과 좌우 반전을 필요에 따라 켜고, 기준선 근처의 문장을 보며 자연스럽게 말하세요.': '必要に応じて全画面と左右反転を使い、ガイドライン付近を見ながら自然に話します。',
  '더 자연스러운 촬영을 위한 6가지 팁': '自然に撮影するための6つのヒント', '실제 촬영에서 바로 적용할 수 있는 기본 원칙입니다.': '実際の撮影ですぐに使える基本ポイントです。', '대본을 말하는 문장으로 바꾸기': '話し言葉で原稿を書く', '글로 읽기 좋은 문장과 입으로 말하기 좋은 문장은 다릅니다. 긴 수식어를 줄이고 한 문장에 하나의 메시지만 담아 보세요. 평소 쓰는 단어로 바꾸면 표정과 억양도 자연스러워집니다.': '読みやすい文章と話しやすい文章は異なります。長い修飾を減らし、一文に一つの内容だけを入れ、普段使う言葉にしましょう。', '한 줄을 짧게 유지하기': '一行を短くする', '시선이 좌우로 크게 움직이면 카메라에서 읽는 모습이 드러납니다. 대본 너비를 좁히거나 문장을 적절히 줄바꿈해 한 줄의 이동 거리를 줄이세요.': '視線が左右に大きく動くと読んでいることが伝わります。原稿幅を狭くするか適切に改行しましょう。', '속도보다 호흡을 먼저 맞추기': '速度より先に呼吸を合わせる', '처음부터 빠르게 설정하지 마세요. 평소 말하기 속도로 한 문단을 읽고, 문장 끝에서 충분히 숨을 쉴 수 있는지 확인한 다음 조금씩 속도를 높이는 편이 좋습니다.': '最初から速くせず、普段の速度で読み、文末で呼吸できることを確認してから少しずつ速くします。', '렌즈 가까이에 화면 배치하기': '画面をレンズの近くに置く', '화면과 렌즈가 멀수록 시선 차이가 커집니다. 스마트폰이나 태블릿을 렌즈 바로 아래에 두고, 읽는 기준선이 가능한 한 렌즈 가까이에 오도록 높이를 맞추세요.': '端末をレンズのすぐ下に置き、ガイドラインをできるだけレンズに近づけます。', '강조와 멈춤을 대본에 표시하기': '強調と間を原稿に記す', '강조할 단어 앞에 줄바꿈을 넣고, 잠시 멈출 곳에는 빈 줄이나 ‘/’를 사용해 보세요. 시각적 표시가 있으면 같은 속도로 흘러가도 말의 리듬을 유지하기 쉽습니다.': '強調する語の前で改行し、間を置く場所には空行や「/」を使うとリズムを保ちやすくなります。', '30초 분량으로 먼저 테스트하기': 'まず30秒テストする', '전체 촬영 전에 짧은 구간을 녹화해 시선, 음량, 스크롤 속도를 확인하세요. 한 번의 짧은 테스트가 긴 재촬영을 줄여 줍니다.': '本番前に短く録画して、視線、音量、スクロール速度を確認しましょう。',
  '자주 묻는 질문': 'よくある質問', '입력한 대본이 외부로 전송되나요?': '入力した原稿は外部に送信されますか？', '아니요. 대본은 브라우저의 localStorage에만 저장되며 별도 서버로 전송하지 않습니다. 공용 기기에서는 사용 후 브라우저 사이트 데이터를 삭제해 주세요.': 'いいえ。原稿はブラウザ内にのみ保存され、外部サーバーには送信されません。共有端末では使用後にサイトデータを削除してください。', '스마트폰에서도 사용할 수 있나요?': 'スマートフォンでも使えますか？', '최신 모바일 브라우저에서 사용할 수 있습니다. 화면을 가로로 돌리고 전체 화면을 사용하면 더 넓은 대본 화면을 확보할 수 있습니다.': '最新のモバイルブラウザで使えます。横向きと全画面で原稿を広く表示できます。', '좌우 반전은 언제 사용하나요?': '左右反転はいつ使いますか？', '반투명 반사 유리를 사용하는 텔레프롬프터 장비에 화면을 비출 때 사용합니다. 일반 화면을 직접 보는 경우에는 반전을 끄면 됩니다.': '反射ガラスを使う機器で使用します。通常の画面を直接見る場合はオフにします。', '저장한 대본은 얼마나 오래 남나요?': '保存した原稿はいつまで残りますか？', '브라우저 사이트 데이터를 지우거나 비공개 모드를 종료하기 전까지 해당 브라우저에 남습니다. 브라우저나 기기 사이에서 자동 동기화되지는 않습니다.': 'サイトデータを削除するかプライベートモードを終了するまで残り、端末間では同期されません。', '말하는 사람의 시선을 위한 간결한 도구.': '話す人の視線を前に保つシンプルなツール。', '서비스 소개': 'サービス紹介', '개인정보처리방침': 'プライバシーポリシー', '상세 사용 가이드': '詳しい使い方', '사용 가이드': '利用ガイド', '개인정보': 'プライバシー'
};

const portugueseText = {
  ...englishText,
  '본문으로 바로가기': 'Ir para o conteúdo principal', '텔레프롬프터': 'Teleprompter', '사용법': 'Como usar', '촬영 팁': 'Dicas de gravação', '소개': 'Sobre', '바로 시작': 'Começar agora', '주요 메뉴': 'Menu principal', '서비스 특징': 'Recursos do serviço', '텔레프롬프터 설정': 'Configurações do teleprompter', '대본 재생 화면': 'Área de reprodução do roteiro', '스크롤되는 대본': 'Roteiro em rolagem', '하단 메뉴': 'Menu do rodapé', 'Ezprompter 홈': 'Página inicial do Ezprompter', '언어 선택': 'Selecionar idioma',
  '무료 · 설치 없음 · 기기 내 저장': 'GRÁTIS · SEM INSTALAÇÃO · SALVO NO DISPOSITIVO', '카메라를 보며': 'Olhe para a câmera', '자연스럽게 말하세요': 'e fale naturalmente', 'Ezprompter는 발표, 강의, 인터뷰와 영상 촬영을 위한 브라우저 텔레프롬프터입니다. 회원가입 없이 대본을 넣고 내 속도에 맞춰 연습할 수 있습니다.': 'O Ezprompter é um teleprompter no navegador para apresentações, aulas, entrevistas e gravações. Insira seu roteiro e pratique no seu ritmo, sem criar uma conta.',
  '텔레프롬프터 열기': 'Abrir teleprompter', '3분 사용법 보기': 'Ver o guia de 3 minutos', '대본은 서버로 전송하지 않음': 'O roteiro nunca é enviado ao servidor', '모바일·태블릿·PC 지원': 'Funciona em celular, tablet e PC', '좌우 반전과 전체 화면': 'Espelhamento e tela cheia', '전하고 싶은 이야기에': 'Concentre-se totalmente', '온전히 집중하세요.': 'no que quer dizer.', '온라인 텔레프롬프터': 'Teleprompter on-line', '대본과 설정은 이 브라우저의 저장 공간에만 보관됩니다.': 'Seu roteiro e suas configurações ficam somente neste navegador.',
  '속도': 'Velocidade', '글자': 'Tamanho', '행간': 'Entrelinha', '왼쪽 정렬': 'Alinhar à esquerda', '좌우 반전': 'Espelhar', '대본 편집': 'Editar roteiro', '전체 화면': 'Tela cheia', '시작': 'Iniciar', '계속': 'Continuar', '정지': 'Pausar', '편집 완료': 'Concluir edição', 'Space 시작·정지 · ↑↓ 속도 · R 처음으로 · E 편집': 'Espaço reproduzir/pausar · ↑↓ velocidade · R reiniciar · E editar', '재생 준비': 'Pronto para reproduzir', '재생 일시 정지': 'Reprodução pausada', '대본 재생 중': 'Reproduzindo roteiro', '대본 처음으로 이동': 'Voltou ao início', '브라우저 설정으로 인해 대본을 저장하지 못했습니다.': 'As configurações do navegador impediram o salvamento do roteiro.', '이 브라우저는 전체 화면을 지원하지 않습니다.': 'Este navegador não oferece suporte à tela cheia.', '전체 화면을 시작할 수 없습니다.': 'Não foi possível iniciar a tela cheia.',
  '처음이라면 이렇게 시작하세요': 'Comece em três etapas', '복잡한 설정 없이 세 단계면 충분합니다.': 'Três etapas simples são suficientes.', '대본을 붙여 넣기': 'Cole seu roteiro', '‘대본 편집’을 누르고 원고를 입력하세요. 짧은 문장 단위로 줄을 바꾸면 읽는 호흡을 잡기 쉽습니다.': 'Selecione “Editar roteiro” e insira o texto. Quebras em trechos curtos ajudam a encontrar um ritmo natural.', '읽기 편하게 맞추기': 'Ajuste para ler com conforto', '카메라와 눈 사이 거리에 맞춰 글자 크기를 정하고, 소리 내어 읽으며 속도를 조절하세요.': 'Defina o tamanho do texto conforme a distância da câmera e ajuste a velocidade enquanto lê em voz alta.', '시선 확인 후 촬영': 'Confira o olhar e grave', '전체 화면과 좌우 반전을 필요에 따라 켜고, 기준선 근처의 문장을 보며 자연스럽게 말하세요.': 'Use tela cheia e espelhamento quando necessário e fale naturalmente lendo perto da linha-guia.',
  '더 자연스러운 촬영을 위한 6가지 팁': '6 dicas para gravações mais naturais', '실제 촬영에서 바로 적용할 수 있는 기본 원칙입니다.': 'Princípios práticos para aplicar na próxima gravação.', '대본을 말하는 문장으로 바꾸기': 'Escreva como você fala', '글로 읽기 좋은 문장과 입으로 말하기 좋은 문장은 다릅니다. 긴 수식어를 줄이고 한 문장에 하나의 메시지만 담아 보세요. 평소 쓰는 단어로 바꾸면 표정과 억양도 자연스러워집니다.': 'Textos escritos e falados são diferentes. Reduza trechos longos, mantenha uma ideia por frase e use palavras familiares.', '한 줄을 짧게 유지하기': 'Mantenha cada linha curta', '시선이 좌우로 크게 움직이면 카메라에서 읽는 모습이 드러납니다. 대본 너비를 좁히거나 문장을 적절히 줄바꿈해 한 줄의 이동 거리를 줄이세요.': 'Movimentos amplos dos olhos revelam a leitura. Reduza a largura do roteiro ou use quebras de linha.', '속도보다 호흡을 먼저 맞추기': 'Ajuste a respiração antes da velocidade', '처음부터 빠르게 설정하지 마세요. 평소 말하기 속도로 한 문단을 읽고, 문장 끝에서 충분히 숨을 쉴 수 있는지 확인한 다음 조금씩 속도를 높이는 편이 좋습니다.': 'Não comece rápido demais. Leia no ritmo normal, confira a respiração no fim das frases e aumente a velocidade aos poucos.', '렌즈 가까이에 화면 배치하기': 'Posicione a tela perto da lente', '화면과 렌즈가 멀수록 시선 차이가 커집니다. 스마트폰이나 태블릿을 렌즈 바로 아래에 두고, 읽는 기준선이 가능한 한 렌즈 가까이에 오도록 높이를 맞추세요.': 'Coloque o dispositivo logo abaixo da lente e aproxime a linha-guia dela para reduzir o desvio do olhar.', '강조와 멈춤을 대본에 표시하기': 'Marque ênfases e pausas', '강조할 단어 앞에 줄바꿈을 넣고, 잠시 멈출 곳에는 빈 줄이나 ‘/’를 사용해 보세요. 시각적 표시가 있으면 같은 속도로 흘러가도 말의 리듬을 유지하기 쉽습니다.': 'Quebre a linha antes de palavras enfatizadas e use uma linha vazia ou “/” nas pausas para manter o ritmo.', '30초 분량으로 먼저 테스트하기': 'Faça primeiro um teste de 30 segundos', '전체 촬영 전에 짧은 구간을 녹화해 시선, 음량, 스크롤 속도를 확인하세요. 한 번의 짧은 테스트가 긴 재촬영을 줄여 줍니다.': 'Grave um trecho curto para conferir olhar, volume e velocidade de rolagem antes da tomada completa.',
  '자주 묻는 질문': 'Perguntas frequentes', '입력한 대본이 외부로 전송되나요?': 'Meu roteiro é enviado para algum lugar?', '아니요. 대본은 브라우저의 localStorage에만 저장되며 별도 서버로 전송하지 않습니다. 공용 기기에서는 사용 후 브라우저 사이트 데이터를 삭제해 주세요.': 'Não. O roteiro é salvo apenas neste navegador e não é enviado a outro servidor. Apague os dados do site após usar um dispositivo compartilhado.', '스마트폰에서도 사용할 수 있나요?': 'Posso usar em um smartphone?', '최신 모바일 브라우저에서 사용할 수 있습니다. 화면을 가로로 돌리고 전체 화면을 사용하면 더 넓은 대본 화면을 확보할 수 있습니다.': 'Sim. Gire a tela e use a tela cheia para ampliar a área do roteiro.', '좌우 반전은 언제 사용하나요?': 'Quando devo usar o espelhamento?', '반투명 반사 유리를 사용하는 텔레프롬프터 장비에 화면을 비출 때 사용합니다. 일반 화면을 직접 보는 경우에는 반전을 끄면 됩니다.': 'Use com equipamentos que refletem a tela em um vidro. Deixe desligado ao ler diretamente na tela.', '저장한 대본은 얼마나 오래 남나요?': 'Por quanto tempo o roteiro fica salvo?', '브라우저 사이트 데이터를 지우거나 비공개 모드를 종료하기 전까지 해당 브라우저에 남습니다. 브라우저나 기기 사이에서 자동 동기화되지는 않습니다.': 'Ele permanece até você apagar os dados do site ou encerrar uma sessão privada e não é sincronizado entre dispositivos.', '말하는 사람의 시선을 위한 간결한 도구.': 'Uma ferramenta simples que mantém o olhar de quem fala para a frente.', '서비스 소개': 'Sobre o serviço', '개인정보처리방침': 'Política de privacidade', '상세 사용 가이드': 'Guia de uso detalhado', '사용 가이드': 'Guia de uso', '개인정보': 'Privacidade'
};

const translations = { en: englishText, 'zh-CN': chineseText, hi: hindiText, ja: japaneseText, 'pt-BR': portugueseText };
const supportedLanguages = ['ko', 'en', 'zh-CN', 'hi', 'ja', 'pt-BR'];

const pageMetadata = {
  ko: {
    title: 'Ezprompter — 무료 온라인 텔레프롬프터',
    description: '설치 없이 사용하는 무료 온라인 텔레프롬프터. 대본 자동 스크롤, 속도·글자 크기 조절, 좌우 반전과 실전 촬영 가이드를 제공합니다.'
  },
  en: {
    title: 'Ezprompter — Free Online Teleprompter',
    description: 'A free online teleprompter with automatic scrolling, speed and text controls, mirror mode, and practical recording tips.'
  },
  'zh-CN': {
    title: 'Ezprompter — 免费在线提词器',
    description: '无需安装的免费在线提词器，支持自动滚动、速度与字号调节、镜像模式和实用拍摄技巧。'
  },
  hi: {
    title: 'Ezprompter — मुफ़्त ऑनलाइन टेलीप्रॉम्प्टर',
    description: 'स्वचालित स्क्रॉल, गति व अक्षर नियंत्रण, मिरर मोड और रिकॉर्डिंग सुझावों वाला मुफ़्त ऑनलाइन टेलीप्रॉम्प्टर।'
  },
  ja: { title: 'Ezprompter — 無料オンラインテレプロンプター', description: '自動スクロール、速度・文字サイズ調整、左右反転、実用的な撮影ヒントを備えた無料オンラインテレプロンプターです。' },
  'pt-BR': { title: 'Ezprompter — Teleprompter on-line grátis', description: 'Teleprompter on-line grátis com rolagem automática, controles de velocidade e texto, espelhamento e dicas práticas de gravação.' }
};

// 저장소 사용이 제한된 환경에서도 언어 설정을 안전하게 읽는다.
function readLanguagePreference() { try { return localStorage.getItem(languageStorageKey); } catch { return null; } }

// 사용자가 고른 언어를 다음 방문에도 유지하되 저장 실패는 무시한다.
function saveLanguagePreference(language) { try { localStorage.setItem(languageStorageKey, language); } catch { /* 자동 감지는 저장소 없이도 동작한다. */ } }

// 공유 가능한 ?lang 링크를 우선하고, 그 외에는 저장값과 브라우저 기본 언어 순으로 결정한다.
function getInitialLanguage() {
  const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  if (supportedLanguages.includes(requestedLanguage)) return requestedLanguage;
  const savedLanguage = readLanguagePreference();
  if (supportedLanguages.includes(savedLanguage)) return savedLanguage;
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith('ko')) return 'ko';
  if (browserLanguage.startsWith('zh')) return 'zh-CN';
  if (browserLanguage.startsWith('hi')) return 'hi';
  if (browserLanguage.startsWith('ja')) return 'ja';
  if (browserLanguage.startsWith('pt')) return 'pt-BR';
  return 'en';
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
    const translatedText = translations[language]?.[trimmedText];
    node.nodeValue = translatedText ? koreanText.replace(trimmedText, translatedText) : koreanText;
  });
}

// 화면에 보이지 않는 접근성 레이블도 표시 언어와 동일하게 맞춘다.
function translateAttributes(language) {
  document.querySelectorAll('[aria-label]').forEach((element) => {
    if (!element.dataset.koreanAriaLabel) element.dataset.koreanAriaLabel = element.getAttribute('aria-label');
    const koreanLabel = element.dataset.koreanAriaLabel;
    element.setAttribute('aria-label', translations[language]?.[koreanLabel] || koreanLabel);
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
    languageSelect.setAttribute('aria-label', translations[language]?.['언어 선택'] || (language === 'en' ? 'Select language' : '언어 선택'));
  }
  if (notify) document.dispatchEvent(new CustomEvent('ezprompter:languagechange', { detail: { language } }));
}

window.EzI18n = {
  get language() { return document.documentElement.lang; },
  text(koreanText) { return translations[this.language]?.[koreanText] || koreanText; },
  applyLanguage
};

applyLanguage(getInitialLanguage(), false);
const languageSelect = document.querySelector('#languageSelect');
if (languageSelect) {
  // 명시적인 사용자 선택을 저장하고 현재 페이지에 즉시 적용한다.
  languageSelect.addEventListener('change', (event) => {
    const language = supportedLanguages.includes(event.target.value) ? event.target.value : 'en';
    saveLanguagePreference(language);
    applyLanguage(language);
  });
}
