// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'rascore wiki',
  tagline: 'Как пользоваться rascore: виджеты, алерты, настройки',
  favicon: 'img/favicon.ico',

  url: 'https://codeslugger.github.io',
  baseUrl: '/rascore-wiki/',
  organizationName: 'CodeSlugger',
  projectName: 'rascore-wiki',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['ru', 'en'],
        docsRouteBasePath: '/',
        indexBlog: false,
        searchBarShortcutHint: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/icon-192.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'rascore',
        logo: {alt: 'rascore', src: 'img/icon-192.png'},
        items: [
          {type: 'docSidebar', sidebarId: 'wiki', position: 'left', label: 'Wiki'},
          {href: 'https://rascore.site/app', label: 'Открыть rascore', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {label: 'Начало работы', to: '/start/login'},
              {label: 'Виджеты', to: '/widgets'},
              {label: 'Вопросы и ответы', to: '/faq'},
            ],
          },
          {
            title: 'rascore',
            items: [{label: 'Сайт', href: 'https://rascore.site'}],
          },
        ],
        copyright: `© ${new Date().getFullYear()} rascore`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
