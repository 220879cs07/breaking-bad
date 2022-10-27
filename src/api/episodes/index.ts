import instance from 'api/instance';
import { GetEpisodeById, GetEpisodes } from './types';

export const getEpisodes: GetEpisodes = () => {
  return instance.get('/episodes');
};

export const getEpisodeById: GetEpisodeById = (id: number) => {
  return instance.get(`/episodes/${id}`);
};
