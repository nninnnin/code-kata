# Code Kata

과제 전형에 대한 자신감을 키우기 위한 아카이브 겸 프레임워크.

특정 기능을 시간 내에 구현하는 연습을 반복해, 과제 구현과 관련된 실행이 **머슬 메모리**가 될 수 있도록 돕는 카타를 쌓아두는 곳입니다.

## 시작하기

```bash
pnpm install
```

## 명령어

```bash
pnpm test        # 전체 테스트 watch 모드
pnpm test:run    # 전체 테스트 1회 실행
pnpm kata        # kata CLI (개발 중)
```

## 프로젝트 구조

```
code-kata/
  katas/               # 카타 모음
    [kata-name]/
      README.md        # 문제 설명 및 요구사항
      solution.ts      # 구현
      solution.test.ts # 테스트
      meta.json        # 태그, 시간제한, 시도 기록
  cli/                 # kata CLI 소스
  templates/           # 새 카타 스캐폴딩 템플릿
  patterns/            # 자주 쓰는 구현 패턴 모음
```

## 새 카타 추가하기

1. `katas/` 아래 폴더 생성
2. `templates/kata/` 내용을 복사
3. `README.md`에 문제 설명 작성
4. `meta.json`에 태그와 시간제한 설정
5. 구현 후 테스트 통과 확인

## 기술 스택

- **언어**: TypeScript
- **런타임**: Node.js
- **테스트**: vitest
- **패키지 매니저**: pnpm

## 로드맵

[ROADMAP.md](./ROADMAP.md) 참고
