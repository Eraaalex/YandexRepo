 import {combineReducers, configureStore} from "@reduxjs/toolkit"
 import {genreSlice} from "./books";
 export const store = configureStore({
  reducer: combineReducers({
    genre: genreSlice.reducer,
  })
 });
