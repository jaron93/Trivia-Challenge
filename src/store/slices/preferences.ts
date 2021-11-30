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
      setDifficulty: (state, { payload }: PayloadAction<any>) => {
         state.difficulty = payload;
      },
      setAmount: (state, { payload }: PayloadAction<any>) => {
         state.amount = payload;
      },
   },
});

export const { setDifficulty, setAmount } =
   preferencesSlice.actions;

export default preferencesSlice.reducer;
