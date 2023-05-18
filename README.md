# fe-sprint-coz-shopping

![](https://velog.velcdn.com/images/wlsdk0313/post/5d782abc-4ba9-458d-833e-6d883567acf0/image.png)

## 🪄 Design

[Figma](https://www.figma.com/file/TfWAvMXegGEJiS3etqOSfs/FE-S4-project?type=design&node-id=3-77&t=GGO2lDHX8PKF92Aq-0)

---

## 💿 Installation & Execution

```bash
$ git clone https://github.com/wlsdk7245/fe-sprint-coz-shopping.git
$ npm install
$ npm run start
```

---

## 🛠 Stacks

### Environment

<img src="https://img.shields.io/badge/VISUAL STUDIO CODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"><img src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white">

### Config

<img src="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development

<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000"><img src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=000000"><img src="https://img.shields.io/badge/STYLEDCOMPONENTS-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

### Design & Communication

<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

---

## 📓 주요 기능

### 공통 컴포넌트

- 헤더
  - 드롭다운 구현
- 푸터
- 카드
  - 상품, 카테고리, 기획전, 브랜드별 처리
  - 데이터 없을 경우 Skeleton 처리
- 카드 리스트
  - 4개씩 그리드
  - 받아오는 데이터 없을 경우 데이터 없음 보여줌
- 북마크
- 모달
- 토스트

### 메인페이지

![](https://velog.velcdn.com/images/wlsdk0313/post/25b96e08-622a-42d2-baca-e88f47ead8b2/image.png)

- 상품 카드 리스트

### 상품리스트페이지

![](https://velog.velcdn.com/images/wlsdk0313/post/30b01cde-a966-421a-8317-5a8c164af8eb/image.png)

- 상품리스트는 서버에서 가져오는 데이터 계속 가져오도록 무한스크롤 처리

### 북마크페이지

![](https://velog.velcdn.com/images/wlsdk0313/post/da527ff6-b518-4ca0-8cc4-0855383609c5/image.png)

- 20개씩 페이징해서 무한스크롤 처리 (localStorage)

---

## 🗂 디렉토리 구조

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── images
│   │   ├── bookmark-off.png
│   │   ├── bookmark-on.png
│   │   ├── bookmark.png
│   │   ├── category
│   │   ├── close-button.png
│   │   ├── logo.png
│   │   ├── menu.png
│   │   └── product.png
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── app.component => 공통 컴포넌트
    │   ├── bookmark
    │   ├── card
    │   ├── cardList
    │   ├── error
    │   ├── filter
    │   ├── layout
    │   ├── modal
    │   └── toast
    ├── app.constant => 재활용 가능한 상수 / 모듈 관리
    │   ├── animation.js
    │   └── cardConstant.js
    ├── app.feature => 각 페이지별 컴포넌트 관리
    │   ├── Bookmark
    │   ├── Main
    │   └── Product
    ├── app.hook
    │   └── useIntersectionObserver.jsx
    ├── index.css
    ├── index.js
    ├── pages => 각 페이지 관리
    │   ├── BookmarkPage.jsx
    │   ├── MainPage.jsx
    │   └── ProductPage.jsx
    └── reportWebVitals.js
```
