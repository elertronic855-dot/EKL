# 환경 변수 설정 가이드

## 📝 환경 변수 목록

프로젝트를 실행하기 위해 다음 환경 변수들을 설정해야 합니다.

### 기본 환경 변수

| 변수명 | 설명 | 예시 | 필수 |
|--------|------|------|------|
| `NODE_ENV` | 실행 환경 (development/production) | `production` | ✅ |
| `VITE_API_URL` | API 서버 주소 | `https://api.example.com` | ❌ |
| `VITE_ANALYTICS_ID` | 분석 도구 ID (Google Analytics 등) | `G-XXXXXXXXXX` | ❌ |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps API 키 | `AIzaSy...` | ❌ |

### Manus 내장 환경 변수 (자동 주입)

다음 변수들은 Manus 플랫폼에서 자동으로 주입됩니다:

- `BUILT_IN_FORGE_API_KEY`: Manus Forge API 키
- `BUILT_IN_FORGE_API_URL`: Manus Forge API 주소
- `JWT_SECRET`: JWT 토큰 시크릿
- `OAUTH_SERVER_URL`: OAuth 서버 주소
- `OWNER_NAME`: 프로젝트 소유자 이름
- `OWNER_OPEN_ID`: 프로젝트 소유자 ID
- `VITE_ANALYTICS_ENDPOINT`: 분석 엔드포인트
- `VITE_ANALYTICS_WEBSITE_ID`: 분석 웹사이트 ID
- `VITE_APP_ID`: 앱 ID
- `VITE_APP_LOGO`: 앱 로고 URL
- `VITE_APP_TITLE`: 앱 제목
- `VITE_FRONTEND_FORGE_API_KEY`: 프론트엔드 Forge API 키
- `VITE_FRONTEND_FORGE_API_URL`: 프론트엔드 Forge API 주소
- `VITE_OAUTH_PORTAL_URL`: OAuth 포탈 URL

---

## 🔧 로컬 개발 환경 설정

### 1. .env 파일 생성

프로젝트 루트 디렉토리에 `.env` 파일을 생성합니다:

```bash
touch .env
```

### 2. 환경 변수 입력

`.env` 파일에 다음 내용을 추가합니다:

```env
# 개발 환경 설정
NODE_ENV=development

# API 설정 (선택사항)
VITE_API_URL=http://localhost:3001

# 분석 도구 (선택사항)
VITE_ANALYTICS_ID=

# Google Maps API (선택사항)
VITE_GOOGLE_MAPS_API_KEY=
```

### 3. 개발 서버 실행

```bash
pnpm run dev
```

---

## 🚀 프로덕션 환경 설정

### Vercel 배포

1. Vercel 대시보드에서 프로젝트 선택
2. **Settings** → **Environment Variables**
3. 다음 변수들을 추가:

```
NODE_ENV=production
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Netlify 배포

1. Netlify 대시보드에서 프로젝트 선택
2. **Site settings** → **Build & deploy** → **Environment**
3. **Edit variables** 클릭하여 환경 변수 추가

### Docker 배포

`Dockerfile`에서 환경 변수 설정:

```dockerfile
FROM node:20-alpine
WORKDIR /app

# 환경 변수 설정
ENV NODE_ENV=production
ENV VITE_API_URL=https://api.example.com

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build

EXPOSE 3000
CMD ["pnpm", "run", "preview"]
```

---

## 🔐 보안 주의사항

### ⚠️ 주의

- **민감한 정보 보호**: API 키, 토큰 등 민감한 정보는 `.env` 파일에만 저장
- **Git에 커밋하지 말 것**: `.gitignore`에 `.env` 파일이 포함되어 있는지 확인
- **프로덕션 키 분리**: 개발용과 프로덕션용 API 키를 분리하여 사용
- **정기적인 키 로테이션**: 주기적으로 API 키를 변경

### .gitignore 확인

```
# .gitignore
.env
.env.local
.env.*.local
```

---

## 🧪 환경 변수 테스트

환경 변수가 제대로 로드되는지 확인:

```bash
# 개발 서버 실행 후 브라우저 콘솔에서 확인
console.log(import.meta.env.VITE_API_URL)
```

---

## 📚 참고 자료

- [Vite 환경 변수 문서](https://vitejs.dev/guide/env-and-mode.html)
- [Node.js 환경 변수](https://nodejs.org/en/learn/how-to-work-with-environment-variables-in-nodejs)

---

**마지막 업데이트**: 2026년 5월 30일
