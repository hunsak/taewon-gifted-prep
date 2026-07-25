# taewon-gifted-prep

태원이 서울시교육청 영재교육원(남부, 초등 수학) 재도전 준비 계획 웹앱.

## 올리는 방법 (5분)

1. GitHub에서 새 저장소 생성: `taewon-gifted-prep` (Public)
2. 이 폴더의 4개 파일(`index.html`, `manifest.json`, `sw.js`, `README.md`)을 저장소 루트에 업로드
   - GitHub 웹사이트에서 "Add file → Upload files"로 드래그 앤 드롭하면 됩니다.
3. 저장소 Settings → Pages → Branch를 `main` / `/(root)`로 설정 → Save
4. 잠시 후 `https://hunsak.github.io/taewon-gifted-prep/` 에서 접속 가능

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
