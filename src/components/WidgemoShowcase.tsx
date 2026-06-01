import React, { ReactNode } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
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
  const { colorMode } = useColorMode();
  const rootClassName = className?.trim() || undefined;
  const widgemoTheme = colorMode === 'dark' ? 'dark' : 'light';
  const showcaseConfig: WidgemoConfig = {
    ...config,
    devMode: {
      enabled: true,
      allowInProduction: true,
    },
  };

  return (
    <div className={rootClassName}>
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      <WidgemoThemeProvider theme={widgemoTheme}>
        <div className="widgemo-showcase__widget">
          <Widgemo config={showcaseConfig} data={data} />
        </div>
      </WidgemoThemeProvider>
      {children}
    </div>
  );
};

export default WidgemoShowcase;
