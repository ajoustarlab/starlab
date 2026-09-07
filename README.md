# STAR Lab Website (Ajou University)

순수 HTML/CSS/JS로 만든 다중 페이지 사이트입니다. 빌드 과정 없이 GitHub 웹에서
파일을 직접 수정·커밋하면 GitHub Pages가 바로 반영합니다.

## 페이지 (8개)
- `index.html` — 홈
- `people.html` — 구성원
- `projects.html` — 연구과제 (역할 태그: PI/Co-PI/Participant)
- `publications.html` — 논문 (연도 필터 + Books + Patents 탭)
- `presentations.html` — 학회발표 (연도/International 필터)
- `teaching.html` — 강의 (학기별)
- `gallery.html` — 갤러리
- `contact.html` — 연락처

## 자주 하는 수정
- **논문 추가**: `publications.html` 아래쪽 `const pubs=[ ... ]` 배열에 한 줄 추가.
  형식: `{y:2025,h:'저자. 제목. <span class="venue">저널명</span>, 권(호), 쪽.'}`
  2015–2019 논문은 `e:1` 을 붙이면 "이전 논문 보기" 토글에 들어갑니다.
- **저서/특허**: 같은 파일의 `const books=[...]`, `const patents=[...]` 배열 수정.
- **학회발표 추가**: `presentations.html` 의 `const pres=[...]` 배열.
  국제학회는 `intl:true`, 2015–2022 발표는 `e:1`.
- **연구과제 추가**: `projects.html` 의 `const projects=[...]` 배열.
  `role`은 `'pi'`(책임)/`'co'`(공동)/`'part'`(참여).
- **강의 추가**: `teaching.html` 의 `<div class="term">` 블록을 복사해 맨 위에 추가.

## 다국어 (EN/KO)
- 요소에 `data-en` / `data-ko` 속성을 넣으면 상단 EN/KO 버튼으로 전환됩니다.
- `data-ko`가 없는 요소는 KO 모드에서도 영어 그대로 유지됩니다.
- 선택한 언어는 브라우저(localStorage)에 저장되어 페이지 이동 시 유지됩니다.

## 내비게이션 수정
nav는 8개 파일에 각각 들어 있습니다(순수 HTML 제약). 메뉴를 바꾸려면
각 파일의 `<!-- COMMON NAV -->` 블록을 동일하게 수정하세요.

## 사진
- 구성원 사진: `images/people/` 에 파일을 넣고 people.html의 파일명과 맞춥니다.
- 갤러리: `images/gallery/` 에 이미지를 넣으면 자동으로 그리드에 표시됩니다.

## 배포 (GitHub Pages)
이 폴더 **안의 내용물**(index.html, assets/, images/ …)을 저장소 **루트**에 올립니다.
폴더째로 올리면 사이트가 `/starlab-site/` 아래로 들어가 깨지니 주의하세요.
`.nojekyll` 파일은 그대로 두세요(Jekyll 처리 방지).
