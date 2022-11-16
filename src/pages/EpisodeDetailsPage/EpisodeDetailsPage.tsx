import { formatDate } from 'app/helpers/formatDate';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from 'shared/BackButton/BackButton';
import SingleDetail from 'shared/SingleDetail/SingleDetail';
import UITabs from 'shared/UI/UITabs/UITabs';
import WithLoading from 'shared/WithLoading/WithLoading';
import { getEpisodeById } from 'store/episodes/actions';
import Characters from './components/Characters/Characters';
import Deaths from './components/Deaths/Deaths';
import './EpisodeDetailsPage.sass';

interface Props {}

const EpisodeDetailsPage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const { currentEpisode, currentEpisodeLoading } = useAppSelector((state) => state.episodes);

  useEffect(() => {
    if (id) dispatch(getEpisodeById(+id));
  }, [id]);

  return (
    <WithLoading loading={currentEpisodeLoading}>
      {currentEpisode && (
        <div className='episode-details'>
          <BackButton label={`View Company's Details`} />
          <div className='episode-details__wrapper'>
            <SingleDetail title='Name' label={`${currentEpisode.title}`} />
            {currentEpisode?.air_date && <SingleDetail title='Air Date' label={formatDate({ date: currentEpisode.air_date })} />}
            <SingleDetail title='Episode' label={`${currentEpisode.episode}`} />
            <SingleDetail title='Season' label={`${currentEpisode.season}`} />
          </div>
          <UITabs
            className='episode-details__tabs'
            tabs={[
              { label: 'Characters', tab: 'characters', component: <Characters /> },
              { label: 'Deaths', tab: 'deaths', component: <Deaths /> },
            ]}
          />
        </div>
      )}
    </WithLoading>
  );
};

export default EpisodeDetailsPage;
