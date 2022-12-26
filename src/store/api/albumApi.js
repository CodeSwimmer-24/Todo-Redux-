import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const albumApi = createApi({
  reducerPath: "album",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints(builder) {
    return {
      fetchAlbum: builder.query({
        query: (user) => {
          return {
            url: "/album",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});
