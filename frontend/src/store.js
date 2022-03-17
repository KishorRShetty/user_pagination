import { configureStore } from "@reduxjs/toolkit";
import { pageReducer, usersReducer } from "./Reducer";

const store = configureStore({
  reducer: {
    page: pageReducer,
    users: usersReducer
  },
});

export default store;
