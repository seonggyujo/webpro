# 웹사이트 프로젝트 완벽 가이드

## 프로젝트 개요

이 프로젝트는 **React**와 **Vite**를 사용해서 만든 한국어 웹사이트입니다. 초보자도 쉽게 이해할 수 있도록 최대한 간단하게 구성되어 있습니다.

## 사용 기술 스택

### 주요 기술
- **React 19.1.1** - 사용자 인터페이스를 만드는 JavaScript 라이브러리
- **Vite 6.3.6** - 매우 빠른 빌드 도구 (웹팩보다 훨씬 빠름)
- **CSS3** - 스타일링 (디자인)
- **HTML5** - 기본 구조

### 왜 이 기술들을 선택했나요?
- **React**: 컴포넌트 기반으로 재사용 가능한 코드 작성 가능
- **Vite**: 개발 서버가 빠르게 시작되고, 파일 변경 시 즉시 반영
- **CSS**: 반응형 디자인으로 모바일에서도 잘 보임

## 프로젝트 구조 상세 설명

```
webpro/                          ← 프로젝트 최상위 폴더
├── index.html                   ← 브라우저가 가장 먼저 읽는 파일
├── package.json                 ← 프로젝트 정보와 의존성 관리
├── package-lock.json            ← 정확한 버전 고정 (건드리지 말 것)
├── vite.config.js               ← Vite 설정 파일
├── .gitignore                   ← Git에서 제외할 파일들
├── CLAUDE.md                    ← Claude AI를 위한 가이드
├── README.md                    ← 이 파일!
├── node_modules/                ← 설치된 라이브러리들 (건드리지 말 것)
├── public/                      ← 정적 파일들 (이미지 등)
└── src/                         ← 실제 코드가 들어있는 폴더
    ├── main.jsx                 ← React 앱의 시작점
    ├── App.jsx                  ← 메인 컴포넌트
    ├── App.css                  ← App 컴포넌트 스타일
    └── index.css                ← 전역 스타일
```

## 각 파일의 역할 자세히 알아보기

