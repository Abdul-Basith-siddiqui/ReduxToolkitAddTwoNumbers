import { configureStore } from "@reduxjs/toolkit";
import showData from "../features/showSlice";

const store = configureStore({
  reducer: {
    show: showData,
  },
});

export default store;
