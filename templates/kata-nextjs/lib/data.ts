export type Item = {
  id: number
  slug: string
  name: string
  category: 'electronics' | 'books' | 'clothing' | 'food'
  price: number
  createdAt: string
  description: string
}

export type ListResponse = {
  items: Item[]
  total: number
  page: number
  pageSize: number
}

export const API_BASE_URL = 'http://localhost:3001'
