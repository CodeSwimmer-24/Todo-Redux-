import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../../store";

const useThunk = (thunk) => {
  const dispatch = useDispatch();
  const [loadingUser, setLoadingUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [postUserLoading, setPostUserLoading] = useState(false);

  const runThunk = useCallback(() => {
    setPostUserLoading(true);
    dispatch(thunk())
      .unwrap()
      .then(() => {
        setPostUserLoading(false);
      })
      .catch((err) => {
        setPostUserLoading(false);
        setErrorMessage(err);
      });
  }, [dispatch, thunk]);

  return [runThunk, postUserLoading, loadingUser, errorMessage];
};

export default useThunk;
