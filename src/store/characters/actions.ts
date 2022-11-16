import { createAsyncThunk } from '@reduxjs/toolkit';
import { charactersService } from 'api';
import { GetCharactersParams } from 'api/characters/types';
import { RootState } from 'store/store';
import { CharactersState } from './types';

export const getCharacters = createAsyncThunk(
  'characters/getCharacters',
  async (payload: { params?: GetCharactersParams; force?: boolean } | undefined, ThunkApi) => {
    const { characters } = (ThunkApi.getState() as RootState).characters as CharactersState;
    if (characters?.length && !payload?.force) return characters;

    return await charactersService.getCharacters(payload?.params).then(({ data }) => data);
  }
);
