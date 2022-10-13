import App from 'App';
import React from 'react';
import history from './history';
import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

// Pages
import MainPage from 'pages/MainPage';

const AppRoutes: React.FC = () => {
  return (
    <HistoryRouter history={history}>
      <App>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </App>
    </HistoryRouter>
  );
};

export default AppRoutes;
