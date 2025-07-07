import type { Meta, StoryObj } from '@storybook/react-vite';
import Chip from '@components/chip/chip';
import ChipList from '@components/chip/chip-list';
import { chipVariants, chipVariantOptions } from '@components/chip/styles/chip-variants';
import type { VariantProps } from 'class-variance-authority';

type ChipColor = NonNullable<VariantProps<typeof chipVariants>['bgColor']>;

const bgColorOptions = Object.keys(chipVariantOptions.bgColor) as ChipColor[];
const textColorOptions = Object.keys(chipVariantOptions.textColor) as ChipColor[];

const meta: Meta<typeof Chip> = {
  title: 'common/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 
        `
*🏷️ Chip 컴포넌트*

팀 또는 응원 특성에 따라 배경색과 글자색이 자동으로 매핑되는 컴포넌트입니다.  
\`class-variance-authority (CVA)\`로 정의된 variant 조합을 사용하며, 색상 값은 \`theme.css\`에 정의된 CSS 변수를 기반으로 합니다.

---

### ✅ 필수 props
- \`label\` _(string)_: Chip 내부에 표시될 텍스트입니다.
- \`bgColor\` _(string)_: Chip의 배경색 키. 팀명 또는 특성 키워드를 사용합니다.
- \`textColor\` _(string)_: Chip의 글자색 키. 팀명 또는 특성 키워드를 사용합니다.

---

### 🎨 배경색 (bgColor)
| 키워드 | 클래스 |
|--------|--------|
${Object.entries(chipVariantOptions.bgColor).map(
  ([key, value]) => `| \`${key}\` | \`${value}\` |`,
).join('\n')}

---

### 텍스트 색상 (textColor)
| 키워드 | 클래스 |
|--------|--------|
${Object.entries(chipVariantOptions.textColor).map(
  ([key, value]) => `| \`${key}\` | \`${value}\` |`,
).join('\n')}

---

### 예시
\`\`\`tsx
<Chip label="한화" bgColor="한화" textColor="한화" />
<Chip label="직관먹방러" bgColor="직관먹방러" textColor="직관먹방러" />
\`\`\`
        `
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    bgColor: {
      control: 'select',
      options: bgColorOptions,
    },
    textColor: {
      control: 'select',
      options: textColorOptions,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: '한화',
    bgColor: '한화',
    textColor: '한화',
  },
};

export const AllVariants: Story = {
  render: () => {
    const allBgKeys = Object.keys(chipVariantOptions.bgColor) as ChipColor[];
    const traitKeys: ChipColor[] = ['열정응원러', '경기집중러', '직관먹방러'];
    const teamKeys = allBgKeys.filter((key) => !traitKeys.includes(key) && key !== 'default');

    return (
      <div className="flex flex-col gap-[2.4rem]">
        <div>
          <div className="cap_12_m mb-[0.8rem]">팀명 기반 Chip</div>
          <ChipList names={teamKeys} />
        </div>
        <div>
          <div className="cap_12_m mb-[0.8rem]">특성 기반 Chip</div>
          <ChipList names={traitKeys} />
        </div>
      </div>
    );
  },
  parameters: {
    controls: { disable: true },
  },
};
