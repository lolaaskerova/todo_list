import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo:
    localStorage.getItem("todos") !== null
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todo.push(payload);
      return localStorage.setItem("todos", JSON.stringify(state.todo));
    },
    deleteTodo: (state, { payload }) => {
      const newTodo = state.todo.filter((to) => to.id !== payload);
      localStorage.setItem("todos", JSON.stringify(newTodo));
      window.location.reload();
    },
    completeTodo: (state, { payload }) => {
      const completedTask = state.todo.map((t) => {
        if (t.id === payload.id) {
          return { ...t, isCompleted: !t.isCompleted };
        } else {
          return t;
        }
      });
      localStorage.setItem("todos", JSON.stringify(completedTask));
      window.location.reload();
    },
    removeAll: (state) => {
      return (
        localStorage.setItem("todos", JSON.stringify([])),
        window.location.reload()
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, completeTodo, removeAll } =
  todoSlice.actions;
