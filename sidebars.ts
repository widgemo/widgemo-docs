import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  coreDocsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/migration',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/modes-overview',
        'concepts/theming',
        'concepts/extension-api',
        'concepts/devmode',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/widgemo-props',
        'reference/widgemo-config',
        'reference/content-config',
        'reference/field-config',
        'reference/action-config',
        'reference/css-variables',
        'reference/theme-api',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/custom-fields',
        'guides/custom-modes',
        'guides/custom-icons',
        'guides/adopting-widgemo',
      ],
    },
    'changelog',
  ],
};

export default sidebars;
