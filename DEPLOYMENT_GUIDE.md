# E-KEI LOGISTICS - 배포 가이드

## 📋 프로젝트 개요

**프로젝트명**: E-KEI LOGISTICS (국제 물류 포워딩 웹사이트)
**프레임워크**: React 19 + Vite + Tailwind CSS 4
**언어**: TypeScript
**다국어 지원**: 한국어(KO), 영어(EN), 중국어(ZH)

---

## 🛠️ 기술 스택

| 항목 | 버전 | 설명 |
|------|------|------|
| **Node.js** | 18.x 이상 | JavaScript 런타임 |
| **pnpm** | 10.4.1+ | 패키지 매니저 (npm 대신 권장) |
| **React** | 19.2.1 | UI 라이브러리 |
| **Vite** | 7.1.7 | 빌드 도구 및 개발 서버 |
| **TypeScript** | 5.6.3 | 타입 안정성 |
| **Tailwind CSS** | 4.1.14 | 유틸리티 CSS 프레임워크 |
| **i18next** | 26.3.0 | 다국어 지원 |
| **Framer Motion** | 12.23.22 | 애니메이션 라이브러리 |
| **shadcn/ui** | 최신 | UI 컴포넌트 라이브러리 |

---

## 📦 프로젝트 구조

```
ekl-logistics/
├── client/                    # 프론트엔드 소스코드
│   ├── public/               # 정적 파일 (favicon, robots.txt 등)
│   ├── src/
│   │   ├── components/       # React 컴포넌트
│   │   │   ├── sections/     # 페이지 섹션 컴포넌트
│   │   │   └── ui/           # shadcn/ui 컴포넌트
│   │   ├── pages/            # 페이지 컴포넌트
│   │   ├── i18n/             # 다국어 설정 및 번역 파일
│   │   │   └── locales/      # en.json, ko.json, zh.json
│   │   ├── contexts/         # React Context (언어, 테마)
│   │   ├── hooks/            # 커스텀 React Hooks
│   │   ├── lib/              # 유틸리티 함수
│   │   ├── index.css         # 전역 스타일 및 Tailwind 설정
│   │   ├── App.tsx           # 메인 App 컴포넌트
│   │   └── main.tsx          # React 진입점
│   └── index.html            # HTML 템플릿
├── server/                    # 백엔드 (정적 배포 시 미사용)
├── shared/                    # 공유 타입 정의
├── package.json              # 프로젝트 의존성
├── vite.config.ts            # Vite 설정
├── tsconfig.json             # TypeScript 설정
├── tailwind.config.ts        # Tailwind CSS 설정
└── README.md                 # 프로젝트 문서
```

---

## 🚀 설치 및 실행

### 1. 사전 요구사항

- **Node.js**: 18.x 이상 (권장: 20.x LTS)
- **pnpm**: 10.4.1 이상

Node.js 설치 확인:
```bash
node --version  # v18.0.0 이상
npm install -g pnpm  # pnpm 설치
pnpm --version  # 10.4.1 이상
```

### 2. 프로젝트 설치

```bash
# 프로젝트 디렉토리로 이동
cd ekl-logistics

# 의존성 설치
pnpm install
```

### 3. 개발 서버 실행

```bash
# 개발 모드 실행 (핫 리로드 활성화)
pnpm run dev

# 브라우저에서 접속
# http://localhost:5173
```

### 4. 프로덕션 빌드

```bash
# 최적화된 빌드 생성
pnpm run build

# 빌드 결과물 확인
# dist/ 폴더에 생성됨
```

### 5. 프로덕션 미리보기

```bash
# 빌드된 파일을 로컬에서 미리보기
pnpm run preview
```

---

## 📝 주요 명령어

| 명령어 | 설명 |
|--------|------|
| `pnpm run dev` | 개발 서버 시작 (핫 리로드) |
| `pnpm run build` | 프로덕션 빌드 생성 |
| `pnpm run preview` | 빌드된 파일 로컬 미리보기 |
| `pnpm run check` | TypeScript 타입 검사 |
| `pnpm run format` | Prettier로 코드 포맷팅 |

---

## 🌍 다국어 설정

### 지원 언어

- **한국어 (ko)**: `client/src/i18n/locales/ko.json`
- **영어 (en)**: `client/src/i18n/locales/en.json`
- **중국어 (zh)**: `client/src/i18n/locales/zh.json`

### 번역 파일 구조

