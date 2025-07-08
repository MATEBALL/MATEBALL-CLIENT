import type { Preview } from '@storybook/react-vite';
import '../src/shared/styles/story-style.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex-row-center py-12">
        <Story />
      </div>
    ),
  ],
};

export default preview;
