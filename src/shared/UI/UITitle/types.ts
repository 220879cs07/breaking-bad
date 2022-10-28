import { ReactNode } from 'react';
import { IUIButtonProps } from '../UIButton/types';

export interface UITitleProps {
  title: string;
  button?: IUIButtonProps;
  className?: string;
  children?: ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
