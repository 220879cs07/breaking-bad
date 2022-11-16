import instance from 'api/instance';
import { GetCharacters } from './types';

export const getCharacters: GetCharacters = () => {
  return instance.get('/characters');
};
