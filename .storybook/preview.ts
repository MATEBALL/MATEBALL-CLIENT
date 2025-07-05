import type { Preview } from '@storybook/react-vite';

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
