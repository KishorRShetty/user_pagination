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

  //pagination bar
  const [pageNumberLimit, setpageNumberLimit] = useState(5); // 5 how many pages on the bar
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

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

    //paginator bar

    if (pg + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const prevPg = () => {
    pg <= 1 ? setPg(1) : setPg(pg - 1);

    //paginator bar
    if ((pg + 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
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
  console.log(`pages: ${pageNumbers}`);

  //pagination BAR logic
  // const lastIndex = pg * 5; //current page * users per page 1*5=5, 2*5=10
  // const firstIndex = lastIndex-5; // 5-5=0 10-5=5 => (0,5) - (5-10)
  // const currentUsers =

  useEffect(() => {
    dispatch(getUsers(pg));
    console.log(`inside useEffect` + getUsers());
  }, [dispatch, pg, edit]);

  console.log(`useEffect: state.user` + users);
  console.log(users);

  const handleClick = (e) => {
    setPg(Number(e.target.id));
  };

  const update = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.elements.email.value);
    console.log(
      `from Update before dispathch from form: id: ${id}, name: ${name}, email:${email}`
    );
    dispatch(updateSingleUser(id, name, email, Date.now()));
  };

  const renderPageNumbers = pageNumbers.map((num) => {
    if (num < maxPageNumberLimit + 1 && num > minPageNumberLimit) {
      return (
        <li
          key={num}
          id={num}
          onClick={handleClick}
          className={pg === num ? "activepage" : null}
        >
          {num}
        </li>
      );
    } else {
      return null;
    }
  });

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
                <div className="paginator">
                  <ul>
                    <li onClick={prevPg}>&lt;</li>
                    {renderPageNumbers}
                    <li onClick={nextPg}>&gt;</li>
                  </ul>
                </div>
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
        <div className="modal-content">
          <form onSubmit={update} className="modalform">
            <br />
            Name
            <br />
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            Email
            <br />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input className="close btn-green" type={"submit"} value="update" />
            <button className="close btn-red" onClick={() => setEdit(false)}>
              {/* &times; */}Close
            </button>
          </form>

          {/* {`Name: ${name} Email: ${email} Id: ${id}`} */}
        </div>
      </div>
    </>
  );
};

export default User;
