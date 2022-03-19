import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { registerSingleUser } from "../../action";

function Register() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const register = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.elements.email.value);
    console.log(
      `from register  before dispathch from form: name: ${name}, email:${email}`
    );
    dispatch(registerSingleUser(name, email));
  };

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
          <input type={"submit"} />
        </form>

        {/* {`Name: ${name} Email: ${email}`} */}
      </div>
    </>
  );
}

export default Register;
