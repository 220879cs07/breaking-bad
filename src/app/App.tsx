import React, { PropsWithChildren, useEffect } from 'react';
import Layout from 'shared/Layout/Layout';
import ScrollToTop from 'shared/ScrollToTop/ScrollToTop';
import { getCharacters } from 'store/characters/actions';
import { useAppDispatch } from './hooks';

const App: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

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
