import { createSlice } from '@reduxjs/toolkit';
import { getEpisodes, getEpisodeById } from './actions';
import { EpisodesState } from './types';

const initialState: EpisodesState = {
  episodes: [],
  episodesLoading: true,
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
      })
      .addCase(getEpisodeById.pending, (state) => {
        state.currentEpisodeLoading = true;
        state.currentEpisode = undefined;
      })
      .addCase(getEpisodeById.fulfilled, (state, action) => {
        state.currentEpisodeLoading = false;
        state.currentEpisode = action.payload;
      });
  },
});

export const {} = episodesSlice.actions;

export const episodesReducer = episodesSlice.reducer;
