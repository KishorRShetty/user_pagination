import { configureStore } from "@reduxjs/toolkit";
import { pageReducer, singleUserReducer, usersReducer } from "./Reducer";

const store = configureStore({
  reducer: {
    page: pageReducer,
    usersState: usersReducer,
    singleUserState: singleUserReducer,
  },
});

export default store;
