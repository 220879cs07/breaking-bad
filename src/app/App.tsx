import React, { PropsWithChildren } from 'react';
import ScrollToTop from 'shared/ScrollToTop/ScrollToTop';

const App: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='main'>
      <ScrollToTop />
      {children}
    </main>
  );
};

export default App;
