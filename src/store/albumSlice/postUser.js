import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postUser = createAsyncThunk("users/post", async () => {
  const response = await axios.post("http://localhost:8000/data", {
    name: faker.name.fullName(),
  });
  return response.data;
});

export { postUser };
