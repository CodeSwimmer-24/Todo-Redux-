import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, postUser, removeUsers } from "../../../store";
import Button from "../components/Button";
import useThunk from "../custom/thunk";
import UserNames from "./UserNames";

function UserList() {
  const [doCreateUser, postUserLoading] = useThunk(postUser);

  const [doFetchUser, loadingUser, errorMessage] = useThunk(fetchUsers);

  useEffect(() => {
    doFetchUser();
  }, [doFetchUser]);

  const { data } = useSelector((state) => {
    return state.user;
  });

  if (loadingUser === true) {
    return <div>Loading...</div>;
  }
  if (errorMessage) {
    return <div>error</div>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    doCreateUser();
  };

  const renderUser = data.map((user) => {
    return <UserNames user={user} />;
  });

  return (
    <div>
      {postUserLoading ? (
        <button>Loading...</button>
      ) : (
        <button onClick={handleClick}>Add User</button>
      )}
      {renderUser}
    </div>
  );
}

export default UserList;
