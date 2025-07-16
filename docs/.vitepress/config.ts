import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/MATEBALL-CLIENT/',
  title: 'MATEBALL CLIENT DOCS',
  description: 'mateball client convention & troubleshootig & docs',

  head: [
    ['link', { rel: 'icon', href: '/MATEBALL-CLIENT/favicon.svg' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],


    socialLinks: [{ icon: 'github', link: 'https://github.com/MATEBALL/MATEBALL-CLIENT' }],
  },
});
