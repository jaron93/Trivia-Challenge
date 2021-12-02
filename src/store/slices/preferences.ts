import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPreferences } from '../../types/types'

export const initialState: IPreferences = {
   difficulty: null,
   amount: 0,
};

const preferencesSlice = createSlice({
   name: 'preferences',
   initialState,
   reducers: {
      setDifficulty: (state, { payload }: PayloadAction<string>) => {
         state.difficulty = payload;
      },
      setAmount: (state, { payload }: PayloadAction<number>) => {
         state.amount = payload;
      },
      clearPreferencesState: () => {
         return initialState
      }
   },
});

export const { setDifficulty, setAmount, clearPreferencesState } =
   preferencesSlice.actions;

export default preferencesSlice.reducer;
