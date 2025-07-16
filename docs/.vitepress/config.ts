import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'MATEBALL CLIENT DOCS',
  description: 'mateball client convention & troubleshootig & docs',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg'}],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],


    socialLinks: [{ icon: 'github', link: 'https://github.com/MATEBALL/MATEBALL-CLIENT' }],
  },
});
