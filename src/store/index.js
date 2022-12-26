import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./albumSlice/albumSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store };
export * from "./albumSlice/fetchUser";
export * from "./albumSlice/postUser";
export * from "./albumSlice/deleteUser";
