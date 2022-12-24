import { createAction, createSlice } from "@reduxjs/toolkit";

const reset = createAction("app/reset");

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSongs(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
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

export const songReducer = songSlice.reducer;
export const { addSongs, removeSong } = songSlice.actions;
