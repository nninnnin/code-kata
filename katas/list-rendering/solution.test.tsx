import { describe, it, expect } from 'vitest'

describe('list-rendering', () => {
  describe('초기 렌더링', () => {
    it('SSR로 렌더링되어 로딩 화면 없이 리스트가 표시된다')
  })

  describe('필터링', () => {
    it('카테고리 필터 적용 시 해당 카테고리 아이템만 표시된다')
    it('필터 적용 즉시 리스트가 방어된다')
    it('새 데이터 렌더링 완료 후 방어가 해제된다')
  })

  describe('정렬', () => {
    it('오름차순 정렬이 동작한다')
    it('내림차순 정렬이 동작한다')
  })

  describe('페이지네이션', () => {
    it('페이지 변경 시 해당 페이지 데이터가 표시된다')
    it('페이지 변경 즉시 리스트가 방어된다')
  })
})
