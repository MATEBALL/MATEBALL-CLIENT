## Storybook 사용 가이드

Storybook은 **컴포넌트를 독립적으로 개발, 문서화, 테스트**할 수 있도록 도와줍니다.
또 **Chromatic**을 통해 PR 생성 시 자동으로 Storybook이 배포되어 리뷰어가 UI를 쉽게 확인할 수 있습니다.

---

### 로컬에서 Storybook 실행하기

```bash
pnpm storybook
```

* 실행 후 브라우저에서 `http://localhost:6006` 자동 오픈됨
* 컴포넌트의 UI 및 상태를 바로 확인할 수 있음

---
### Storybook 빌드하기 (로컬 배포용)

```bash
pnpm build-storybook
```

storybook-static 디렉토리에 정적 파일이 생성됩니다.

정적 파일은 별도로 서버에 올려 배포하거나 Chromatic으로 자동 배포됩니다.

---

### Story 파일 작성 규칙 (`.stories.tsx`)

`src/stories/컴포넌트명.stories.tsx` 형식으로 작성해주세요.

```tsx
import type { Meta } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

interface StoryProps {
  args: React.ComponentProps<typeof Button>;
}

export const 기본버튼: StoryProps = {
  args: {
    children: '클릭',
    disabled: false,
  },
};

export const 비활성화버튼: StoryProps = {
  args: {
    children: '비활성',
    disabled: true,
  },
};
```

> props 상태 조절은 `args`로 정의
> `title`은 Storybook 좌측 패널 메뉴로 표시됨

---

### 스토리 작성 체크리스트

* [ ] 컴포넌트마다 최소 1개 이상의 `.stories.tsx` 파일을 작성했는가?
* [ ] 다양한 상태를 보여주는 `args` 예제를 제공했는가?
* [ ] 불필요한 상태/로직은 제외하고 Storybook 전용 UI로 구성했는가?

---

### 트러블슈팅

| 문제                         | 해결하기                                                   |
| -------------------------- | --------------------------------------------------------- |
| Storybook이 로컬에서 실행되지 않음    | `pnpm install` 누락 확인                                      |
| 스토리 파일은 있는데 Storybook에 안 뜸 | `title`, `component` 정의 여부 확인                             |
| UI 변경이 안 반영됨               | 기존 build 캐시가 남았을 수 있음 → `pnpm build-storybook` 수동 실행해보기!!   |

---
 
### 기타

* 추후 컴포넌트 작업 후 예시로 하나 올려놓겠습니다!!

