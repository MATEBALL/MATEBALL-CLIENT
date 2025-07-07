import type { Meta, StoryObj } from '@storybook/react';
import Chip from '@components/chip/chip';
import { chipVariants, chipVariantOptions } from '@styles/chip-variants';
import type { VariantProps } from 'class-variance-authority';

type ChipColor = NonNullable<VariantProps<typeof chipVariants>['bgColor']>;

const bgColorOptions = Object.keys(chipVariantOptions.bgColor) as ChipColor[];
const textColorOptions = Object.keys(chipVariantOptions.textColor) as ChipColor[];

const meta: Meta<typeof Chip> = {
  title: 'Shared/Chip',
  component: Chip,
  tags: ['autodocs'],
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

export const EmotionFan: Story = {
  args: {
    label: '열정응원러',
    bgColor: '열정응원러',
    textColor: '열정응원러',
  },
};
