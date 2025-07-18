import MonthCalendar from '@components/calendar/month-calendar';
import WeekCalendar from '@components/calendar/week-calendar';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta = {
  title: 'COMMON/Calendar',
  component: MonthCalendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
📅 Calendar 컴포넌트는 날짜 기반의 UI를 제공하는 요소입니다.  
- **MonthCalendar**: 월간 캘린더로 날짜 선택 시 해당 날짜가 포함된 주를 반환합니다.
- **WeekCalendar**: 주간 단위로 날짜를 표시하며, 선택된 날짜를 기준으로 주간 시작일로부터 7일을 렌더링합니다.

공통 Props:
- **value**: 선택된 날짜
- **onChange**: 날짜 선택 시 호출되는 이벤트 핸들러

MonthCalendar 전용 Props:
- **onWeekChange**: 주간 변경 시 호출
- **onMonthChange**: 월간 변경 시 호출

WeekCalendar 전용 Props:
- **baseDate**: 렌더링 기준이 되는 주의 시작일 (월요일 등)
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Month: Story = {
  render: () => {
    const [value, setValue] = useState(new Date());
    return (
      <MonthCalendar
        entryDate={new Date()}
        value={value}
        onWeekChange={setValue}
        onMonthChange={setValue}
      />
    );
  },
};

export const Week: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const baseWeekDate = new Date();

    return (
      <WeekCalendar
        value={selectedDate}
        baseDate={baseWeekDate}
        onChange={(date) => setSelectedDate(date)}
      />
    );
  },
};
