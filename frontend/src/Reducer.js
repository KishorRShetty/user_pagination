import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  page: 1, //fetch later
};

//Not using -> tetsed redux toolkit
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
  { users: [] }, //test without it. need to practice more
  {
    getAllUsersRequest: (state) => {
      state.loading = true;
      // console.log(' getAllUsersRequest reducer request');
    },
    getAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload.user;
      state.userCount = action.payload.userCount;
      state.usersPerPage = action.payload.usersPerPage;
      // console.log('getAllUsersRequest reducer success');
      // console.log(state.users);
    },
    getAllUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      // console.log('getAllUsersRequest reducer failed')
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

//Update
export const updateUserReducer = createReducer(
  {},
  {
    updateUserRequest: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.message = `Update Success`;
      // console.log(state.users);
    },
    clearErrors: (state) => {
      state.error = null;
    },updateUserFailure: (state, action) => {
      state.loading = false;
      //remove if not needed - for testing failed msg
      state.error = action.payload || 'Update Error';
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);

//register
export const registerUserReducer = createReducer(
  {},
  {
    registerUserRequest: (state) => {
      state.loading = true;
    },
    registerUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.message = `Registration done`;
      // console.log(state.users);
    },
    registerUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      // console.log('getAllUsersRequest reducer failed')
    },
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
