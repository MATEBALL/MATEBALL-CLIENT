import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'MATEBALL Storybook',
    brandUrl:
      'https://686128be307ebf524cf1c24e-cmyvingnyo.chromatic.com/?path=/docs/introduction--docs',
    brandImage: '/svgs/logo-gray.svg',
    brandTarget: '_blank',
  },
});
