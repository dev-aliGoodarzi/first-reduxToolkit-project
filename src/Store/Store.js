import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
