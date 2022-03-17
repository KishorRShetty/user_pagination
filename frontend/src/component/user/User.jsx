import React from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  //users store from the store
  const { page } = useSelector((state) => state.users); //page from redux custom store
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
            <button onClick={nextPage}>&lt;</button>1 2 3 4
            <button onClick={prevPage}>&gt;</button>
            <select>
              <option>1</option>
            </select>
            GoTo
            <input type="number" name="pageNo" onChange={goTo} />
          </td>
        </tr>
      </table>

      <h1>Current Page {page}</h1>
    </div>
  );
};

export default User;
