import { configureStore } from "@reduxjs/toolkit";
import { pageReducer, updateUserReducer, usersReducer } from "./Reducer";

const store = configureStore({
  reducer: {
    page: pageReducer,
    usersState: usersReducer,
    updateUserState: updateUserReducer,
  },
});

export default store;
