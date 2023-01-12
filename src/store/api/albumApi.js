import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
const albumsApi = createApi({
  // reducerPath: "albums",
  reducerPath: (user) => {
    return [{ type: "Album", id: user.id }];
  },
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints(builder) {
    return {
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => ({
          url: `/albums/${album.id}`,
          method: "DELETE",
        }),
      }),
      addAlbum: builder.mutation({
        invalidatesTags: ["Album"],
        query: (user) => ({
          url: "/albums",
          method: "POST",
          body: {
            userId: user.id,
            title: faker.commerce.productName(),
          },
        }),
      }),
      fetchAlbums: builder.query({
        // providesTags: ["Album"],
        providesTags: (result, error, user) => {
          // return [{ type: "Album", id: user.id }];
          const tags = result.map((album) => {
            return { type: "Album", id: album.id };
          });
          tags.push({ type: "Album", id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: "/albums",
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

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };

// Qyery for get methods
// M for post methods
