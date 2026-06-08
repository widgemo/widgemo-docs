import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
        {
          type: 'doc',
          id: 'getting-started/quick-start',
          label: 'Quick Start',
        },
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
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/configuration-model',
        {
          type: 'category',
          label: 'Modes',
          items: [
            'concepts/modes-overview',
            'concepts/modes/table',
            'concepts/modes/grid',
            'concepts/modes/carousel',
            'concepts/modes/board',
            'concepts/modes/chart',
            'concepts/modes/responsive-switching',
          ],
        },
        'concepts/theming',
        'concepts/devmode',
        'concepts/extension-architecture',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/integrate-into-existing-app',
        'guides/adopting-widgemo',
        'guides/temporal-fields',
        'guides/composition-bar',
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
        'reference/host-css-table-layout',
        'reference/theme-api',
      ],
    },
    {
      type: 'category',
      label: 'Extensions & Customizations',
      items: [
        'reference/extension-api',
        'extensions/renderas-customization',
        'extensions/custom-field-types',
        'guides/custom-modes',
        'guides/custom-icons',
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/upgrading/migration-compatibility',
      ],
    },
  ],
};

export default sidebars;
