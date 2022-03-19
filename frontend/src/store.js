import { configureStore } from "@reduxjs/toolkit";
import { pageReducer, registerUserReducer, updateUserReducer, usersReducer } from "./Reducer";

const store = configureStore({
  reducer: {
    page: pageReducer,
    usersState: usersReducer,
    updateUserState: updateUserReducer,
    registerUserState: registerUserReducer,
  },
});

export default store;
