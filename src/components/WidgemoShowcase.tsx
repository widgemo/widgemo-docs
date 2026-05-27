import React, { ReactNode } from 'react';
import { 
  Widgemo, 
  WidgemoThemeProvider, 
  WidgemoConfig
} from '@widgemo/widgemo-core';

export interface WidgemoShowcaseProps {
  config: WidgemoConfig;
  data?: Record<string, unknown>[];
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
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
  className,
}) => {
  const rootClassName = className?.trim() || undefined;

  return (
    <div className={rootClassName}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      <WidgemoThemeProvider>
        <div className="widgemo-showcase__widget">
          <Widgemo config={config} data={data} />
        </div>
      </WidgemoThemeProvider>
      {children}
    </div>
  );
};

export default WidgemoShowcase;
