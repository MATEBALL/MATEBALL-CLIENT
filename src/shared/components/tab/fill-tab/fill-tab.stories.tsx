import type { Meta, StoryObj } from '@storybook/react-vite';
import FillTabList from '@components/tab/fill-tab/fill-tab-list';

const meta: Meta<typeof FillTabList> = {
  title: 'common/tab/FillTabList',
  component: FillTabList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**FillTabList 컴포넌트**

버튼 형태의 탭 리스트 컴포넌트입니다.  
각 탭은 내부 상태에 따라 활성화되며, 기본적으로 전달된 \`tabs\` 배열의 첫 번째 탭이 기본 활성화됩니다.

---

### Props

| 이름 | 타입 | 설명 |
|------|------|------|
| \`tabs\` | \`string[]\` | 표시할 탭 제목 목록입니다. 첫 번째 요소가 기본 활성 탭입니다. |

---

### 내부 구성
- 각 탭은 \`FillTabItem\` 컴포넌트를 사용합니다.
- 활성 탭은 내부 상태로 관리되며, 외부로 onChange 등의 콜백은 제공하지 않습니다 (필요 시 확장 가능).

---

### 사용 예시

\`\`\`tsx
<FillTabList tabs={['전체', '대기 중', '완료', '실패']} />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    tabs: {
      control: { type: 'object' },
      description: '탭 타이틀 목록',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FillTabList>;

export const Default: Story = {
  args: {
    tabs: ['전체', '대기 중', '완료', '실패'],
  },
};
