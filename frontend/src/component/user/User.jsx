import React, { useEffect, useState } from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateSingleUser } from "../../action";
import axios from "axios";

const User = () => {
  const dispatch = useDispatch();

  const [usersBE, setUsersBE] = useState([]);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false); //editmodal
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pg, setPg] = useState(1);

  // const uCount = userCount / 5;

  const nextPg = () => {
    // setPg(pg + 1);
    pg >= uCount ? setPg(uCount) : setPg(pg + 1);
  };
  // let a = [];
  //   for (let index = 1; index <= (userCount/5); index++) {
  //     a.push(index)
  //   }
  // alert(a);

  const prevPg = () => {
    pg <= 1 ? setPg(1) : setPg(pg - 1);
  };

  //users store from the store
  const { page } = useSelector((state) => state.page); //page from redux custom store
  const { error, users, userCount, usersPerPage } = useSelector(
    (state) => state.usersState
  ); //users from redux custom store
  // const params = useParams();
  const uCount = Math.floor(userCount / 5);

  useEffect(() => {
    dispatch(getUsers(pg));
    console.log(`inside useEffect` + getUsers());
  }, [dispatch, pg, edit]);

  console.log(`userBE ` + usersBE);
  console.log(`useEffect: state.user` + users);
  console.log(users);

  const update = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.elements.email.value);
    dispatch(updateSingleUser(id, name, email, Date.now()));
    console.log(`from Update FE: id: ${id}, name: ${name}, email:${email}`);
    dispatch({ type: "getAllUsersRequest" });
  };

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
  //   async function fetchData() {
  //     const request = await axios.get(
  //       `https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/allUsers`
  //     );
  //     // console.log(request);
  //     setUsersBE(request.data.user);
  //     return request;
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
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
          <tbody>
            <tr className="heading">
              <td style={{ width: "20%" }}>Name</td>
              <td style={{ width: "20%" }}>email</td>
              <td>createdAt</td>
              <td>updatedAt</td>
              <td>options</td>
            </tr>
            {users.map((usr) => (
              <tr key={usr._id}>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr.createdAt}</td>
                <td>{usr.updatedAt}</td>
                <td>
                  <button
                    onClick={() => {
                      setId(usr._id);
                      setEdit(true);
                      setName(usr.name);
                      setEmail(usr.email);
                    }}
                    className="btn"
                  >
                    view
                  </button>
                </td>
              </tr>
            ))}
            <tr className="last-row">
              <td>{/* {page} */}</td>
              <td>Total Users: {userCount}</td>
              <td colSpan={3}>
                {/* <button onClick={prevPage}>&lt;</button>1 2 3 4 */}
                <button className="btn-pn" onClick={prevPg}>
                  &lt;
                </button>
                {/* <button onClick={nextPage}>&gt;</button> */}
                &nbsp;Page: {pg}&nbsp;
                <button className="btn-pn" onClick={nextPg}>
                  &gt;
                </button>
                &nbsp;<select>{/* <option>1</option> */}</select>&nbsp; GoTo
                &nbsp;
                <input type="number" min={1} name="pageNo" onChange={goTo} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={edit ? "visible modal" : "hidden modal"}>
        {/* Test modal <p>{id}</p> */}
        <div className="modal-content">
          <form onSubmit={update}>
            <br />
            Name:{" "}
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            Email:{" "}
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input className="close" type={"submit"} value="update" />
            <span className="close" onClick={() => setEdit(false)}>
            {/* &times; */}Close
          </span>
          </form>

          {/* {`Name: ${name} Email: ${email} Id: ${id}`} */}
        </div>
      </div>
    </>
  );
};

export default User;
