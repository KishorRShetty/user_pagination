import axios from "axios";

const backendUrl = `https://4990-bahejav-serversidedpagi-iur7bxv8tcq.ws-us38.gitpod.io/api/v1`;

export const getUsers = (page) => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" }); //request
    // console.log(" get All users dispatched");
    const { data } = await axios.get(
      `${backendUrl}/allUsers?page=${page}`
    );
    dispatch({
      type: "getAllUsersSuccess",
      payload: data,
      // payload: data.user,
    });
    // alert('users data retrieved');
  } catch (error) {
    dispatch({
      type: "getAllUsersFailure",
      payload: error.response.data.message,
    });
  }
};

export const updateSingleUser =
  (user_id, name, email, updatedAt) => async (dispatch) => {
    try {
      dispatch({ type: "updateUserRequest" });
      // console.log(`dispatched update with ${user_id}`);
      // console.log(`data in action: ${user_id} ${name} ${email} ${updatedAt}`);
      const { data } = await axios.put(
        `${backendUrl}/user/${user_id}`,
        { name, email, updatedAt },
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch({
        type: "updateUserSuccess",
        payload: data.user,
        // payload: data.user,
      });
      // alert('update success');
    } catch (error) {
      dispatch({
        type: "updateUserFailure",
        payload: error.response.data.message,
      });
      // console.log(error);
      // alert('update failed');
    }
  };

export const registerSingleUser = (name, email) => async (dispatch) => {
  try {
    dispatch({ type: "registerUserRequest" });
    // console.log(`dispatched register with name: ${name}, email: ${email}`);
    const { data } = await axios.post(
      `${backendUrl}/register`,
      { name, email },
      { headers: { "Content-Type": "application/json" } }
    );
    // console.log(data);
    dispatch({
      type: "registerUserSuccess",
      payload: data.user,
      // payload: data.user,
    });
    
  } catch (error) {
    // console.log(error);
    dispatch({
      type: "registerUserFailure",
      payload: error.response.data.message,
    });
    
  }
};
