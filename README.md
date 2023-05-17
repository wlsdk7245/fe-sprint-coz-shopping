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

<img src="https://img.shields.io/badge/VISUAL STUDIO CODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white">

<br/>

### Config

<img src="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white">

<br/>

### Development

<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000">
<img src="https://img.shields.io/badge/REACT-61DAFB?style=for-the-badge&logo=react&logoColor=000000">
<img src="https://img.shields.io/badge/STYLEDCOMPONENTS-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

<br/>

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

- 상품 카드 리스트

### 북마크페이지

- 20개씩 페이징해서 무한스크롤 처리 (localStorage)

### 상품리스트페이지

- 상품리스트는 서버에서 가져오는 데이터 계속 가져오도록 무한스크롤 처리

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
│   │   │   ├── Brand.png
│   │   │   ├── Category.png
│   │   │   ├── Exhibition.png
│   │   │   ├── Product.png
│   │   │   └── all.png
│   │   ├── close-button.png
│   │   ├── logo.png
│   │   ├── menu.png
│   │   ├── product.png
│   │   └── readme.png
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── app.component => 공통 컴포넌트
    │   ├── bookmark
    │   │   └── Bookmark.jsx
    │   ├── card
    │   │   ├── Card.jsx
    │   │   ├── CardContent.jsx
    │   │   └── CardImage.jsx
    │   ├── cardList
    │   │   ├── CardList.jsx
    │   │   └── NoneCardList.jsx
    │   ├── error
    │   │   └── Error.jsx
    │   ├── filter
    │   │   ├── Filter.jsx
    │   │   └── FilterItem.jsx
    │   ├── layout
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── HeaderDropdown.jsx
    │   │   └── Layout.jsx
    │   ├── modal
    │   │   ├── Modal.jsx
    │   │   └── ModalContainer.jsx
    │   └── toast
    │       ├── Toast.jsx
    │       ├── ToastBar.jsx
    │       ├── ToastContainer.jsx
    │       └── toaster.js
    ├── app.feature => 페이지
    │   ├── Bookmark
    │   │   └── Bookmark.jsx
    │   ├── Main
    │   │   ├── BookmarkList.jsx
    │   │   ├── Main.jsx
    │   │   └── ProductList.jsx
    │   └── Product
    │       └── Product.jsx
    ├── app.hook => hook으로 쓸 함수
    │   └── useIntersectionObserver.jsx
    ├── index.css
    ├── index.js
    └── reportWebVitals.js
```
