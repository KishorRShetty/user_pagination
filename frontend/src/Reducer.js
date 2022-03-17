import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  page: 1, //fetch later
};

export const userReducer = createReducer(initialState, {
  nextPage: (state) => {
    state.page += 1;
  },
  prevPage: (state) => {
    state.page -= 1;
  },
  gotoPage: (state, action) => {
    state.page = action.payload;
  },
});
