# List Rendering

## 문제 설명

상품 목록을 보여주는 페이지와 상품 상세 페이지를 구현한다.
초기 진입 및 상세 페이지 진입 시 로딩 화면 없이 즉시 콘텐츠가 표시되어야 하며,
필터·정렬·페이지네이션 조작 시 자연스러운 인터랙션 방어 UX를 제공한다.

## 기술 조건

- **Next.js App Router**
- **React**
- **TypeScript**

## 요구사항

### 리스트 페이지

- [ ] 아이템 목록 렌더링
- [ ] 카테고리 필터링
- [ ] 가격 정렬 (오름차순 / 내림차순)
- [ ] 페이지네이션 (페이지당 5개)
- [ ] **초기 렌더링은 SSR**: 사용자에게 로딩 화면이 노출되어서는 안 됨
- [ ] **인터랙션 방어**: 필터·정렬·페이지 변경이 시작되는 순간 즉시 리스트 클릭 방어
  - 방어 시작: 인터랙션 발생 즉시 (fetch 완료를 기다리지 않음)
  - 방어 해제: 새로운 데이터가 렌더링 완료된 순간
  - 방어 방법: 자유롭게 구현

### 상세 페이지

- [ ] 리스트 아이템 클릭 시 `/[slug]`로 클라이언트 사이드 라우팅
- [ ] 리스트와 별개의 컴포넌트에서 해당 슬러그의 아이템 상세 정보 표시
- [ ] **상세 페이지 진입 시에도 로딩 화면 없음**

## 데이터

`data/items.json` 파일을 사용한다. (20개 아이템)

```ts
type Item = {
  id: number
  slug: string
  name: string
  category: string  // "electronics" | "books" | "clothing" | "food"
  price: number
  createdAt: string
  description: string
}
```

## 힌트

- 리스트: `page.tsx`에서 `searchParams`로 SSR 데이터 패치
- 상세: `generateStaticParams`로 빌드 타임에 모든 슬러그 정적 생성 → 즉시 로딩
- 인터랙션 방어: `useTransition`의 `isPending` 활용 고려
- URL 상태 동기화: 필터/정렬/페이지를 쿼리스트링으로 관리하면 새로고침에도 상태 유지

## 제한 시간

60분
