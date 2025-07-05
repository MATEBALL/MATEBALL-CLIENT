import type { Meta, StoryObj } from '@storybook/react';
import { TYPOGRAPHY_CLASSES } from '../tokens/typography';

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj;

export const Typography: Story = {
  render: () => (
    <div className="space-y-6 bg-white p-12 text-gray-black">
      {TYPOGRAPHY_CLASSES.map((example) => (
        <div key={example} className="space-y-2">
          <p className="cap_14_m text-gray-600">{example}</p>
          <p className={example}>Mateball sample text using the {example} style.</p>
        </div>
      ))}
    </div>
  ),
};
