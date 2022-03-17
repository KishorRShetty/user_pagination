import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        // `https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/allUsers`
        `https://gorest.co.in/public/v2/posts/100/comments`
        // `https://api.publicapis.org/entries`
      )
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(
  //       "https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/allUsers"
  //     );
  //     console.log(result);
  //     // setUsers(result);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      {/* User: {users.toString()} */}
      {users.map((usr) => {
        return <p>username: {usr.name}</p>;
      })}
    </div>
  );
}

export default App;
