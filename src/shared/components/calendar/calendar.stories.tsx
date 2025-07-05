import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import MonthCalendar from './month-calendar';
import WeekCalendar from './week-calendar';

const meta: Meta = {
  title: 'Components/Calendar',
  component: MonthCalendar,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj;

export const Month: Story = {
  render: () => {
    const [value, setValue] = useState(new Date());
    return <MonthCalendar value={value} onWeekChange={setValue} onMonthChange={setValue} />;
  },
};

export const Week: Story = {
  render: () => {
    const [value, setValue] = useState(new Date());
    return <WeekCalendar value={value} onChange={setValue} />;
  },
};
