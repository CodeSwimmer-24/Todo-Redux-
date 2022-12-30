import React from "react";
import { useFetchAlbumsQuery } from "../../../store";
import ExportPannel from "./ExpandedPannel";

function AlbumList({ user }) {
  const { isLoading, error, data } = useFetchAlbumsQuery(user);
  console.log(data);

  const handleClick = () => {};
  //   console.log(data, error, isLoading);

  let content;
  if (isLoading) {
    content = <h3>Loading...</h3>;
  } else if (error) {
    content = <h3>Error</h3>;
  } else {
    content = data.map((title) => {
      const header = <div>{title.title}</div>;
      return <ExportPannel header={header}>List of Photo</ExportPannel>;
    });
  }
  return (
    <div>
      Album For <button onClick={handleClick}>Add Album</button> {user.name}
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
