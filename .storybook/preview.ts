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

    actions: {
      argTypesRegex: '^on[A-Z].*',
    },

    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
