import type { Meta, StoryObj } from '@storybook/react-vite';
import Card from './card';

const meta: Meta<typeof Card> = {
  title: 'COMMON/Card/MatchCard',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '매칭 시스템용 카드 공통 컴포넌트입니다. 개인 매칭, 그룹 매칭, 개인 상세 정보 표시 등 다양한 타입을 지원합니다.',
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
      options: ['blue', 'white'],
      description: '카드의 색상을 설정합니다.',
      table: {
        type: { summary: "'blue' | 'white'" },
        defaultValue: { summary: 'blue' },
      },
    },
    name: {
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
    teams: {
      control: 'text',
      description: '응원하는 팀을 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    location: {
      control: 'text',
      description: '응원 스타일을 설정합니다.',
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
      description: '한줄 설명 텍스트를 설정합니다. (선택사항)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    matched: {
      control: 'number',
      description: '매칭된 인원 수를 설정합니다.',
      table: {
        type: { summary: 'number' },
      },
    },
    percent: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: '매칭률을 퍼센트로 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    images: {
      control: 'object',
      description: '아바타 이미지 URL 배열입니다.',
      table: {
        type: { summary: 'string[]' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    type: 'single',
    name: '김민수',
    age: '28',
    gender: '남성',
    teams: '두산',
    location: '경기장',
    date: '11월 11일',
    images: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    ],
    chips: ['키움', '열정응원러'],
  },
};

export const Detailed: Story = {
  args: {
    type: 'detailed',
    name: '이영희',
    age: '25',
    gender: '여성',
    teams: 'LG',
    location: '경기장',
    date: '11월 11일',
    introduction: '야구장에서 함께 응원해요! 치킨과 맥주 좋아합니다 🍺',
    percent: 85,
    images: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    ],
    chips: ['키움', '열정응원러'],
  },
};

export const Group: Story = {
  args: {
    type: 'group',
    name: '박철수',
    age: '30',
    gender: '남성',
    teams: '롯데',
    location: '캐주얼',
    date: '11월 11일',
    matched: 3,
    images: [
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    ],
  },
};
