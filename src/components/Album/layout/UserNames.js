import React from "react";
import { useDispatch } from "react-redux";
import { removeUsers } from "../../../store";
import AlbumList from "../components/AlbumList";
import ExportPannel from "../components/ExpandedPannel";
import useThunk from "../custom/thunk";

function UserNames({ user }) {
  const dispatch = useDispatch();

  const handleDeleteUser = () => {
    dispatch(removeUsers(user));
  };

  const header = (
    <>
      <div style={{ display: "flex", margin: "20px" }}>
        <p
          style={{
            marginLeft: "5px",
            backgroundColor: "black",
            cursor: "pointer",
            borderRadius: "50px",
            color: "white",
            width: "25px",
            height: "25px",
            textAlign: "center",
          }}
          onClick={handleDeleteUser}
        >
          x
        </p>
        <h3 style={{ paddingLeft: "20px" }}>{user.name}</h3>
      </div>
    </>
  );
  return (
    <ExportPannel header={header}>
      <AlbumList user={user} />
    </ExportPannel>
  );
}

export default UserNames;
