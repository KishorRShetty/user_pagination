import React, { useEffect, useState } from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateSingleUser } from "../../action";

const User = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false); //editmodal
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pg, setPg] = useState(1);

  //users store from the store
  const { error, users, userCount, usersPerPage } = useSelector(
    (state) => state.usersState
  ); //users from redux custom store
  // const params = useParams();
  const uCount = Math.ceil(userCount / 5);

  // const uCount = userCount / 5;
  const nextPg = () => {
    // setPg(pg + 1);
    pg >= uCount ? setPg(uCount) : setPg(pg + 1);
  };

  const prevPg = () => {
    pg <= 1 ? setPg(1) : setPg(pg - 1);
  };

  const gotoPage = (e) => {
    if (e.target.value > uCount || e.target.value < 1) return false;
    console.log(e.target.value);
    setPg(e.target.value);
  };

  // for pages
  const pageNumbers = [];
  for (let i = 1; i <= uCount; i++) {
    pageNumbers.push(i);
  }
  console.log(`pagge: ${pageNumbers}`);

  useEffect(() => {
    dispatch(getUsers(pg));
    console.log(`inside useEffect` + getUsers());
  }, [dispatch, pg, edit]);

  console.log(`useEffect: state.user` + users);
  console.log(users);

  const update = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.elements.email.value);
    console.log(
      `from Update before dispathch from form: id: ${id}, name: ${name}, email:${email}`
    );
    dispatch(updateSingleUser(id, name, email, Date.now()));
  };
  return (
    <>
      <div className="main">
        <table className="userTable">
          <tbody>
            <tr className="heading">
              <td style={{ width: "25%" }}>Name</td>
              <td style={{ width: "20%" }}>email</td>
              <td>createdAt</td>
              <td>updatedAt</td>
              <td>options</td>
            </tr>
            {users.map((usr) => (
              <tr key={usr._id}>
                <td>
                  <span className="uicon">{usr.name[0]}</span>&nbsp;{usr.name}
                </td>
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
              <td>All Users: {userCount}</td>
              <td>
                {pg > 1 ? 5 * (pg - 1) : 1} to{" "}
                {pg * 5 > userCount ? userCount : pg * 5} of {userCount}
              </td>
              <td>
                {/* <button onClick={prevPage}>&lt;</button>1 2 3 4 */}
                <button className="btn-pn" onClick={prevPg}>
                  &lt;
                </button>
                {/* <button onClick={nextPage}>&gt;</button> */}
                {/* &nbsp;Page {pg} of {uCount}&nbsp; */}
                <button className="btn-pn" onClick={nextPg}>
                  &gt;
                </button>
              </td>
              <td>
                <select onChange={gotoPage}>
                  {pageNumbers.map((num) => (
                    <option key={num}>{num}</option>
                  ))}
                </select>
                &nbsp; GoTo &nbsp;
                <input
                  type="Number"
                  min={1}
                  max={uCount}
                  onBlur={gotoPage}
                  name="pageNo"
                />
              </td>
              <td>
                <span style={{ fontSize: "small" }}>
                  &nbsp;Page {pg}/{uCount}&nbsp;
                </span>
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
