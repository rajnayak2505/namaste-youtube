import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchData: {}
  },
  reducers: {
    cacheResults: (state, action) => {
      state.searchData = {...state.searchData,...action.payload};
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
