import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import api from '../../utils/Api';

import { IfetchQuestions, IGameState, IResult } from '../../types/types'


export const fetchQuestions = createAsyncThunk(
   'game/questions',
   async ({ difficulty, amount }: IfetchQuestions, thunkAPI) => {
      try {
         const params = {
            amount: amount,
            difficulty: difficulty,
            type: "boolean"
         }
         const response = await api.get('api.php', { params })

         const data = await response.data.results;

         if (response.status === 200) {
            return [...data];
         } else {
            return thunkAPI.rejectWithValue(data);
         }

      } catch (error: any) {
         console.log('Error', error.response.data);
         return thunkAPI.rejectWithValue(error.response.data);
      }
   });

export const initialState: IGameState = {
   questions: [],
   result: [],
   status: "idle",
   error: null,
};

export const gameSlice = createSlice({
   name: 'game',
   initialState,
   reducers: {
      setResult: (state, { payload }: PayloadAction<IResult[]>) => {
         state.result = payload
      },
      clearGameState: () => {
         return initialState
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchQuestions.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchQuestions.fulfilled, (state, { payload }: PayloadAction<any>) => {
            state.status = "succeeded";
            state.error = null;
            state.questions = payload

         })
         .addCase(fetchQuestions.rejected, (state) => {
            state.status = "failed";
            state.error = "Server is currently unavaible."
         })
   }
});


export default gameSlice.reducer;

export const { setResult, clearGameState } = gameSlice.actions;