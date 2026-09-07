# STAR Lab Homepage (multi-page)

STatistical Analysis Research Lab, Ajou University.
정적 사이트 — GitHub 웹에서 파일만 편집하면 유지보수됩니다. 빌드 과정 없음.

## 파일 구조
```
index.html          홈
people.html         구성원 (사진 + 이니셜 플레이스홀더)
publications.html   논문 (연도 필터)
teaching.html       강의
gallery.html        갤러리 (클릭 확대)
contact.html        연락처 (지도)
assets/style.css    모든 페이지 공용 디자인 (색·폰트는 여기 한 곳)
assets/site.js      공용 동작 (언어 전환, 모바일 메뉴, 히어로 그래픽)
images/people/      구성원 사진
images/gallery/     갤러리 사진
.nojekyll           GitHub Pages 설정 (지우지 마세요)
```

## GitHub Pages 배포
Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save.
폴더째 올리면 됩니다(폴더 구조 유지). 주소: https://<아이디>.github.io/<저장소명>/

## 자주 하는 수정

### 사진 넣기 (구성원)
1. 사진을 `images/people/` 폴더에 업로드.
2. `people.html` 아래쪽 데이터 배열에서 그 사람의 `photo:` 값을 올린 파일명과 맞추면 끝.
   - 예: 표성인 → `photo:'sung-inn-pyo.jpg'` 이면 `images/people/sung-inn-pyo.jpg`
   - 사진이 없으면 이름 첫 글자가 든 회색 카드가 자동으로 표시됩니다(레이아웃 안 깨짐).
   - 교수님 사진은 `images/people/soonsun-kwon.jpg` 로 올리면 됩니다.

### 사진 넣기 (갤러리)
1. 사진을 `images/gallery/` 폴더에 업로드.
2. `gallery.html` 아래쪽 `photos` 배열에 한 줄 추가:
   `{file:'파일명.jpg', captionEn:'English caption', captionKo:'한글 설명'},`

### 구성원 추가/수정/삭제
`people.html` 아래 `phd` / `ms` / `ug` / `alumni` 배열에서 줄을 추가·수정·삭제.

### 논문 추가
`publications.html` 아래 `pubs` 배열 맨 위에 한 줄 추가:
`{y:2026,h:'저자. 제목. <span class="venue">저널명</span>.'},`

### 강의 추가
`teaching.html` 의 `.tlist` 안에 `<div>` 블록 복사해서 추가.

## 다국어 (한/영)
- 기본 언어는 영어. 우상단 EN/KO 버튼으로 전환되고, 선택은 브라우저에 기억됩니다.
- 한/영 둘 다 있는 텍스트는 이렇게 되어 있습니다:
  `<span data-en="Home" data-ko="홈">Home</span>`
  → `data-en`과 `data-ko` 두 속성만 바꾸면 각 언어 문구가 바뀝니다.
- 논문처럼 영어만 있는 항목은 `data-ko`가 없어도 됩니다(양쪽에서 영어로 표시).

## 메뉴·색상 등 공통 요소
- 색/폰트: `assets/style.css` 맨 위 `:root` 변수에서 한 번에 변경.
- 상단 메뉴(nav)와 하단(footer)은 각 HTML 파일에 똑같이 들어있습니다.
  메뉴 항목을 바꾸려면 6개 파일의 `<!-- COMMON NAV -->` 블록을 동일하게 고쳐야 합니다.
  (순수 HTML의 한계 — 자주 바뀌는 부분이 아니라 실무상 괜찮습니다.)

## 참고
- ORCID, arXiv 링크는 임시입니다. `people.html`의 `.profiles`에서 실제 주소로 교체하세요.
- 요약 수치(논문 70+ 등)는 대략값 — `index.html`의 `stat-card`에서 조정.
