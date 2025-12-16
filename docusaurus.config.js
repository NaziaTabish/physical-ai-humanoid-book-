// @ts-check
// `@type` JSDoc annotations allow IDEs and type-checking tools to autocomplete and validate types

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics – Essentials',
  tagline: 'A concise, professional textbook on Physical AI and Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://physical-ai-humanoid-book-.vercel.app', // Vercel deployment URL
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Vercel deployment, use '/' for root
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'NaziaTabish', // Usually your GitHub org/user name.
  projectName: 'physical-ai-humanoid-book-', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Branch that GitHub Pages will deploy from.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Disable blog functionality as we don't need it
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/physical-ai-social-card.jpg', // Add social card image for better sharing
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Textbook Logo',
          src: 'img/favicon.ico',
          srcDark: 'img/favicon.ico', // Add dark mode logo if available
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            to: '/docs/intro',
            label: 'Overview',
            position: 'left',
          },
          {
            to: '/docs/chapter-1-introduction-to-physical-ai',
            label: 'Chapters',
            position: 'left',
          },
          {
            href: 'https://github.com/NaziaTabish/physical-ai-humanoid-book-',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Textbook',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Chapter 1: Introduction to Physical AI',
                to: '/docs/chapter-1-introduction-to-physical-ai',
              },
              {
                label: 'Chapter 2: Foundations of Robotics',
                to: '/docs/chapter-2-foundations-of-robotics',
              },
              {
                label: 'Chapter 3: Human-Inspired Design Principles',
                to: '/docs/chapter-3-human-inspired-design-principles',
              },
              {
                label: 'Chapter 4: Perception Systems in Humanoids',
                to: '/docs/chapter-4-perception-systems-in-humanoids',
              },
              {
                label: 'Chapter 5: AI, Deep Learning & Control Systems',
                to: '/docs/chapter-5-ai-deep-learning-control-systems',
              },
              {
                label: 'Chapter 6: Humanoid Locomotion and Manipulation',
                to: '/docs/chapter-6-humanoid-locomotion-manipulation',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/NaziaTabish/physical-ai-humanoid-book-',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io',
              },
              {
                label: 'Physical AI Research',
                href: 'https://en.wikipedia.org/wiki/Physical_artificial_intelligence',
              },
              {
                label: 'Humanoid Robotics',
                href: 'https://en.wikipedia.org/wiki/Humanoid_robot',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Robotics Stack Exchange',
                href: 'https://robotics.stackexchange.com/',
              },
              {
                label: 'AI Research Papers',
                href: 'https://arxiv.org/list/cs.RO/recent',
              },
              {
                label: 'IEEE Robotics & Automation',
                href: 'https://www.ieee-ras.org/',
              },
              {
                label: 'Open Source Robotics',
                href: 'https://www.osrfoundation.org/',
              },
            ],
          },
        ],
        copyright: `<div class="footer__copyright">
          Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook.
          Built with <a href="https://docusaurus.io/" target="_blank" rel="noopener">Docusaurus</a> and ❤️ for the robotics community.
        </div>`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.vsDark,
        additionalLanguages: ['python', 'cpp', 'robotframework'],
      },
      algolia: {
        // Optional: configure Algolia search
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'physical-ai-humanoid-robotics',
        contextualSearch: true,
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;