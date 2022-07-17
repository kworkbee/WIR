const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics");
const { registerComponentsPlugin } = require("@vuepress/plugin-register-components");
const { defaultTheme } = require("@vuepress/theme-default");
const { path } = require('@vuepress/utils');
const { palettePlugin } = require('@vuepress/plugin-palette');

module.exports = {
  title: 'What I Read',
  base: '/WIR/',
  description: 'What I Read',
  lang: 'ko-KR',
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    [
      'link', {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
      }
    ],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-3DJWRRKTMB',
      },
    ],
    [
      'script',
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-3DJWRRKTMB');",
      ],
    ],
  ],
  theme: defaultTheme({
    repo: 'kworkbee/WIR',
    editLinks: false,
    docsDir: 'docs',
    editLinkText: 'Edit',
    lastUpdated: true,
    navbar: [
      {
        text: 'Blog',
        link: 'https://about.g1tommy.me/'
      },
      {
        text: 'Profile',
        link: 'https://about.g1tommy.me/resume'
      }
    ],
    sidebar: [
      { text: 'Books', link: '/books' },
      { text: 'Tech Blogs', link: '/tech-blogs' },
      { text: 'References', link: '/references' },
    ]
  }),
  plugins: [
    googleAnalyticsPlugin({
        id: 'G-9J9RPKB6PG',
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    palettePlugin({
      preset: 'sass'
    })
  ],
}
