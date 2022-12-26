import React from "react";
import { useFetchAlbumsQuery } from "../../../store";

function AlbumList({ user }) {
  const data = useFetchAlbumsQuery(user);
  console.log(data);
  //   console.log(data, error, isLoading);
  return <div>Album For {user.name}</div>;
}

export default AlbumList;
