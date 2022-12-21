import { createSlice } from "@reduxjs/toolkit";

const initialState = { first: 0, second: 0 };

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    showData: (state, action) => {
      const { first, second } = action.payload;
      state.first = first;
      state.second = second;
    },
  },
});
console.log(showSlice);
export const { showData } = showSlice.actions;

export default showSlice.reducer;
