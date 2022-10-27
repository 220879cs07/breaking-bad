import { createSlice } from '@reduxjs/toolkit';
import { getEpisodes } from './actions';
import { EpisodesState } from './types';

const initialState: EpisodesState = {
  episodes: [],
};

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEpisodes.pending, (state) => {
        state.episodesLoading = true;
        state.episodes = [];
      })
      .addCase(getEpisodes.fulfilled, (state, action) => {
        state.episodesLoading = false;
        state.episodes = action.payload;
      });
  },
});

export const {} = episodesSlice.actions;

export const episodesReducer = episodesSlice.reducer;
