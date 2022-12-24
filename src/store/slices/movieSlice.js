import { createAction, createSlice } from "@reduxjs/toolkit";

const reset = createAction("app/reset");

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovies(state, action) {
      state.push(action.payload);
    },
    removeMovies(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const movieReducer = movieSlice.reducer;

export const { addMovies, removeMovies } = movieSlice.actions;
