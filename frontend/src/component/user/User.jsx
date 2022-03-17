import React, { useEffect, useState } from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../action";
import axios from "axios";

const User = () => {
  const [usersBE, setUsersBE] = useState([]);
  const [id, setId] = useState('NA');

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

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/allUsers`
      );
      // console.log(request);
      setUsersBE(request.data.user);
      return request;
    }
    fetchData();
  }, []);

  console.log(usersBE);

  return (
    <div className="main">
      {/* <table className="userTable">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Action</th>
        </tr>
        
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
      <h3>usera:{usersBE}</h3>
      <ul>
        {usersBE.map(usr=>(
          <li key={usr.id}>{usr.name}</li>
        ))}
      </ul>
      <hr/> */}

      <table className="userTable">
        <tr>
          <td>Name</td>
          <td>email</td>
          <td>createdAt</td>
          <td>updatedAt</td>
          <td>options</td>
        </tr>
        {usersBE.map((usr) => (
          <tr>
            <td key={usr._id}>{usr.name}</td>
            <td key={usr._id}>{usr.email}</td>
            <td key={usr._id}>{usr.createdAt}</td>
            <td key={usr._id}>{usr.updatedAt}</td>
            <td>
              <button onClick={() => setId(usr._id)}>view</button>
            </td>
          </tr>
        ))}
      </table>
      <p>{id}</p>
    </div>
  );
};

export default User;
