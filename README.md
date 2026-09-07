# STAR Lab Homepage

STatistical Analysis Research Lab, Ajou University — 정적 웹사이트 (단일 `index.html`).

## 포함된 기능
- 반응형 원페이지: Research / People / Publications / Teaching / Contact
- 논문 목록: 연도 필터 + "이전 논문 더보기" 토글
- 외부 프로필 연동: Google Scholar / ORCID / arXiv 버튼

## GitHub Pages 배포
1. GitHub에서 새 저장소 생성 (예: `starlab-site`).
2. `index.html`, `.nojekyll`, `README.md`를 업로드하거나 push.
3. Settings → Pages → Source: `Deploy from a branch`.
4. Branch: `main` / `/ (root)` → Save.
5. 1~2분 후 `https://<사용자명>.github.io/<저장소명>/` 에서 확인.

저장소 이름을 `<사용자명>.github.io`로 만들면 루트 도메인에 바로 게시됩니다.

## 수정 안내 (모두 `index.html` 안에서)
- **논문**: `const pubs=[...]` 배열 편집. `y`=연도, `h`=본문 HTML, `e:1`=이전 논문(기본 숨김).
- **구성원**: PEOPLE 섹션의 `.roster` / `.alumni-list` 블록 편집.
- **외부 프로필**: PI 소개 아래 `.profiles` 블록의 링크 URL을 실제 주소로 교체
  (ORCID, arXiv는 현재 임시 링크이니 실제 계정 주소로 바꾸세요).
- **색상**: `:root` CSS 변수(`--ink`, `--accent` 등)에서 일괄 변경.

## 참고
- 폰트는 외부 CDN에서 불러옵니다. 인터넷 연결 시 정상 표시됩니다.
- 요약 수치(논문 70+ 등)는 대략값이니 `stat-card`에서 조정하세요.
- 프로필 사진은 개인정보라 넣지 않았습니다. 넣으려면 이미지를 저장소에 올리고 각 `.member`에 `<img>`를 추가하면 됩니다.
