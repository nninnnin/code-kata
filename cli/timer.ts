const args = process.argv.slice(2)
const totalMinutes = parseInt(args[0] ?? '30')

if (isNaN(totalMinutes) || totalMinutes <= 0) {
  console.error('사용법: pnpm timer [분]')
  console.error('예시:   pnpm timer 60')
  process.exit(1)
}

const totalSeconds = totalMinutes * 60
let elapsed = 0

const fmt = (s: number) => {
  const m = Math.floor(s / 60).toString().padStart(2, '0')
  const sec = (s % 60).toString().padStart(2, '0')
  return `${m}:${sec}`
}

const R  = '\x1b[0m'
const B  = '\x1b[1m'
const Y  = '\x1b[33m'
const RE = '\x1b[31m'
const C  = '\x1b[36m'
const G  = '\x1b[32m'

const ALERTS: Record<number, string> = {
  600: `\n${Y}${B}⚠  10분 남았습니다${R}\n`,
  300: `\n${RE}${B}⚠  5분 남았습니다${R}\n`,
  60:  `\n${RE}${B}⚠  1분 남았습니다${R}\n`,
}

console.log(`\n${B}Kata Timer${R}  ${C}${totalMinutes}분${R}\n`)

const render = () => {
  const remaining = totalSeconds - elapsed

  if (remaining <= 0) {
    process.stdout.write(`\r\x1b[K\n${RE}${B}⏰ 시간 종료!${R}  ${fmt(elapsed)} 경과\n\n`)
    process.exit(0)
  }

  const color = remaining <= 300 ? RE : remaining <= 600 ? Y : G

  if (ALERTS[remaining]) {
    process.stdout.write(ALERTS[remaining])
  }

  process.stdout.write(
    `\r\x1b[K  ${C}⏱${R}  경과 ${B}${fmt(elapsed)}${R}  │  남은 시간 ${color}${B}${fmt(remaining)}${R}`
  )
}

render()

const interval = setInterval(() => {
  elapsed++
  render()
}, 1000)

process.on('SIGINT', () => {
  process.stdout.write(`\n\n${B}타이머 종료${R}  —  ${fmt(elapsed)} 경과\n`)
  clearInterval(interval)
  process.exit(0)
})
