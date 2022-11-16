import { CharacterModel } from 'app/models/CharacterModel';
import { AxiosPromise } from 'axios';

export interface GetCharactersParams {
  category: string;
  limit: number;
  offset: number;
  name: string;
}

export interface GetCharacters {
  (params?: GetCharactersParams): AxiosPromise<CharacterModel[]>;
}
