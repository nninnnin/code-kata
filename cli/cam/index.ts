import { spawn } from 'child_process'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlPath = join(__dirname, 'cam.html')

spawn('open', [htmlPath], { detached: true, stdio: 'ignore' }).unref()

console.log('웹캠 뷰어를 열었습니다. 브라우저에서 카메라 권한을 허용해주세요.')