```json
{
  "nav": {
    "home": "홈",
    "about": "회사소개",
    "services": "서비스"
  },
  "about": {
    "companyName": "E-KEI LOGISTICS CO., LTD",
    "ceoQuote": "..."
  }
}
```

### 언어 변경 방법

사용자는 상단 네비게이션의 언어 선택 버튼으로 언어를 변경할 수 있습니다.

---

## 🔐 환경 변수

### .env.example

```env
# API 설정 (필요시)
VITE_API_URL=https://api.example.com

# 분석 도구 (선택사항)
VITE_ANALYTICS_ID=your-analytics-id

# Google Maps API (선택사항)
VITE_GOOGLE_MAPS_API_KEY=your-api-key
```

### 환경 변수 설정

1. 프로젝트 루트에 `.env` 파일 생성
2. `.env.example` 내용을 복사하여 실제 값 입력
3. `pnpm run dev` 또는 `pnpm run build` 실행

---

## 📱 반응형 디자인

프로젝트는 **모바일 우선(Mobile-first)** 설계로 구현되었습니다.

### 지원 화면 크기

- **모바일**: 320px ~ 768px
- **태블릿**: 768px ~ 1024px
- **데스크톱**: 1024px 이상

### Tailwind 반응형 클래스 사용

```tsx
// 예시
<div className="text-sm md:text-base lg:text-lg">
  반응형 텍스트 크기
</div>
```

---

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: `#00B4D8` (Cyan)
- **Background**: `#0A1428` (Dark Navy)
- **Text**: `#FFFFFF` (White)
- **Accent**: `#FFD60A` (Amber)

### 폰트

- **Display**: Noto Sans KR (한글), Inter (영문)
- **Body**: Noto Sans KR (한글), Inter (영문)

### 테마

- **기본 테마**: Dark Mode
- **테마 전환**: `ThemeContext`를 통해 관리

---

## 🚢 배포 방법

### 1. Vercel 배포 (권장)

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel
```

### 2. Netlify 배포

```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 배포
netlify deploy --prod --dir=dist
```

### 3. Docker 배포

```dockerfile
# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build
EXPOSE 5173
CMD ["pnpm", "run", "preview"]
```

### 4. 일반 웹 호스팅

1. `pnpm run build` 실행
2. `dist/` 폴더의 모든 파일을 웹 서버에 업로드
3. 웹 서버 설정에서 SPA 라우팅 활성화 (모든 요청을 index.html로 리다이렉트)

#### Nginx 설정 예시

```nginx
server {
    listen 80;
    server_name example.com;
    
    root /var/www/ekl-logistics/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Apache 설정 예시

`.htaccess` 파일을 `dist/` 폴더에 생성:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 📊 빌드 최적화

### 번들 크기 분석

```bash
# 번들 크기 분석 (선택사항)
pnpm run build -- --analyze
```

### 성능 최적화

- **코드 스플리팅**: Vite가 자동으로 처리
- **이미지 최적화**: WebP 형식 사용 권장
- **캐싱**: 프로덕션 빌드 시 해시 기반 파일명 사용

---

## 🔍 문제 해결

### 1. 포트 충돌

```bash
# 다른 포트에서 개발 서버 실행
pnpm run dev -- --port 3000
```

### 2. 캐시 문제

```bash
# node_modules 및 캐시 삭제
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### 3. 빌드 실패

```bash
# TypeScript 타입 검사
pnpm run check

# 코드 포맷팅
pnpm run format
```

---

## 📞 연락처 정보

- **회사명**: E-KEI LOGISTICS CO., LTD
- **주소**: Rm405,406 Hongqiao Crystal Business Bld., No2 Lane, 280 Hongjing Rd., Shanghai, China
- **전화**: +86-21-3468-9339
- **이메일**: eklsha@eklchina.com

---

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

---

## 🔄 업데이트 및 유지보수

### 의존성 업데이트

```bash
# 최신 버전 확인
pnpm outdated

# 의존성 업데이트
pnpm update
```

### 보안 취약점 검사

```bash
# 보안 취약점 확인
pnpm audit

# 자동 수정
pnpm audit --fix
```

---

## 📚 추가 리소스

- [React 공식 문서](https://react.dev)
- [Vite 공식 문서](https://vitejs.dev)
- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [i18next 공식 문서](https://www.i18next.com)
- [shadcn/ui 공식 문서](https://ui.shadcn.com)

---

**마지막 업데이트**: 2026년 5월 30일
