import { CharacterModel } from 'app/models/CharacterModel';

export interface CharactersState {
  characters: CharacterModel[];
  charactersLoading: boolean;
}
