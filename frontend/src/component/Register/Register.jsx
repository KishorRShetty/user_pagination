import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { registerSingleUser, reg } from "../../action";

function Register() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [errorState, setErrorState] = useState();

  const { message, error } = useSelector((state) => state.registerUserState);
  // setErrorState(alerts);

  const register = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.elements.email.value);
    console.log(
      `from register  before dispathch from form: name: ${name}, email:${email}`
    );
    dispatch(registerSingleUser(name, email));
  };

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch({type:'clearErrors'})
    }

    if (message) {
      console.log(message);
      dispatch({type:'clearErrors'})
    }
  }, [message, error]);

  return (
    <>
      <div className="content">
        <form onSubmit={register}>
          <br />
          {/* remove later */}
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <br />
          <br />
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <br />
          <br />
          <input className="btn-green close" type={"submit"} />
        </form>
        <span>
          ALerts: {message} {error}
        </span>
        {/* {`Name: ${name} Email: ${email}`} */}
      </div>
    </>
  );
}

export default Register;
