import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       // `https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/allUsers`
  //       `https://gorest.co.in/public/v2/posts/100/comments`
  //       // `https://api.publicapis.org/entries`
  //     )
  //     .then((response) => {
  //       setUsers(response.data);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://4990-gitlabyoha-serversidedpa-ch53nzxy9de.ws-us38.gitpod.io/api/v1/allUsers`
        // `https://api.publicapis.org/entries`
      );
      // console.log(request);
      setUsers(request.data.user);
      return request;
    }
    fetchData();
  }, []);

  console.log(users);

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
      <ul>
        {users.map(usr=>(
          <li key={usr.id}>{usr.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
