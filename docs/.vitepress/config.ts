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
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
