import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'MATEBALL MATEBALL Design System',
    brandImage: '/svgs/logo-gray.svg',
  },
});
