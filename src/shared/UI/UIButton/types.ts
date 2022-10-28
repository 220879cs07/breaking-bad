import { TooltipProps } from '@mui/material';
import { LinkProps } from 'react-router-dom';

export type IUIButtonColor = 'primary' | 'secondary' | 'white' | 'warning' | 'danger' | 'success' | 'light-gray';
export type IUIButtonSize = 'small' | 'common' | 'big';

export interface IUIButtonDefaultProps {
  text?: React.ReactNode;
  color?: IUIButtonColor;
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
  size?: IUIButtonSize;
  fluid?: boolean;
  tooltip?: Omit<TooltipProps, 'children'>;
  square?: boolean;
  count?: number;
  fitContent?: boolean;
  [key: string]: any;
}

export type IUIButtonLink = IUIButtonDefaultProps &
  LinkProps & {
    to: string;
  };

export type ICommonButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type IUIButton = IUIButtonDefaultProps & ICommonButton;

export type IUIButtonProps = IUIButtonLink | IUIButton;
