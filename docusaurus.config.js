// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "コメディ宇和島",
  tagline: "ようこそ、笑いの渦巻く英語学習の世界「コメディ宇和島」へ！",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://comedy-uwajima.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "youjoname", // Usually your GitHub org/user name.
  projectName: "Comedy-Uwajima", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",

      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Serve the docs at the site's root
          /* other docs plugin options */
        },
        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/uwajima-social-card.jpg",
      navbar: {
        title: "コメディ宇和島",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
      },
      footer: {
        style: "dark",
        copyright: `コメディ宇和島 © ${new Date().getFullYear()} `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


export default config;