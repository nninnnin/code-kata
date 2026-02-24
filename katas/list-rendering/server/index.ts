import express from 'express'
import items from '../data/items.json' with { type: 'json' }

const app = express()
const PORT = 3001
const DELAY_MS = 800

type SortableField = 'price' | 'name' | 'createdAt'
const SORTABLE_FIELDS: SortableField[] = ['price', 'name', 'createdAt']

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

// 인위적 딜레이 — SSR 없이 클라이언트 fetch하면 빈 리스트가 노출됨
app.use((req, res, next) => {
  setTimeout(next, DELAY_MS)
})

// GET /api/items
app.get('/api/items', (req, res) => {
  const {
    category,
    sort = 'createdAt',
    order = 'asc',
    page = '1',
    pageSize = '5',
  } = req.query as Record<string, string>

  let result = [...items]

  // 필터
  if (category) {
    result = result.filter((item) => item.category === category)
  }

  // 정렬
  const sortField = SORTABLE_FIELDS.includes(sort as SortableField)
    ? (sort as SortableField)
    : 'createdAt'

  result.sort((a, b) => {
    const aVal = a[sortField]
    const bVal = b[sortField]
    const dir = order === 'desc' ? -1 : 1
    if (aVal < bVal) return -dir
    if (aVal > bVal) return dir
    return 0
  })

  // 페이지네이션
  const pageNum = Math.max(1, parseInt(page))
  const pageSizeNum = Math.max(1, parseInt(pageSize))
  const total = result.length
  const paginatedItems = result.slice(
    (pageNum - 1) * pageSizeNum,
    pageNum * pageSizeNum,
  )

  res.json({
    items: paginatedItems,
    total,
    page: pageNum,
    pageSize: pageSizeNum,
  })
})

// GET /api/items/:slug
app.get('/api/items/:slug', (req, res) => {
  const item = items.find((i) => i.slug === req.params.slug)
  if (!item) {
    res.status(404).json({ error: 'Not found' })
    return
  }
  res.json(item)
})

app.listen(PORT, () => {
  console.log(`Mock API  →  http://localhost:${PORT}`)
  console.log(`딜레이    →  ${DELAY_MS}ms (SSR 없으면 빈 리스트 노출됨)`)
})
