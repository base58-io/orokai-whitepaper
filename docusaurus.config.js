// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Orokai_whitepaper_1.0',
  tagline: 'Investing that fits your life',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://orokai.com',
  baseUrl: '/',

  organizationName: 'orokai',
  projectName: 'whitepaper',

  onBrokenLinks: 'throw',

  // Włącz Mermaid w Markdown
  markdown: {
    mermaid: true,
  },

  // Motyw do Mermaida
  themes: ['@docusaurus/theme-mermaid'],

  // Konfiguracja wielojęzyczności
  i18n: {
    defaultLocale: 'en',
    locales: ['pl', 'en'],
    localeConfigs: {
      pl: { label: 'Polski', direction: 'ltr', htmlLang: 'pl-PL' },
      en: { label: 'English', direction: 'ltr', htmlLang: 'en-US' },
    },
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },
     mermaid: {
    theme: { light: 'light', dark: 'dark' },
  },
    navbar: {
      title: ' ',
      logo: {
        alt: 'Orokai Logo',
        src: 'img/logo_dark.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Whitepaper' },
        { type: 'localeDropdown', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { items: [{ label: 'orokai.com', href: 'http://orokai.com/' }] },
        {
          items: [
            { label: 'X (formerly Twitter)', href: 'https://x.com/orokai_com' },
            { label: 'Linkedin', href: 'https://www.linkedin.com/in/orokai-orokai-3962b6389/?skipRedirect=true' },
            { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61581892741237' },
          ],
        },
        {
          items: [
            { label: 'YouTube', href: 'https://www.youtube.com/@orokaicom' },
            { label: 'TikTok', href: 'https://www.tiktok.com/@orokai.com' },
            { label: 'Instagram', href: 'https://www.instagram.com/orokai_com/' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
