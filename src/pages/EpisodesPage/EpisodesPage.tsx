import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import WithLoading from 'shared/WithLoading/WithLoading';
import { getEpisodes } from 'store/episodes/actions';
import EpisodesCard from './components/EpisodesCard/EpisodesCard';
import './EpisodesPage.sass';

const EpisodesPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { episodes, episodesLoading } = useAppSelector((state) => state.episodes);

  useEffect(() => {
    dispatch(getEpisodes());
  }, []);

  return (
    <div className='episodes-page'>
      <h2 className='episodes-page__title'>Episodes</h2>
      <WithLoading loading={episodesLoading}>
        <div className='episodes-page__list'>
          {episodes.map((episode) => (
            <EpisodesCard episode={episode} className='episodes-page__list-card' key={episode.episode_id} />
          ))}
        </div>
      </WithLoading>
    </div>
  );
};

export default EpisodesPage;
