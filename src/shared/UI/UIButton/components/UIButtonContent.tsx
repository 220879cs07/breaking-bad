import { CircularProgress } from '@mui/material';
import React from 'react';
import { IUIButtonDefaultProps } from '../types';
import '../UIButton.sass';

const UIButtonContent: React.FC<IUIButtonDefaultProps> = ({ text, loading }) => {
  const render = () => {
    return (
      <>
        {text && <span className='ui-button__text'>{text}</span>}
        {loading && (
          <div className='ui-button__loader-container'>
            <CircularProgress className='ui-button__loader' value={50} />
          </div>
        )}
      </>
    );
  };
  return render();
};

export default UIButtonContent;
