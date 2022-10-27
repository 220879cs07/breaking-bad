import React, { PropsWithChildren } from 'react';
import Layout from 'shared/Layout/Layout';
import ScrollToTop from 'shared/ScrollToTop/ScrollToTop';

const App: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='main'>
      <Layout>
        <ScrollToTop />
        {children}
      </Layout>
    </main>
  );
};

export default App;
