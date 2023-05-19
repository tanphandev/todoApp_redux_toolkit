import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    searchText: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    addStatus: (state, action) => {
      state.status = action.payload;
    },
    addPriorities: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
export default filterSlice;
