import React from 'react';
import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import App from '../App';
import history from './history';

// Pages
import EpisodesPage from 'pages/EpisodesPage/EpisodesPage';
import EpisodeDetailsPage from 'pages/EpisodeDetailsPage/EpisodeDetailsPage';

const AppRoutes: React.FC = () => {
  return (
    <HistoryRouter history={history}>
      <App>
        <Routes>
          <Route path='/' element={<EpisodesPage />} />
          <Route path='/episodes/:id' element={<EpisodeDetailsPage />} />
        </Routes>
      </App>
    </HistoryRouter>
  );
};

export default AppRoutes;
