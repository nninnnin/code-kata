import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kata Workspace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
