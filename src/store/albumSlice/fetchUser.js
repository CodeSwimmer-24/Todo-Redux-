import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:8000/data");
  return response.data;
});

export { fetchUsers };

// fetchUsers.pending = 'users/fetch/pending'  ==== autoCreated
// fetchUsers.fulfilled = 'users/fetch/fulfilled'
// fetchUsers.rejected = 'users/fetch/rejected'
