import { combineReducers, configureStore } from '@reduxjs/toolkit'
import preferencesReducer from './slices/preferences';
import gameReducer from './slices/game';

export const rootReducer = combineReducers({
   preferences: preferencesReducer,
   game: gameReducer,
});

export const store = configureStore({
   reducer: rootReducer
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
