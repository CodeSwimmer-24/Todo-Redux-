import React from "react";
import "./TodItem.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setChack } from "../features/todoSlice";
const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setChack(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};
export default TodoItem;
