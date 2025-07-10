import Card from '@components/card/match-card/card';
import type { CardProps } from '@components/card/match-card/types/card';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Card> = {
  title: 'COMMON/Card/MatchCard',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
🎯 MatchCard 컴포넌트는 매칭 시스템용 카드 공통 컴포넌트입니다.

- Single: 개인 매칭 정보를 표시하는 기본 카드 형태
- Group: 그룹 매칭 정보를 표시하며, 여러 멤버의 아바타를 표시
- Detailed: 상세한 개인 정보와 매칭률, 소개글을 포함한 확장 카드

### 공통 Props:

- type: 카드 타입 ('single' | 'group' | 'detailed')
- nickname: 사용자 이름
- stadium: 경기장명
- date: 매칭 날짜
- imgUrl: 아바타 이미지 URL 배열
- status: 매칭 상태
- color: 카드 색상 상태 ('active' | 'inactive')

### Single/Detailed 전용 Props:

- age: 사용자 나이
- gender: 사용자 성별
- team: 응원팀
- style: 응원 스타일
- chips: 태그 배열
- awayTeam/homeTeam: 원정팀/홈팀

### Detailed 전용 Props:

- introduction: 한줄 소개글
- matchRate: 매칭률 (퍼센트)

### Group 전용 Props:

- count: 매칭된 인원 수
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'group', 'detailed'],
      description: '카드의 타입을 설정합니다.',
      table: {
        type: { summary: "'single' | 'group' | 'detailed'" },
        defaultValue: { summary: 'single' },
      },
    },
    color: {
      control: 'select',
      options: ['active', 'inactive'],
      description: '카드의 색상을 설정합니다.',
      table: {
        type: { summary: "'active' | 'inactive'" },
        defaultValue: { summary: 'inactive' },
      },
    },
    nickname: {
      control: 'text',
      description: '사용자 이름을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    age: {
      control: 'text',
      description: '사용자의 나이를 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    gender: {
      control: 'text',
      description: '사용자의 성별을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    team: {
      control: 'text',
      description: '응원하는 팀을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'text',
      description: '응원 스타일을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    stadium: {
      control: 'text',
      description: '경기장을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    date: {
      control: 'text',
      description: '매칭 날짜를 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    introduction: {
      control: 'text',
      description: '한줄 설명 텍스트를 설정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '한줄소개' },
      },
    },
    count: {
      control: 'number',
      description: '매칭된 인원 수를 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    matchRate: {
      control: { type: 'text', min: 0, max: 100, step: 1 },
      description: '매칭률을 퍼센트로 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    imgUrl: {
      control: 'object',
      description: '아바타 이미지 URL 배열입니다.',
      table: {
        type: { summary: 'string[]' },
      },
    },
    status: {
      control: 'text',
      description: '매칭 상태를 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<CardProps>;

export const Single: Story = {
  args: {
    type: 'single',
    nickname: '김민수',
    age: '28',
    gender: '남성',
    team: '두산',
    awayTeam: '두산',
    homeTeam: '키움',
    style: '열정응원러',
    stadium: '경기장',
    date: '11월 11일',
    imgUrl: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    ],
    chips: ['키움', '열정응원러'],
    status: '매칭 완료',
  },
};

export const Detailed: Story = {
  args: {
    type: 'detailed',
    nickname: '이영희',
    age: '25',
    gender: '여성',
    stadium: '경기장',
    team: 'LG',
    awayTeam: 'LG',
    homeTeam: '두산',
    style: '경기장',
    date: '11월 11일',
    introduction: '야구장에서 함께 응원해요! 치킨과 맥주 좋아합니다 🍺',
    matchRate: 85,
    imgUrl: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    ],
    chips: ['키움', '열정응원러'],
    status: '매칭 완료',
  },
};

export const Group: Story = {
  args: {
    type: 'group',
    nickname: '박철수',
    awayTeam: '롯데',
    homeTeam: '두산',
    stadium: '롯데',
    date: '11월 11일',
    count: 3,
    imgUrl: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    ],
    status: '매칭 완료',
  },
};
