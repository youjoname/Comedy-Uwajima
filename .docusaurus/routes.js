import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '3b6'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '54d'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'd1f'),
            routes: [
              {
                path: '/christianity-john',
                component: ComponentCreator('/christianity-john', '5da'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/christianity-mary',
                component: ComponentCreator('/christianity-mary', 'b48'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/christianity-saint-peter',
                component: ComponentCreator('/christianity-saint-peter', '954'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/cooking-bread',
                component: ComponentCreator('/cooking-bread', '835'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/cooking-curry',
                component: ComponentCreator('/cooking-curry', '8c6'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/cooking-potato-memories',
                component: ComponentCreator('/cooking-potato-memories', '530'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/cooking-ramen',
                component: ComponentCreator('/cooking-ramen', '524'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/cooking-sushi-nightmare',
                component: ComponentCreator('/cooking-sushi-nightmare', '49d'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/cooking-yakiniku',
                component: ComponentCreator('/cooking-yakiniku', '181'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/grammar-past-subjunctive',
                component: ComponentCreator('/grammar-past-subjunctive', '66c'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/greeting',
                component: ComponentCreator('/greeting', 'dc0'),
                exact: true
              },
              {
                path: '/historical-figures-franklin',
                component: ComponentCreator('/historical-figures-franklin', '496'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/incident-everest',
                component: ComponentCreator('/incident-everest', '7cc'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/incident-hakkoda',
                component: ComponentCreator('/incident-hakkoda', '6f4'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/incident-sewol',
                component: ComponentCreator('/incident-sewol', '3d0'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/incident-shiretoko',
                component: ComponentCreator('/incident-shiretoko', 'f0b'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/planet-mars',
                component: ComponentCreator('/planet-mars', '07d'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/planet-mercury',
                component: ComponentCreator('/planet-mercury', 'f02'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/planet-pluto',
                component: ComponentCreator('/planet-pluto', 'a24'),
                exact: true,
                sidebar: "comedy"
              },
              {
                path: '/tutorial-basics/congratulations',
                component: ComponentCreator('/tutorial-basics/congratulations', '855'),
                exact: true
              },
              {
                path: '/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/tutorial-basics/create-a-blog-post', 'af7'),
                exact: true
              },
              {
                path: '/tutorial-basics/create-a-document',
                component: ComponentCreator('/tutorial-basics/create-a-document', 'bd4'),
                exact: true
              },
              {
                path: '/tutorial-basics/create-a-page',
                component: ComponentCreator('/tutorial-basics/create-a-page', 'aed'),
                exact: true
              },
              {
                path: '/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/tutorial-basics/deploy-your-site', 'f5a'),
                exact: true
              },
              {
                path: '/tutorial-basics/markdown-features',
                component: ComponentCreator('/tutorial-basics/markdown-features', '89e'),
                exact: true
              },
              {
                path: '/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/tutorial-extras/manage-docs-versions', 'e1f'),
                exact: true
              },
              {
                path: '/tutorial-extras/translate-your-site',
                component: ComponentCreator('/tutorial-extras/translate-your-site', 'dea'),
                exact: true
              },
              {
                path: '/',
                component: ComponentCreator('/', '5f7'),
                exact: true,
                sidebar: "comedy"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
