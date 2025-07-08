import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'MATEBALL Design System',
    brandUrl:
      'https://686128be307ebf524cf1c24e-mtahknuhso.chromatic.com/?path=/docs/introduction--docs',
    brandImage: '/svgs/logo-gray.svg',
    brandTarget: '_self',
  },
});
