import React, { ReactNode } from 'react';
import { 
  Widgemo, 
  WidgemoThemeProvider, 
  WidgemoConfig,
  ContentConfig 
} from '@widgemo/widgemo-core';

export interface WidgemoShowcaseProps {
  config: WidgemoConfig;
  data?: Record<string, unknown>[];
  title?: string;
  description?: string;
  children?: ReactNode;
}

/**
 * WidgemoShowcase
 * 
 * A reusable wrapper component that displays live Widgemo instances
 * in the docs. It handles theme setup and wraps the component properly
 * for documentation contexts.
 */
export const WidgemoShowcase: React.FC<WidgemoShowcaseProps> = ({
  config,
  data = [],
  title,
  description,
  children,
}) => {
  return (
    <div style={{ marginBlock: '2rem' }}>
      {title && <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>}
      {description && <p style={{ marginBottom: '1rem', color: 'var(--ifm-color-emphasis-700)' }}>{description}</p>}
      <WidgemoThemeProvider>
        <div style={{ 
          border: '1px solid var(--ifm-color-emphasis-200)',
          borderRadius: '0.5rem',
          padding: '1rem',
          backgroundColor: 'var(--ifm-color-emphasis-0)',
        }}>
          <Widgemo config={config} data={data} />
        </div>
      </WidgemoThemeProvider>
      {children}
    </div>
  );
};

export default WidgemoShowcase;
