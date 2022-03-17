import React, { useEffect, useState } from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../action";
import axios from "axios";

const User = () => {
  const [listOfUsers, setlistOfUsers] = useState([]);

  const dispatch = useDispatch();
  //users store from the store
  const { page } = useSelector((state) => state.page); //page from redux custom store
  const { error, users } = useSelector((state) => state.users); //users from redux custom store
  // const params = useParams();
  const prevPage = () => {
    dispatch({
      type: "prevPage",
    });
  };

  const nextPage = () => {
    dispatch({
      type: "nextPage",
    });
  };

  const goTo = (event) => {
    dispatch({
      type: "gotoPage",
      payload: event.target.value,
    });
  };

  // useEffect(() => {
  //   dispatch(getUsers())
  // }, [dispatch])

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/allUsers`
  //     )
  //     .then((response) => {
  //       // axios.get(`https://gorest.co.in/public/v2/posts/100/comments`).then((response)=>{
  //       setlistOfUsers(response.data);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await get(
        `https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/allUsers`
      );
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  console.log(listOfUsers);

  return (
    <div className="main">
      <table className="userTable">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Action</th>
        </tr>
        {/* logic to get the user */}

        <tr>
          <td></td>
          <td></td>
          <td colSpan={3}>
            <button onClick={prevPage}>&lt;</button>1 2 3 4
            <button onClick={nextPage}>&gt;</button>
            <select>
              <option>1</option>
            </select>
            GoTo
            <input type="number" name="pageNo" onChange={goTo} />
          </td>
        </tr>
      </table>

      <h1>Current Page {page}</h1>
      <h3>users:{users}</h3>
      <h3>usera:{listOfUsers}</h3>
    </div>
  );
};

export default User;
