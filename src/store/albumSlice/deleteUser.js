import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUsers = createAsyncThunk("users/delete", async (user) => {
  await axios.delete(`http://localhost:8000/data/${user.id}`);
  return user;
});

export { removeUsers };