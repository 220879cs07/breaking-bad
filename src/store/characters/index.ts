import { createSlice } from '@reduxjs/toolkit';
import { getCharacters } from './actions';
import { CharactersState } from './types';

const initialState: CharactersState = {
  characters: [],
  charactersLoading: true,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.charactersLoading = true;
        state.characters = [];
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.charactersLoading = false;
        state.characters = action.payload;
      });
  },
});

export const {} = charactersSlice.actions;

export const charactersReducer = charactersSlice.reducer;
