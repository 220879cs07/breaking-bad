import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './types';

const initialState: AppState = {};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export const appReducer = appSlice.reducer;
