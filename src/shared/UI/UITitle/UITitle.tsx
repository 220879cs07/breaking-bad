import cn from 'app/helpers/cn';
import React from 'react';
import UIButton from '../UIButton/UIButton';
import { UITitleProps } from './types';
import './UITitle.sass';

const UITitle: React.FC<UITitleProps> = ({ title, button, className = '', children, onSubmit }) => {
  return (
    <div
      className={cn('ui-title', {
        [className]: className,
      })}
    >
      <div className='ui-title__left'>
        <div className='ui-title__title'>{title}</div>
      </div>
      <form
        className='ui-title__right'
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit && onSubmit(e);
        }}
      >
        {children}
        {button && <UIButton {...button} type={onSubmit ? 'submit' : 'button'} />}
      </form>
    </div>
  );
};

export default UITitle;
