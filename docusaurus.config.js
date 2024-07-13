// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer'

const process = require('node:process');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UML Cloud Computing Club',
  tagline: 'Exploring Cloud Computing at UMass Lowell',
  favicon: 'img/logo_icon.png',

  // Set the production url of your site here
  url: 'https://UMLCloudComputing.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.IS_LOCAL ? '/UMLCloudComputing.github.io/' : '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UMLCloudComputing', // Usually your GitHub org/user name.
  projectName: 'UMLCloudComputing.github.io', // Usually your repo name.
  trailingSlash: false,

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
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: 'sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'projects',
  //       path: './projects',
  //       routeBasePath: './projects',
  //       sidebarPath: 'projectsSidebars.js',
  //     },
  //   ],
  // ],

 
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo_icon.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'UML Cloud Computing Club',
        logo: {
          alt: 'UML Cloud Computing Club Logo',
          src: 'img/logo_icon.png',
        },
        items: [

          // Schedule
          {
            position: 'left',
            label: 'Schedule',
            to: '/docs/Meeting Schedule',
          },

          // Projects
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: 'Projects',
          },

          // Tutorials
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },

          // Events (Engage)
          {
            href: 'https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub/events',
            position: 'left',
            label: 'Events',
          },

          // News (Engage)
          {
            href: 'https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub/news',
            position: 'left',
            label: 'News',
          },

          // FAQ
          {
            position: 'left',
            label: 'FAQ',
            to: '/docs/Getting Started and FAQ',
          },
        
          // Github
          {
            href: 'https://github.com/UMLCloudComputing',
            'aria-label': 'GitHub',
            className: 'navbar__icon navbar__github',
            position: 'right',
            html: '<i class="fa fa-github"></i>',
          },
          {
            href: 'https://github.com/UMLCloudComputing',
            label: 'GitHub',
            position: 'right',
          },

          // Discord
          {
            href: 'https://discord.gg/WC2NdqYtDt',
            label: 'Discord',
            position: 'right',
          },

          // LinkedIn
          {
            href: 'https://www.linkedin.com/company/umass-lowell-cloud-computing-club/',
            label: 'LinkedIn',
            position: 'right',
          },

          // Sign In
          {
            type: 'custom-accountButton',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Home',
            items: [
              {
                label: 'Projects',
                to: '/docs/projects/welcome',
              },
              {
                label: 'Tutorial',
                to: '/docs/tutorials/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/WC2NdqYtDt',
              },
              {
                label: 'UML Engage',
                href: 'https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/UMLCloudComputing',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/umass-lowell-cloud-computing-club/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: 'https://umasslowellclubs.campuslabs.com/engage/organization/cloudcomputingclub/news',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UMass Lowell Cloud Computing Club`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
