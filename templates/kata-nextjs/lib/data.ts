// 카타 데이터 로더
// data/items.json을 읽어 반환합니다
// tsconfig의 @data/* 경로 alias로 ../data/ 를 참조합니다
import rawItems from '@data/items.json'

export type Item = {
  id: number
  slug: string
  name: string
  category: 'electronics' | 'books' | 'clothing' | 'food'
  price: number
  createdAt: string
  description: string
}

export const items: Item[] = rawItems as Item[]
