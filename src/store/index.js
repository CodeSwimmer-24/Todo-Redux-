import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./albumSlice/albumSlice";

// Redux-toolkit queries
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./api/albumApi";

const store = configureStore({
  reducer: {
    user: userReducer,
    albums: albumsApi.reducer,
    // [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export * from "./albumSlice/fetchUser";
export * from "./albumSlice/postUser";
export * from "./albumSlice/deleteUser";
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./api/albumApi";
