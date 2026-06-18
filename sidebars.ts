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
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/your-first-widgemo',
        'getting-started/common-setup-pitfalls',
        'guides/adopting-widgemo',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/configuration-model',
        'concepts/theming',
        'concepts/devmode',
        'concepts/extension-architecture',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/overview',
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
        {
          type: 'category',
          label: 'Field Types',
          items: [
            'components/fields/overview',
            'components/fields/text',
            'components/fields/number',
            'components/fields/boolean',
            'components/fields/select',
            'components/fields/reference',
            'components/fields/textarea',
            'components/fields/email',
            'components/fields/url',
            'components/fields/image',
            'components/fields/swatch',
            'components/fields/date',
            'components/fields/time',
            'components/fields/datetime',
            'components/fields/timestamp',
            'components/fields/duration',
            'components/fields/relation',
            'components/fields/temporal-fields',
          ],
        },
        {
          type: 'category',
          label: 'Field Renderers',
          items: [
            'components/renderers/overview',
            'components/renderers/badge',
            'components/renderers/currency',
            'components/renderers/progress',
            'components/renderers/rating',
            'components/renderers/link',
            'components/renderers/json-preview',
            'components/renderers/delta-value',
            'components/renderers/spark-trend',
            'components/renderers/score-meter',
            'components/renderers/composition-bar',
            'components/renderers/date',
            'components/renderers/time',
            'components/renderers/datetime',
            'components/renderers/timestamp',
            'components/renderers/duration',
          ],
        },
        'components/icons',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/widgemo-props',
        'reference/widgemo-config',
        {
          type: 'doc',
          id: 'reference/zone-config',
          label: 'Zone Config (Header & Footer)',
        },
        'reference/content-config',
        'reference/item-config',
        'reference/loading-state',
        'reference/error-state',
        {
          type: 'category',
          label: 'Mode Config',
          items: [
            'reference/mode-config/table',
            'reference/mode-config/grid',
            'reference/mode-config/carousel',
            'reference/mode-config/board',
            'reference/mode-config/chart',
          ],
        },
        'reference/field-config',
        'reference/action-config',
        'reference/css-variables',
        'reference/host-css-table-layout',
        'reference/theme-api',
        'reference/extension-api',
        'reference/utilities',
        {
          type: 'doc',
          id: 'reference/all-exports',
          label: 'All Exports',
        },
      ],
    },
    {
      type: 'category',
      label: 'Extending Widgemo',
      items: [
        'customization/overview',
        'extensions/renderas-customization',
        'extensions/custom-field-types',
        'guides/custom-modes',
        'guides/custom-icons',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/field-rendering-decisions',
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'changelog',
        'release-notes/upgrading/migration-compatibility',
      ],
    },
  ],
};

export default sidebars;
