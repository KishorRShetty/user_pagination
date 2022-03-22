import React, { useEffect, useState } from "react";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { registerSingleUser } from "../../action";

function Register() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [show, setShow] = useState(false);
  const [snackMsg, setsnackMsg] = useState("");

  const { message, error } = useSelector((state) => state.registerUserState);

  const register = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.elements.email.value);
    // console.log(
    //   `from register  before dispathch from form: name: ${name}, email:${email}`
    // );
    dispatch(registerSingleUser(name, email));
  };

  const showSnackbar = (msg) => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  useEffect(() => {
    if (error) {
      // console.log(error);
      setsnackMsg(error);
      showSnackbar();
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      // console.log(message);
      setsnackMsg(message);
      showSnackbar();
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch,message, error]);

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

        {/* {`Name: ${name} Email: ${email}`} */}
      </div>
      <div
        id="snackbar"
        className={
          // show && { ...snackMsg.includes("Error") } ? "show red" : null
          show ? (snackMsg.includes("Error") ? "show red" : "show green") : null
        }
      >
        {show ? snackMsg : null}
      </div>
    </>
  );
}

export default Register;
