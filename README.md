# taewon-gifted-prep

태원이 서울시교육청 영재교육원(남부, 초등 수학) 재도전 준비 계획 웹앱.

## 올리는 방법 (5분)

1. GitHub에서 새 저장소 생성: `taewon-gifted-prep` (Public)
2. 이 폴더의 6개 파일(`index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `README.md`)을 저장소 루트에 업로드
   - GitHub 웹사이트에서 "Add file → Upload files"로 드래그 앤 드롭하면 됩니다.
3. 저장소 Settings → Pages → Branch를 `main` / `/(root)`로 설정 → Save
4. 잠시 후 `https://hunsak.github.io/taewon-gifted-prep/` 에서 접속 가능

## 태원이 폰에 앱처럼 설치하기 (PWA)

`https://hunsak.github.io/taewon-gifted-prep/` 를 태원이 폰 브라우저로 열고:

**iPhone (Safari로 열어야 함)**
1. 하단 공유 아이콘(네모+화살표) 탭
2. "홈 화면에 추가" 선택
3. 이름 확인 후 "추가" 탭 → 홈 화면에 앱 아이콘 생김

**Android (Chrome)**
1. 우측 상단 점 3개(메뉴) 탭
2. "앱 설치" 또는 "홈 화면에 추가" 선택
3. "설치" 탭 → 홈 화면/앱 서랍에 아이콘 생김

한 번 설치하면 브라우저 주소창 없이 일반 앱처럼 열리고, 오프라인에서도 체크리스트 화면은 그대로 볼 수 있어요 (저장은 인터넷 연결 시에만 GitHub에 반영됩니다).

## 저장(동기화) 켜기

1. GitHub → 오른쪽 상단 프로필 → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. `repo` 권한만 체크해서 새 토큰 생성 (Fine-grained 토큰의 경우 이 저장소에 Contents: Read/Write 권한)
3. 앱 화면 상단 입력창에 토큰을 붙여넣고 "토큰 저장" 클릭
   - 토큰은 이 브라우저의 localStorage에만 저장되고, 코드나 GitHub에는 절대 올라가지 않습니다.
4. 이제 "GitHub에 저장" 버튼으로 체크리스트 진행 상황이 `data.json`으로 저장소에 저장됩니다.
5. 다른 기기(예: 태블릿, 다른 브라우저)에서 열면 토큰 없이도 자동으로 최신 데이터를 불러옵니다. 저장할 때만 토큰이 필요합니다.

## 시험일 수정

`index.html` 안의 `EXAM_DATE_DEFAULT` 값(현재 `2026-12-05`, 작년 시험일 패턴 기준 추정치)을
2027학년도 공고가 나오면 실제 시험일로 바꿔주세요.
