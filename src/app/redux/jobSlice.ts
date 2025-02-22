import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [] as string[],
};

export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addFilterWord: (state, action) => {
      state.value.push(action.payload);
    },
    removeFilterWord: (state, action) => {
      state.value = state.value.filter((word) => word !== action.payload);
    },
    resetFilters: (state) => {
      state.value = [];
    },
  },
});

export const { addFilterWord, removeFilterWord, resetFilters } =
  jobSlice.actions;
export default jobSlice.reducer;
