import type { Preview } from '@storybook/react-vite';
import '../src/shared/styles/global.css';
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
      <div className="min-h-screen flex-col-center">
        <Story />
      </div>
    ),
  ],
};

export default preview;