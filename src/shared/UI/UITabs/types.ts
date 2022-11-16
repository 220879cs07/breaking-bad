import { TabsProps } from '@mui/material';

export interface TabModel {
  tab: string;
  label: string;
  component: JSX.Element;
  notVisible?: boolean;
}

export interface UITabsProps extends TabsProps {
  replaceUrl?: boolean;
  tabs: TabModel[];
}
