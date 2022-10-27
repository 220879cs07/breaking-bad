import { CircularProgress, CircularProgressProps } from '@mui/material';
import React from 'react';
import './WithLoading.sass';

interface Props extends CircularProgressProps {
  loading: boolean;
  children: React.ReactNode;
}

const WithLoading: React.FC<Props> = ({ loading, children, ...rest }) => {
  if (loading) {
    return (
      <div className='loader__container'>
        <CircularProgress {...rest} />
      </div>
    );
  }

  return <>{children}</>;
};

export default WithLoading;
