import React from 'react';
import '@widgemo/widgemo-core/style.css';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({children}: RootProps): React.ReactElement {
  return <>{children}</>;
}