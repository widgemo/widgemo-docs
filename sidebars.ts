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
        {
          type: 'doc',
          id: 'getting-started/introduction',
          label: 'Introduction',
        },
        {
          type: 'doc',
          id: 'getting-started/installation',
          label: 'Installation',
        },
        {
          type: 'doc',
          id: 'getting-started/quick-start',
          label: 'Quick Start',
        },
        {
          type: 'doc',
          id: 'getting-started/your-first-widgemo',
          label: 'Your First Widgemo',
        },
        {
          type: 'doc',
          id: 'getting-started/common-setup-pitfalls',
          label: 'Common Setup Pitfalls',
        },
        {
          type: 'doc',
          id: 'guides/adopting-widgemo',
          label: 'Adopting Widgemo',
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        {
          type: 'doc',
          id: 'concepts/configuration-model',
          label: 'Configuration Model',
        },
        {
          type: 'doc',
          id: 'concepts/theming',
          label: 'Theming',
        },
        {
          type: 'doc',
          id: 'concepts/devmode',
          label: 'Developer Mode',
        },
        {
          type: 'doc',
          id: 'concepts/extension-architecture',
          label: 'Extension Architecture',
        },
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        {
          type: 'doc',
          id: 'components/overview',
          label: 'Overview',
        },
        {
          type: 'category',
          label: 'Modes',
          items: [
            {
              type: 'doc',
              id: 'concepts/modes-overview',
              label: 'Modes Overview',
            },
            {
              type: 'doc',
              id: 'concepts/modes/table',
              label: 'Table',
            },
            {
              type: 'doc',
              id: 'concepts/modes/grid',
              label: 'Grid',
            },
            {
              type: 'doc',
              id: 'concepts/modes/carousel',
              label: 'Carousel',
            },
            {
              type: 'doc',
              id: 'concepts/modes/board',
              label: 'Board',
            },
            {
              type: 'doc',
              id: 'concepts/modes/chart',
              label: 'Chart',
            },
            {
              type: 'doc',
              id: 'concepts/modes/responsive-switching',
              label: 'Responsive Switching',
            },
          ],
        },
        {
          type: 'category',
          label: 'Field Types',
          items: [
            {
              type: 'doc',
              id: 'components/fields/overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'components/fields/text',
              label: 'Text',
            },
            {
              type: 'doc',
              id: 'components/fields/number',
              label: 'Number',
            },
            {
              type: 'doc',
              id: 'components/fields/boolean',
              label: 'Boolean',
            },
            {
              type: 'doc',
              id: 'components/fields/select',
              label: 'Select',
            },
            {
              type: 'doc',
              id: 'components/fields/reference',
              label: 'Reference',
            },
            {
              type: 'doc',
              id: 'components/fields/textarea',
              label: 'Textarea',
            },
            {
              type: 'doc',
              id: 'components/fields/email',
              label: 'Email',
            },
            {
              type: 'doc',
              id: 'components/fields/url',
              label: 'URL',
            },
            {
              type: 'doc',
              id: 'components/fields/image',
              label: 'Image',
            },
            {
              type: 'doc',
              id: 'components/fields/swatch',
              label: 'Swatch',
            },
            {
              type: 'doc',
              id: 'components/fields/date',
              label: 'Date',
            },
            {
              type: 'doc',
              id: 'components/fields/time',
              label: 'Time',
            },
            {
              type: 'doc',
              id: 'components/fields/datetime',
              label: 'DateTime',
            },
            {
              type: 'doc',
              id: 'components/fields/timestamp',
              label: 'Timestamp',
            },
            {
              type: 'doc',
              id: 'components/fields/duration',
              label: 'Duration',
            },
            {
              type: 'doc',
              id: 'components/fields/relation',
              label: 'Relation',
            },
            {
              type: 'doc',
              id: 'components/fields/temporal-fields',
              label: 'Temporal Fields',
            },
          ],
        },
        {
          type: 'category',
          label: 'Field Renderers',
          items: [
            {
              type: 'doc',
              id: 'components/renderers/overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'components/renderers/badge',
              label: 'Badge',
            },
            {
              type: 'doc',
              id: 'components/renderers/currency',
              label: 'Currency',
            },
            {
              type: 'doc',
              id: 'components/renderers/progress',
              label: 'Progress',
            },
            {
              type: 'doc',
              id: 'components/renderers/rating',
              label: 'Rating',
            },
            {
              type: 'doc',
              id: 'components/renderers/link',
              label: 'Link',
            },
            {
              type: 'doc',
              id: 'components/renderers/json-preview',
              label: 'JSON Preview',
            },
            {
              type: 'doc',
              id: 'components/renderers/delta-value',
              label: 'Delta Value',
            },
            {
              type: 'doc',
              id: 'components/renderers/spark-trend',
              label: 'Spark Trend',
            },
            {
              type: 'doc',
              id: 'components/renderers/score-meter',
              label: 'Score Meter',
            },
            {
              type: 'doc',
              id: 'components/renderers/composition-bar',
              label: 'Composition Bar',
            },
            {
              type: 'doc',
              id: 'components/renderers/date',
              label: 'Date',
            },
            {
              type: 'doc',
              id: 'components/renderers/time',
              label: 'Time',
            },
            {
              type: 'doc',
              id: 'components/renderers/datetime',
              label: 'DateTime',
            },
            {
              type: 'doc',
              id: 'components/renderers/timestamp',
              label: 'Timestamp',
            },
            {
              type: 'doc',
              id: 'components/renderers/duration',
              label: 'Duration',
            },
          ],
        },
        {
          type: 'doc',
          id: 'components/icons',
          label: 'Icon Reference',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'doc',
          id: 'reference/widgemo-props',
          label: 'Widgemo Props',
        },
        {
          type: 'doc',
          id: 'reference/widgemo-config',
          label: 'Widgemo Config',
        },
        {
          type: 'doc',
          id: 'reference/zone-config',
          label: 'Zone Config (Header & Footer)',
        },
        {
          type: 'doc',
          id: 'reference/content-config',
          label: 'Content Config',
        },
        {
          type: 'doc',
          id: 'reference/item-config',
          label: 'Item Config',
        },
        {
          type: 'doc',
          id: 'reference/loading-state',
          label: 'Loading State',
        },
        {
          type: 'doc',
          id: 'reference/error-state',
          label: 'Error State',
        },
        {
          type: 'category',
          label: 'Mode Config',
          items: [
            {
              type: 'doc',
              id: 'reference/mode-config/table',
              label: 'Table',
            },
            {
              type: 'doc',
              id: 'reference/mode-config/grid',
              label: 'Grid',
            },
            {
              type: 'doc',
              id: 'reference/mode-config/carousel',
              label: 'Carousel',
            },
            {
              type: 'doc',
              id: 'reference/mode-config/board',
              label: 'Board',
            },
            {
              type: 'doc',
              id: 'reference/mode-config/chart',
              label: 'Chart',
            },
          ],
        },
        {
          type: 'doc',
          id: 'reference/field-config',
          label: 'Field Config',
        },
        {
          type: 'doc',
          id: 'reference/action-config',
          label: 'Action Config',
        },
        {
          type: 'doc',
          id: 'reference/css-variables',
          label: 'CSS Variables',
        },
        {
          type: 'doc',
          id: 'reference/host-css-table-layout',
          label: 'Host CSS Table Layout',
        },
        {
          type: 'doc',
          id: 'reference/theme-api',
          label: 'Theme API',
        },
        {
          type: 'doc',
          id: 'reference/extension-api',
          label: 'Extension API',
        },
        {
          type: 'doc',
          id: 'reference/utilities',
          label: 'Utilities',
        },
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
        {
          type: 'doc',
          id: 'customization/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'extensions/renderas-customization',
          label: 'Custom renderAs',
        },
        {
          type: 'doc',
          id: 'extensions/custom-field-types',
          label: 'Custom Field Types',
        },
        {
          type: 'doc',
          id: 'guides/custom-modes',
          label: 'Custom Modes',
        },
        {
          type: 'doc',
          id: 'guides/custom-icons',
          label: 'Custom Icons',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'doc',
          id: 'guides/field-rendering-decisions',
          label: 'Field Type and RenderAs Decisions',
        },
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        {
          type: 'doc',
          id: 'changelog',
          label: 'Changelog',
        },
        {
          type: 'doc',
          id: 'release-notes/upgrading/migration-compatibility',
          label: 'Versioning and Upgrade Policy',
        },
      ],
    },
  ],
};

export default sidebars;
