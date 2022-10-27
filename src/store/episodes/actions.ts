import { createAsyncThunk } from '@reduxjs/toolkit';
import { episodesService } from 'api';
import { GetEpisodesParams } from 'api/episodes/types';
import { RootState } from 'store/store';
import { EpisodesState } from './types';

export const getEpisodes = createAsyncThunk('episodes/getEpisodes', async (payload: { params?: GetEpisodesParams; force?: boolean } | undefined, ThunkApi) => {
  const { episodes } = (ThunkApi.getState() as RootState).episodes as EpisodesState;
  if (episodes?.length && !payload?.force) return episodes;

  return await episodesService.getEpisodes(payload?.params).then(({ data }) => data);
});
