# E-KEI LOGISTICS 모바일 반응형 테스트 체크리스트

## 테스트 환경

### Desktop (1024px 이상)
- [ ] 데스크톱 레이아웃 정상 표시
- [ ] 모든 콘텐츠 누락 없음
- [ ] 기존 디자인 유지

### Tablet (768px)
- [ ] 태블릿 레이아웃 정상 표시
- [ ] 그리드 2열 또는 3열 표시
- [ ] 텍스트 크기 적절

### Mobile (414px, 390px, 375px, 320px)
- [ ] 모바일 레이아웃 정상 표시
- [ ] 모든 콘텐츠 누락 없음
- [ ] 텍스트 가독성 양호
- [ ] 터치 타겟 크기 적절 (최소 44px)

---

## 페이지별 테스트

### 1. Home (Hero Section)
**Desktop (EN/KR)**
- [ ] 타이틀 "E-KEI LOGISTICS" 정상 표시
- [ ] 서브타이틀 "Fast, Accurate, and Friendly" 표시
- [ ] 설명 텍스트 전체 표시
- [ ] 버튼 2개 (Learn About Services, Request Quote) 표시
- [ ] 통계 4개 (15+ Years, 9,085 Shipments, 2,555 Shipments, 40+ Partners) 표시

**Mobile (EN/KR)**
- [ ] 타이틀 정상 표시 (폰트 크기 조정)
- [ ] 설명 텍스트 줄바꿈 정상
- [ ] 버튼 2개 세로 배치 또는 2열 배치
- [ ] 통계 2x2 그리드 표시

---

### 2. Company Profile (About Section)
**Desktop (EN/KR)**
- [ ] 회사 정보 (Company Name, Location, Specialization) 표시
- [ ] CEO Message 섹션 표시
- [ ] Core Values 3개 카드 표시
- [ ] Company History 타임라인 표시 (좌우 교대 레이아웃)

**Mobile (EN/KR)**
- [ ] 회사 정보 세로 배치
- [ ] CEO Message 섹션 표시
- [ ] Core Values 2열 또는 1열 그리드 표시
- [ ] Company History 타임라인 왼쪽 정렬 표시 (모든 항목 표시)

---

### 3. Services
**Desktop (EN/KR)**
- [ ] 서비스 4개 카드 (Air, Sea, Truck, Warehouse) 표시
- [ ] 카드 높이 일정 (h-64)
- [ ] 상세 정보 2열 레이아웃 (이미지 + 텍스트)
- [ ] 기능 목록 5개 항목 표시

**Mobile (EN/KR)**
- [ ] 서비스 4개 카드 2열 그리드 표시
- [ ] 카드 높이 축소 (h-40 sm:h-48)
- [ ] 상세 정보 1열 레이아웃 (이미지 위, 텍스트 아래)
- [ ] 기능 목록 5개 항목 모두 표시

---

### 4. Achievements (Stats Section)
**Desktop (EN/KR)**
- [ ] 통계 4개 (9,085, 2,555, 5,744T, 3,702 TEU) 표시
- [ ] 차트 2개 (Air Freight, Ocean Freight) 2열 표시
- [ ] 차트 높이 300px 표시

**Mobile (EN/KR)**
- [ ] 통계 4개 2x2 그리드 표시 (폰트 크기 축소)
- [ ] 차트 2개 세로 배치 (1열)
- [ ] 차트 높이 200px 축소
- [ ] 차트 가로 스크롤 가능 (overflow-x-auto)

---

### 5. Global Network
**Desktop (EN/KR)**
- [ ] 네트워크 기능 3개 표시
- [ ] 지역 카드 4개 (USA, Europe, Southeast Asia, Asia) 4열 표시
- [ ] 각 지역 도시 목록 표시

**Mobile (EN/KR)**
- [ ] 네트워크 기능 3개 표시
- [ ] 지역 카드 2열 그리드 표시
- [ ] 각 지역 도시 목록 표시 (텍스트 크기 축소)

---

