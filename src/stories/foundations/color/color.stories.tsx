import type { Meta, StoryObj } from '@storybook/react';
import {
  ETC_COLORS,
  GRAYSCALE_COLORS,
  MAIN_COLORS,
  STATE_COLORS,
  SUB_COLORS,
  TEAM_COLORS,
  WEEK_COLORS,
} from '../tokens/colors';

const meta: Meta = {
  title: 'Foundations/Color',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

const ColorBox = ({ name, value }: { name: string; value: string }) => (
  <div className="flex w-36 flex-col gap-1">
    <div className="h-36 w-36" style={{ backgroundColor: value }} />
    <span className="cap_14_m text-gray-black">{name}</span>
    <span className="cap_12_m text-gray-600">{value}</span>
  </div>
);

const ColorGroup = ({ title, colors }: { title: string; colors: Record<string, string> }) => (
  <div className="mb-12">
    <h3 className="head_20_sb mb-4">{title}</h3>
    <div className="flex flex-wrap gap-6">
      {Object.entries(colors).map(([name, value]) => (
        <ColorBox key={name} name={name} value={value} />
      ))}
    </div>
  </div>
);

export const Color: Story = {
  render: () => (
    <div className="space-y-12 p-12">
      <ColorGroup title="Main Colors" colors={MAIN_COLORS} />
      <ColorGroup title="Sub Colors" colors={SUB_COLORS} />
      <ColorGroup title="Etc" colors={ETC_COLORS} />
      <ColorGroup title="Grayscale" colors={GRAYSCALE_COLORS} />
      <ColorGroup title="Team Colors" colors={TEAM_COLORS} />
      <ColorGroup title="Week Colors" colors={WEEK_COLORS} />
      <ColorGroup title="State Colors" colors={STATE_COLORS} />
    </div>
  ),
};
