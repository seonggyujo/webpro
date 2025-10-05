# 웹사이트 프로젝트

## 프로젝트 개요

React와 Vite를 사용한 단일 페이지 웹사이트입니다. 간단한 구조로 React 학습에 적합합니다.

**Live Demo:** http://158.179.166.133

## 기술 스택

- **React 19.1.1** - UI 라이브러리
- **Vite 6.3.6** - 빌드 도구
- **CSS3** - 반응형 스타일링

## 프로젝트 구조

```
webpro/
├── index.html          # Vite 엔트리 포인트
├── package.json        # 프로젝트 의존성
├── vite.config.js      # Vite 설정 (포트 3000)
└── src/
    ├── main.jsx        # React 앱 시작점
    ├── App.jsx         # 메인 컴포넌트 (Header + Main + Footer)
    ├── App.css         # 컴포넌트 스타일
    └── index.css       # 전역 스타일
```

## 주요 기능

- 단일 컴포넌트 구조 (App.jsx에 모든 섹션 포함)
- 반응형 디자인 (768px 브레이크포인트)
- 섹션별 내용: 홈, 소개, 연락처

## 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```
http://localhost:3000 에서 확인

### 프로덕션 빌드
```bash
npm run build
```
결과물: `dist/` 폴더

### 빌드 미리보기
```bash
npm run preview
```

## 배포

### Oracle Cloud 서버 배포 워크플로우

**1. 로컬 변경사항 푸시**
```bash
git add .
git commit -m "Update description"
git push origin main
```

**2. 서버 업데이트**
```bash
ssh -i ~/Downloads/oracle/ssh-key-2025-10-05.key ubuntu@158.179.166.133
cd /var/www/webpro
git pull origin main
npm run build
```

Nginx가 `dist/` 폴더를 자동으로 서빙합니다.

## 기술 요구사항

- Node.js 20.19+ 또는 22.12+
- npm 9.0+

## 라이선스

이 프로젝트는 학습 목적으로 만들어졌습니다.