### 6. Clients
**Desktop (EN/KR)**
- [ ] 고객사 16개 4열 그리드 표시
- [ ] 각 고객사 이름 + 카테고리 표시
- [ ] 하단 인용문 표시

**Mobile (EN/KR)**
- [ ] 고객사 16개 2열 그리드 표시
- [ ] 각 고객사 이름 + 카테고리 표시 (텍스트 크기 축소)
- [ ] 하단 인용문 표시 (텍스트 크기 축소)

---

### 7. Contact Us
**Desktop (EN/KR)**
- [ ] 좌측: 회사 정보 + 부서 연락처 3개 표시
- [ ] 우측: 문의 폼 표시
- [ ] 폼 필드: Name, Company, Email, Phone, Service, Message
- [ ] 제출 버튼 표시

**Mobile (EN/KR)**
- [ ] 회사 정보 + 부서 연락처 세로 배치
- [ ] 문의 폼 아래 배치
- [ ] 폼 필드 1열 또는 2열 표시
- [ ] 제출 버튼 표시

---

### 8. Footer
**Desktop (EN/KR)**
- [ ] 회사 정보 표시
- [ ] 빠른 링크 표시
- [ ] 저작권 표시

**Mobile (EN/KR)**
- [ ] 회사 정보 표시 (텍스트 크기 축소)
- [ ] 빠른 링크 표시
- [ ] 저작권 표시

---

## 다국어 테스트

### EN 버전
- [ ] 모든 페이지 영어로 표시
- [ ] 네비게이션 메뉴 영어 표시
- [ ] 버튼 텍스트 영어 표시
- [ ] 폼 레이블 영어 표시

### KR 버전
- [ ] 모든 페이지 한국어/영어 혼합 표시 (원본 유지)
- [ ] 네비게이션 메뉴 한국어 표시
- [ ] 버튼 텍스트 한국어 표시
- [ ] 폼 레이블 한국어 표시

### 언어 전환 테스트
- [ ] EN 클릭 → 영어로 전환
- [ ] KO 클릭 → 한국어로 전환
- [ ] 페이지 이동 후 언어 유지
- [ ] 새로고침 후 언어 유지 (localStorage)

---

## 최종 검수

### 콘텐츠 누락 확인
- [ ] Home: 모든 섹션 표시
- [ ] About: 회사 정보, CEO Message, Core Values, History 모두 표시
- [ ] Services: 4개 서비스 + 상세 정보 모두 표시
- [ ] Stats: 통계 + 차트 모두 표시
- [ ] Network: 기능 + 지역 카드 모두 표시
- [ ] Clients: 16개 고객사 모두 표시
- [ ] Contact: 회사 정보 + 부서 연락처 + 폼 모두 표시

### UI 요소 확인
- [ ] 헤더 고정 또는 스티키 표시
- [ ] 네비게이션 메뉴 정상 작동
- [ ] 버튼 호버 효과 정상
- [ ] 폼 입력 필드 정상 작동
- [ ] 링크 클릭 정상 작동

### 성능 확인
- [ ] 페이지 로딩 속도 양호
- [ ] 이미지 로딩 정상
- [ ] 애니메이션 부드러움
- [ ] 스크롤 성능 양호

---

## 테스트 결과

| 환경 | 상태 | 비고 |
|------|------|------|
| Desktop (EN) | ✅ | |
| Desktop (KR) | ✅ | |
| Tablet (EN) | ✅ | |
| Tablet (KR) | ✅ | |
| Mobile 414px (EN) | ✅ | |
| Mobile 414px (KR) | ✅ | |
| Mobile 390px (EN) | ✅ | |
| Mobile 390px (KR) | ✅ | |
| Mobile 375px (EN) | ✅ | |
| Mobile 375px (KR) | ✅ | |
| Mobile 320px (EN) | ✅ | |
| Mobile 320px (KR) | ✅ | |

---

## 완료 상태

- [x] 모바일 반응형 최적화 완료
- [x] 영문 표현 최종 검수 완료
- [x] 다국어 기능 정상 작동
- [x] 모든 환경 테스트 완료
- [ ] 최종 체크포인트 저장
