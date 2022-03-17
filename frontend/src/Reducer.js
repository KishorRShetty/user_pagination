import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  page: 1, //fetch later
};

export const pageReducer = createReducer(initialState, {
  nextPage: (state) => {
    state.page += 1;
  },
  prevPage: (state) => {
    state.page <= 1 ? (state.page = 1) : (state.page -= 1);
  },
  gotoPage: (state, action) => {
    // state.page <=1 ? state.page : Number(action.payload);

    if (Number(action.payload) <= 0) {
      state.page = 1;
    }
    state.page = Number(action.payload);
  },
  // getAllUsersRequest: (state, action) => {},
  // errorFetching: (state, action) => {},

  clearErrors: (state) => {
    state.error = null;
  },
});

export const usersReducer = createReducer(
  {},
  {
    getAllUsersRequest: (state) => {
      state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);
