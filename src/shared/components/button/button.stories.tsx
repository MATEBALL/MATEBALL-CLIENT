import type { Meta, StoryObj } from '@storybook/react';
import Button from '@components/button/Button'
import { buttonVariants } from '@components/button/styles/button-variants';
import type { VariantProps } from 'class-variance-authority';

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;

const variantOptions: ButtonVariant[] = ['blue', 'gray', 'skyblue', 'white', 'skyblueBorder'];
const sizeOptions: ButtonSize[] = ['M', 'L', 'setting_M', 'setting_L'];

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    variant: {
      control: 'select',
      options: variantOptions,
    },
    size: {
      control: 'select',
      options: sizeOptions,
    },
    disabled: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
    ariaLabel: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'blue',
    size: 'M',
  },
};

export const Blue: Story = {
  args: {
    label: 'Blue Button',
    variant: 'blue',
    size: 'M',
  },
};

export const Gray: Story = {
  args: {
    label: 'Gray Button',
    variant: 'gray',
    size: 'M',
  },
};

export const SkyBlue: Story = {
  args: {
    label: 'Sky Blue Button',
    variant: 'skyblue',
    size: 'M',
  },
};

export const White: Story = {
  args: {
    label: 'White Button',
    variant: 'white',
    size: 'M',
  },
};

export const SkyBlueBorder: Story = {
  args: {
    label: 'Sky Blue Border Button',
    variant: 'skyblueBorder',
    size: 'M',
  },
};

export const SizeM: Story = {
  args: {
    label: 'Medium Button',
    variant: 'blue',
    size: 'M',
  },
};

export const SizeL: Story = {
  args: {
    label: 'Large Button',
    variant: 'blue',
    size: 'L',
  },
};

export const SettingM: Story = {
  args: {
    label: 'Setting Medium',
    variant: 'blue',
    size: 'setting_M',
  },
};

export const SettingL: Story = {
  args: {
    label: 'Setting Large',
    variant: 'blue',
    size: 'setting_L',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: 'blue',
    size: 'M',
    disabled: true,
  },
};
