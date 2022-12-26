import { createSlice } from "@reduxjs/toolkit";
import { removeUsers } from "./deleteUser";
import { fetchUsers } from "./fetchUser";
import { postUser } from "./postUser";

const users = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(postUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(removeUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      //   state.data = state.data.filter((user) => {
      //     return user.id !== action.payload;
      //   });
      console.log(action.payload);
    });
  },
});

export const userReducer = users.reducer;
