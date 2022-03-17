import React from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  const {page} = useSelector(state => state.custom); //page from redux custom store
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
      payload:event.target.value,
    });
  };
  return (
    <>
      <h2>User Works</h2>
      <button onClick={nextPage}>&lt;</button>1 2 3 4
      <button onClick={prevPage}>&gt;</button>
      GoTo<input type="text" name="pageNo" onChange={goTo}/>
      <h1>Current Page {page}</h1>
    </>
  );
};

export default User;
