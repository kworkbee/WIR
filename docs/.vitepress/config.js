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
        ['meta', {
            name: 'og:image',
            //   content: 'https://h4dvprmht2.execute-api.ap-northeast-2.amazonaws.com/automated-og-image?text=Today%20I%20Learned'
        }],
        [
            'script',
            {
                async: true,
                src: 'https://www.googletagmanager.com/gtag/js?id=G-8Y5NYKR2S4',
            },
        ],
        [
            'script',
            {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-8Y5NYKR2S4');",
            ],
        ],
    ],
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [{
            text: 'Github',
            link: 'https://github.com/kworkbee',
          },
          {
            text: 'Blog',
            link: 'https://about.g1tommy.me/'
          },
          {
            text: 'Profile',
            link: 'https://about.g1tommy.me/resume'
          }
        ],
    }
}