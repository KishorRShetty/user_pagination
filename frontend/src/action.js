import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" }); //request
    console.log("dispatched");
    const { data } = await axios.get(
      `https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/allUsers`
    );
    dispatch({
      type: "getAllUsersSuccess",
      payload: data,
      // payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailure",
      payload: error.response.data.message,
    });
  }
};

// export const prevPage = () => {
//     dispatch({
//       type: "prevPage",
//     });
//   };

//   export const nextPage = () => {
//     dispatch({
//       type: "nextPage",
//     });
//   };

//   export const goTo = (event) => {
//     dispatch({
//       type: "gotoPage",
//       payload: event.target.value,
//     });
//   };
