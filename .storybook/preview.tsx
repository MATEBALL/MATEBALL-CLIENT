import React from 'react';
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
  decorators: [
    (Story) => (
      <div className="min-h-screen flex-col-center">
        <Story />
      </div>
    ),
  ],
};

export default preview;
