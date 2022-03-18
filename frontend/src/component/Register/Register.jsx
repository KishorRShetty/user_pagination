import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const createUser = () => {
    axios.post("https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/register", { name: name, email: email }).then((response) => {
      alert("userCreated");
      console.log()
    }).catch((error)=>{alert('error')});
  };


  const clicked = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.elements.email.value);
    createUser();
  };

  return (
    <div>
      <form onSubmit={clicked}>
        <br />
        Name: <input name="name" />
        <br />
        <br />
        Email: <input name="email" />
        <br />
        <br />
        <input type={"submit"} />
      </form>

      {`Name: ${name} Email: ${email}`}
    </div>
  );
}

export default Register;
