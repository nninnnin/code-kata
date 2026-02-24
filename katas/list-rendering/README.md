# List Rendering

## 문제 설명

상품 목록을 보여주는 페이지와 상품 상세 페이지를 구현한다.
초기 진입 및 상세 페이지 진입 시 로딩 화면 없이 즉시 콘텐츠가 표시되어야 하며,
필터·정렬·페이지네이션 조작 시 자연스러운 인터랙션 방어 UX를 제공한다.

## 기술 조건

- **Next.js App Router**
- **React**
- **TypeScript**

---

## 시작하기

이 카타는 Next.js 프로젝트(`workspace/`)와 mock API 서버(`server/`)로 구성된다.
**터미널 두 개**를 열고 아래 순서대로 진행한다.

### 1단계: 워크스페이스 세팅 (최초 1회)

```bash
# 프로젝트 루트에서
cp -r templates/kata-nextjs katas/list-rendering/workspace
cd katas/list-rendering/workspace
pnpm install
```

### 2단계: Mock API 서버 실행 (터미널 1)

```bash
# 프로젝트 루트에서
pnpm server:list-rendering
```

서버가 `http://localhost:3001`에서 실행된다.
모든 응답에 **800ms 딜레이**가 있다.
SSR 없이 클라이언트에서만 fetch하면 리스트가 800ms 동안 비어 보인다.

### 3단계: Next.js 개발 서버 실행 (터미널 2)

```bash
cd katas/list-rendering/workspace
pnpm dev
# http://localhost:3000
```

### 4단계: 구현

요구사항을 보고 제한 시간 안에 구현한다.

```
workspace/
  app/
    page.tsx        # 리스트 페이지
    [slug]/
      page.tsx      # 상세 페이지
  lib/
    data.ts         # Item 타입, ListResponse 타입, API_BASE_URL
```

### 5단계: 완료 후 기록

`meta.json`의 `attempts`에 결과를 기록한다.

```json
{
  "attempts": [
    {
      "date": "2024-04-01",
      "completedInTime": true,
      "notes": "useTransition으로 인터랙션 방어 구현. 페이지네이션 URL 동기화에서 시간 소요."
    }
  ]
}
```

---

## 요구사항

### 리스트 페이지 (`/`)

- [ ] 아이템 목록 렌더링
- [ ] 카테고리 필터링 (`electronics` / `books` / `clothing` / `food`)
- [ ] 가격 정렬 (오름차순 / 내림차순)
- [ ] 페이지네이션 (페이지당 5개)
- [ ] **필터·정렬·페이지 상태는 URL 쿼리스트링에 반영** (새로고침해도 상태 유지)
- [ ] **초기 렌더링은 SSR**: 사용자에게 로딩 화면이 노출되어서는 안 됨
- [ ] **인터랙션 방어**: 필터·정렬·페이지 변경이 시작되는 순간 즉시 리스트 클릭 방어
  - 방어 시작: 인터랙션 발생 즉시 (fetch 완료를 기다리지 않음)
  - 방어 해제: 새로운 데이터가 렌더링 완료된 순간
  - 방어 방법: 자유롭게 구현

### 상세 페이지 (`/[slug]`)

- [ ] 리스트 아이템 클릭 시 `/[slug]`로 클라이언트 사이드 라우팅
- [ ] 리스트와 별개의 컴포넌트에서 해당 슬러그의 아이템 상세 정보 표시
- [ ] **상세 페이지 진입 시에도 로딩 화면 없음**

---

## API

Mock 서버가 제공하는 엔드포인트:

```
GET  /api/items?page=1&pageSize=5&category=electronics&sort=price&order=asc
GET  /api/items/:slug
```

**응답 타입** (`lib/data.ts` 참고):

```ts
type ListResponse = {
  items: Item[]
  total: number
  page: number
  pageSize: number
}
```

**정렬 가능한 필드**: `price` | `name` | `createdAt`

---

## 힌트

- **SSR**: `page.tsx`에서 `searchParams`를 받아 서버에서 API 호출
- **상세 페이지 로딩 없음**: `generateStaticParams`로 빌드 타임에 모든 슬러그를 정적 생성
- **인터랙션 방어**: `useTransition`의 `isPending`으로 pending 상태 감지
- **URL 쿼리스트링 동기화**: `useRouter` + `useSearchParams` 또는 `<Link>` 활용

---

## 제한 시간

60분
