# 프로젝트 개요

코드카타(Code Kata): 과제 전형에 대한 자신감을 키우기 위한 아카이브 겸 프레임워크.

- **목표**: 특정 기능을 시간 내에 구현하는 연습을 반복해 머슬 메모리 형성
- **방식**: 자주 등장하는 구현 패턴을 카타 단위로 정리

# 기술 스택

- **언어**: TypeScript
- **런타임**: Node.js
- **TS 실행**: tsx
- **테스트**: vitest
- **패키지 매니저**: pnpm

# 자주 쓰는 명령어

```bash
pnpm test        # vitest watch 모드 (개발 중)
pnpm test:run    # 전체 테스트 1회 실행
pnpm kata        # kata CLI 실행
```

# 코딩 컨벤션

- **파일/폴더명**: kebab-case
- **함수/변수**: camelCase
- **타입/인터페이스**: PascalCase
- TypeScript strict 모드 유지
- 카타 하나 = 폴더 하나 (`katas/[kata-name]/`)
- 각 카타 폴더는 반드시 `README.md`, `solution.ts`, `solution.test.ts`, `meta.json` 포함

# 로드맵

[ROADMAP.md](./ROADMAP.md) 참고

# 중요한 결정 사항 (ADR)

- **Node.js**: 실제 과제 전형 환경과 일치시키기 위해 선택
- **tsx**: 빌드 없이 TypeScript 직접 실행, ts-node보다 가벼움
- **vitest**: TypeScript 친화적이고 빠름
- **pnpm**: 빠른 설치, 효율적인 디스크 사용
- **태그 기반 분류**: 하나의 카타가 여러 카테고리에 걸칠 수 있어 폴더 분류보다 유연함

피해야 할 패턴:
- 불필요한 의존성 추가
- 과도한 추상화 (카타는 독립적이고 단순해야 함)

# Claude에게 지시사항

- 커밋은 반드시 확인을 받은 후에만 실행
- 새 카타 추가 시 `templates/kata/` 구조를 그대로 복사
- 카타 구현 파일에 과도한 주석 추가 금지 (코드 자체가 명확해야 함)
- CLI 기능 추가 시 ROADMAP.md 체크박스 업데이트
