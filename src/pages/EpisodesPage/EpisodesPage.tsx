import { useAppDispatch, useAppSelector } from 'app/hooks';
import { EpisodeModel } from 'app/models/EpisodesModel';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import UISelect from 'shared/UI/UISelect/UISelect';
import UITitle from 'shared/UI/UITitle/UITitle';
import WithLoading from 'shared/WithLoading/WithLoading';
import { getEpisodes } from 'store/episodes/actions';
import EpisodesCard from './components/EpisodesCard/EpisodesCard';
import './EpisodesPage.sass';

const EpisodesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { episodes, episodesLoading } = useAppSelector((state) => state.episodes);

  const [filteredEpisodes, setFilteredEpisodes] = useState<EpisodeModel[]>([]);
  const [seasonsCount, setSeasonsCount] = useState<string[]>([]);
  const [currentSeason, setCurrentSeason] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getEpisodes());
  }, []);

  useEffect(() => {
    if (!episodes.length) return setSeasonsCount([]);

    const uniqueEpisodesBySeason = _.unionBy(episodes, (i) => i.season.trim()).map((i) => i.season);
    setSeasonsCount(uniqueEpisodesBySeason);
    setCurrentSeason(uniqueEpisodesBySeason[0]);
  }, [episodes]);

  useEffect(() => {
    setFilteredEpisodes(episodes.filter((episode) => episode.season.trim() === currentSeason));
  }, [currentSeason, episodes]);

  return (
    <div className='episodes-page'>
      <UITitle title='Episodes'>
        {!episodesLoading && !!seasonsCount.length && (
          <UISelect
            defaultValue={seasonsCount[0]}
            options={seasonsCount}
            onChange={(_, value) => setCurrentSeason(value)}
            disableClearable
            disableSearch
          />
        )}
      </UITitle>
      <WithLoading loading={episodesLoading}>
        <div className='episodes-page__list'>
          {!!filteredEpisodes.length &&
            filteredEpisodes.map((episode) => (
              <EpisodesCard episode={episode} className='episodes-page__list-card' key={episode.episode_id} />
            ))}
        </div>
      </WithLoading>
    </div>
  );
};

export default EpisodesPage;
