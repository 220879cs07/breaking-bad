import React from 'react';

interface TabPanelProps<T> {
  children?: React.ReactNode;
  value: T;
  activeValue: T;
}

function TabPanel<T>({ children, value, activeValue, ...rest }: TabPanelProps<T>) {
  return (
    <div role='tabpanel' hidden={value !== activeValue} id={`tab-panel-${value}`} aria-labelledby={`tab-${value}`} {...rest}>
      {children}
    </div>
  );
}

export default TabPanel;
