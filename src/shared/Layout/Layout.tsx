import cn from 'app/helpers/cn';
import React, { PropsWithChildren } from 'react';
import './Layout.sass';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='layout'>
      <div className={cn('layout__content')}>
        <div className={cn('layout__container container')}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
