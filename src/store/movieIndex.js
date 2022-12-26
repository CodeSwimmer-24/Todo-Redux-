import { configureStore, createAction } from "@reduxjs/toolkit";
import { addMovies, removeMovies, movieReducer } from "./slices/movieSlice";
import { addSongs, removeSong, songReducer } from "./slices/songSlice";

export const reset = createAction("app/reset");

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer,
  },
});

// store.dispatch(
//   type: "song/addSongs",
//   payload: "New songs",
//   songSlice.actions.addSongs("Payload change here")
// );

// const finalState = store.getState();
// console.log(finalState);

export { store };

export { addMovies, removeMovies, addSongs, removeSong };
