//rxslice (shortcut)

import { createSlice } from "@reduxjs/toolkit";

// const [todoList , setTodoList] = useState([]);
const initialState = {
  //This thing is axcetely the same thing as const
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setChack: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

// export const {} = todoSlice.actions;
export const { saveTodo, setChack } = todoSlice.actions;
export default todoSlice.reducer;
export const selectTodoList = (state) => state.todos.todoList;
