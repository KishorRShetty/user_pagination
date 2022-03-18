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
    dispatch(registerSingleUser(name, email));
    console.log(`from register FE: id: name: ${name}, email:${email}`);
    
  };
  
  //remove after redux
  const createUser = () => {
    axios.post("https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/register", { name: name, email: email }).then((response) => {
      alert("userCreated");
      console.log()
    }).catch((error)=>{alert(error)});
  };

//remove after redux
  const clicked = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.elements.email.value);
    createUser();
  };


  return (
    <div className="content">
      <form onSubmit={register}>
        <br />
        <input name="name" placeholder="Name" />
        <br />
        <br />
        <input name="email" placeholder="Email"/>
        <br />
        <br />
        <input type={"submit"} />
      </form>

      {/* {`Name: ${name} Email: ${email}`} */}
    </div>
  );
}

export default Register;
