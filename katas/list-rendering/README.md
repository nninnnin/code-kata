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

이 카타는 Next.js 프로젝트에서 구현한다.
`workspace/` 폴더가 실제 구현 공간이다.

### 1단계: 워크스페이스 세팅

```bash
# 프로젝트 루트에서
cp -r templates/kata-nextjs katas/list-rendering/workspace
cd katas/list-rendering/workspace
pnpm install
```

### 2단계: 개발 서버 실행

```bash
pnpm dev
# http://localhost:3000
```

### 3단계: 구현

아래 요구사항을 보고 제한 시간 안에 구현한다.
`data/items.json`이 이미 준비되어 있으니 API나 DB 세팅은 필요 없다.

```
workspace/
  app/
    page.tsx          # 리스트 페이지 (여기서 구현)
    [slug]/
      page.tsx        # 상세 페이지 (여기서 구현)
  data -> ../data     # 심볼릭 링크 or 직접 참조
```

### 4단계: 완료 후 기록

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

## 데이터

`data/items.json`에 20개 아이템이 준비되어 있다. API나 DB 세팅은 필요 없다.

```ts
type Item = {
  id: number
  slug: string
  name: string
  category: 'electronics' | 'books' | 'clothing' | 'food'
  price: number
  createdAt: string
  description: string
}
```

---

## 힌트

- **SSR**: `page.tsx`에서 `searchParams`를 받아 서버에서 데이터 필터링
- **상세 페이지 로딩 없음**: `generateStaticParams`로 빌드 타임에 모든 슬러그를 정적 생성
- **인터랙션 방어**: `useTransition`의 `isPending`으로 pending 상태 감지
- **URL 상태 동기화**: 필터/정렬/페이지를 쿼리스트링으로 관리하면 새로고침에도 상태 유지

---

## 제한 시간

60분