### 1. `index.html` (웹페이지의 뼈대)
```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>웹사이트 프로젝트</title>
  </head>
  <body>
    <div id="root"></div>                    ← React가 여기에 내용을 넣음
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 2. `src/main.jsx` (React 앱의 시작점)
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
- **ReactDOM.createRoot()**: React 18+에서 도입된 새로운 렌더링 방식 (동시성 기능 지원)
- **StrictMode**: 개발 환경에서 잠재적 문제를 미리 감지 (프로덕션에는 영향 없음)
- `index.html`의 `<div id="root">`에 App 컴포넌트를 렌더링

### 3. `src/App.jsx` (메인 컴포넌트)
- 웹사이트의 모든 내용이 들어있는 주요 컴포넌트
- Header, Main, Footer로 구성
- 현재는 하나의 파일에 모든 내용이 들어있음 (단순한 구조)

### 4. CSS 파일들

#### `index.css` (전역 스타일)
```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...
  -webkit-font-smoothing: antialiased;  /* Mac에서 폰트를 부드럽게 */
  -moz-osx-font-smoothing: grayscale;   /* Firefox에서 폰트를 부드럽게 */
}
```
- **전역 설정**: 모든 페이지에 적용되는 기본 스타일
- **시스템 폰트 스택**: 운영체제에 맞는 최적의 폰트 자동 선택

#### `App.css` (컴포넌트 스타일)
```css
* { box-sizing: border-box; }  /* 패딩과 테두리를 width에 포함 */
```
- **Flexbox 레이아웃**: `.App`에서 `display: flex`로 Header, Main, Footer 배치
- **반응형 디자인**: `@media (max-width: 768px)`로 모바일 대응
- **호버 효과**: `.section:hover`에서 `translateY(-2px)` - 마우스 올리면 살짝 위로

## 개발 명령어

### 개발 서버 시작
```bash
npm run dev
```
- 개발용 서버를 시작합니다
- http://localhost:3000에서 확인 가능
- 파일을 수정하면 자동으로 브라우저가 새로고침됩니다

### 프로덕션 빌드
```bash
npm run build
```
- 실제 서비스용으로 최적화된 파일들을 생성
- `dist/` 폴더에 결과물이 생성됩니다

### 빌드 결과 미리보기
```bash
npm run preview
```
- 빌드된 결과물을 로컬에서 미리 볼 수 있습니다

## 현재 웹사이트 구성

### 레이아웃
1. **Header (헤더)**
   - 웹사이트 제목
   - 네비게이션 메뉴 (홈, 소개, 연락처)

2. **Main (메인 콘텐츠)**
   - 홈 섹션: 환영 메시지
   - 소개 섹션: 프로젝트 정보
   - 연락처 섹션: 연락처 정보

3. **Footer (푸터)**
   - 저작권 정보

### 스타일 특징
- **반응형 디자인**: 모바일과 데스크톱에서 모두 잘 보임
- **호버 효과**: 마우스를 올리면 요소가 살짝 위로 올라감
- **색상 테마**:
  - 헤더: 진한 파란색 (#2c3e50)
  - 푸터: 회색 (#34495e)
  - 링크 호버: 밝은 파란색 (#3498db)

## 반응형 디자인

### 데스크톱 (768px 이상)
```css
.nav {
  flex-direction: row;          /* 가로 배치 */
  justify-content: space-between;
}
.nav ul li { margin-left: 2rem; }  /* 메뉴 간격 넓게 */
```

### 모바일 (768px 이하)
```css
@media (max-width: 768px) {
  .nav {
    flex-direction: column;     /* 세로 배치 */
    gap: 1rem;
  }
  .nav ul li { margin-left: 1rem; }  /* 간격 좁게 */
  .section h2 { font-size: 1.5rem; }  /* 제목 크기 축소 */
}
```

**핵심 개념:**
- **미디어 쿼리**: 화면 크기에 따라 다른 CSS 적용
- **Flexbox**: 유연한 레이아웃으로 반응형 구현
- **모바일 퍼스트 vs 데스크톱 퍼스트**: 이 프로젝트는 데스크톱 우선 방식

## 개발할 때 알아두면 좋은 것들

### Hot Module Replacement (HMR)
- 개발 서버 실행 중에 파일을 수정하면 자동으로 브라우저에 반영
- 페이지 새로고침 없이 변경사항 확인 가능
- Vite가 제공하는 초고속 HMR (웹팩보다 훨씬 빠름)

### React StrictMode가 하는 일
1. **더블 렌더링**: 컴포넌트를 두 번 렌더링해서 부작용 감지
2. **경고 메시지**: 사용하지 말아야 할 레거시 API 사용 시 경고
3. **예상치 못한 부작용 감지**: useEffect 등의 클린업 함수 검증
4. **프로덕션에서는 자동으로 비활성화**됨

### Vite 개발 서버의 특징
- **ESM 기반**: 번들링 없이 네이티브 ES 모듈 사용
- **즉시 시작**: 프로젝트 크기와 관계없이 빠른 서버 시작
- **빠른 HMR**: 파일 변경 시 밀리초 단위로 업데이트

## 앞으로 추가할 수 있는 기능들

### 쉬운 난이도
- 더 많은 섹션 추가
- 이미지 추가
- 색상 테마 변경

### 중간 난이도
- React Router로 여러 페이지 만들기
- 컴포넌트 분리 (Header, Footer 등을 별도 파일로)
- 애니메이션 효과 추가

### 어려운 난이도
- 백엔드 API 연동
- 데이터베이스 연결
- 사용자 인증 시스템

## 문제 해결

### 개발 서버가 안 켜질 때
1. Node.js 버전 확인 (20.19+ 또는 22.12+ 필요)
2. `npm install` 다시 실행
3. `node_modules` 폴더 삭제 후 `npm install`

### 포트 3000이 이미 사용중일 때
- 다른 프로그램이 3000 포트를 사용하고 있음
- 터미널에서 다른 포트 제안을 받아들이거나
- `vite.config.js`에서 포트 번호 변경

## 핵심 개념 이해하기

### 1. Virtual DOM이란?
- React가 실제 DOM을 직접 조작하지 않고 가상의 DOM을 먼저 만듦
- 변경사항을 비교(diffing)해서 최소한의 업데이트만 수행
- 결과: 훨씬 빠른 렌더링 성능

### 2. JSX (JavaScript XML)
```jsx
const element = <h1>안녕하세요</h1>  // HTML처럼 보이지만 JavaScript
```
- JavaScript 안에 HTML을 작성하는 문법
- Babel이 일반 JavaScript로 변환해줌
- `className` 사용 (class는 JavaScript 예약어)

### 3. 컴포넌트란?
```jsx
function App() {        // 이것이 하나의 컴포넌트
  return <div>...</div>
}
```
- 재사용 가능한 UI 조각
- 함수형 컴포넌트 (최신 방식) vs 클래스형 컴포넌트 (레거시)
- Props로 데이터를 전달받고, State로 내부 상태 관리

### 4. Flexbox 레이아웃 이해
```css
.App {
  display: flex;
  flex-direction: column;  /* 세로로 쌓기 */
  min-height: 100vh;       /* 최소 높이를 화면 전체로 */
}
.main { flex: 1; }         /* 남은 공간 모두 차지 */
```
- **flex: 1**: 가능한 모든 공간을 차지 (Footer를 맨 아래로 밀어냄)
- **justify-content**: 주축 정렬 (가로 방향)
- **align-items**: 교차축 정렬 (세로 방향)

## 추가 학습 자료

### 공식 문서
- [React 공식 문서](https://react.dev/) - 한글 번역 있음
- [Vite 공식 문서](https://vite.dev/)
- [MDN Web Docs](https://developer.mozilla.org/ko/) - HTML/CSS/JavaScript 레퍼런스

### 추천 학습 순서
1. **HTML/CSS 기초** - 구조와 스타일의 기본
2. **JavaScript ES6+ 문법** - 화살표 함수, 구조분해, import/export
3. **React 기초 개념** - 컴포넌트, JSX, Props
4. **React Hooks** - useState, useEffect 등
5. **상태 관리** - Context API, Redux, Zustand 등

## 팁

### 코드 수정할 때
1. 작은 변경부터 시작하세요
2. 한 번에 하나씩 수정하세요
3. 자주 저장하고 브라우저에서 확인하세요
4. Git으로 변경사항을 자주 커밋하세요

### 디버깅할 때
1. **브라우저 개발자 도구 (F12) 활용**
   - Elements 탭: HTML 구조와 CSS 확인
   - Console 탭: 에러 메시지와 로그 확인
   - Network 탭: 네트워크 요청 확인
   - React DevTools 확장 프로그램 설치 추천

2. **콘솔 창에서 에러 메시지 확인**
   - 빨간색 에러: 반드시 고쳐야 함
   - 노란색 경고: 권장사항 (무시해도 작동은 함)

3. **터미널에서 에러 로그 확인**
   - 빌드 에러는 터미널에 표시됨
   - 런타임 에러는 브라우저 콘솔에 표시됨

### 자주 하는 실수
1. **`className` vs `class`**: JSX에서는 반드시 `className` 사용
2. **닫는 태그 필수**: `<img>` → `<img />`, `<br>` → `<br />`
3. **중괄호 사용**: JavaScript 변수는 `{변수명}` 형태로 사용
4. **import 경로**: `./App.jsx`처럼 상대 경로 정확히 작성

## 이 프로젝트로 배울 수 있는 것

### 초급 (현재 프로젝트 수준)
- React 기본 구조 이해
- JSX 문법
- 컴포넌트 만들기
- CSS로 스타일링
- 반응형 웹 디자인
- Vite 빌드 도구 사용

### 다음 단계로 확장하기
1. **State 추가하기**
```jsx
const [count, setCount] = useState(0)  // 클릭 카운터 만들기
```

2. **여러 컴포넌트로 분리하기**
```
src/
├── components/
│   ├── Header.jsx    // 헤더 분리
│   ├── Footer.jsx    // 푸터 분리
│   └── Section.jsx   // 섹션 분리
└── App.jsx           // 메인 조합
```

3. **React Router 추가하기**
```bash
npm install react-router-dom
```
- 여러 페이지로 확장 (/, /about, /contact)

4. **API 데이터 가져오기**
```jsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => setData(data))
}, [])
```