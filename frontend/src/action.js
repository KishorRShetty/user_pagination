import axios from "axios";

export const getUsers = async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" }); //request
    const { data } = await axios.get("/api/v1/allUsers");
    dispatch({
      type: "getAllUsersSuccess",
      payload,
    });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailure",
      payload: error.response.data.message,
    });
  }
};
