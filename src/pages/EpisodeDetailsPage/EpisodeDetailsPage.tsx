import { formatDate } from 'app/helpers/formatDate';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from 'shared/BackButton/BackButton';
import SingleDetail from 'shared/SingleDetail/SingleDetail';
import WithLoading from 'shared/WithLoading/WithLoading';
import { getEpisodeById } from 'store/episodes/actions';
import './EpisodeDetailsPage.sass';

interface Props {}

const EpisodeDetailsPage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const { currentEpisode, currentEpisodeLoading } = useAppSelector((state) => state.episodes);

  useEffect(() => {
    if (!id) return;

    dispatch(getEpisodeById(+id));
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
        </div>
      )}
    </WithLoading>
  );
};

export default EpisodeDetailsPage;
