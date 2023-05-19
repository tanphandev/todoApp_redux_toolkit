import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn Redux", priority: "High", completed: false },
    { id: 2, name: "Learn JavaScript", priority: "Medium", completed: true },
    { id: 3, name: "Learn HTML", priority: "Low", completed: true },
    { id: 4, name: "Learn Java", priority: "High", completed: false },
  ],
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default todoListSlice;
