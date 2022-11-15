import { Card, CardContent, Chip } from '@mui/material';
import cn from 'app/helpers/cn';
import { formatDate } from 'app/helpers/formatDate';
import { EpisodeModel } from 'app/models/EpisodesModel';
import React from 'react';
import { Link } from 'react-router-dom';
import './EpisodesCard.sass';

interface Props {
  episode: EpisodeModel;
  className?: string;
}

const EpisodesCard: React.FC<Props> = ({ episode, className }) => (
  <div className='episode-card'>
    <Chip className='episode-card__label' label={episode.series} color='success' />
    <h3 className='episode-card__title'>{episode.title}</h3>
    <span className='episode-card__date'>{formatDate({ date: episode.air_date })}</span>
    <div className='episode-card__characters'>
      <span className='episode-card__characters-title'>Characters:</span> {episode.characters.join(', ')}
    </div>

    <div className='episode-card__footer'>
      <Link to={`/episodes/${episode.episode_id}`} className='episode-card__more'>
        More details
      </Link>
    </div>
  </div>
);

export default EpisodesCard;
