import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState('NA');

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

  const view = (id) => {
    alert(id);
  };

  return (
    <div className="App">
      <ul>
        {users.map((usr) => (
          <>
            <li key={usr._id}>{usr.name}</li>
            <li key={usr._id}>{usr.email}</li>
            <li key={usr._id}>{usr.createdAt}</li>
            <li key={usr._id}>{usr.updatedAt}</li>
          </>
        ))}
      </ul>

      <table>
        <tr>
          <td>Name</td>
          <td>email</td>
          <td>createdAt</td>
          <td>updatedAt</td>
          <td>options</td>
        </tr>
        {users.map((usr) => (
          <tr>
            <td key={usr._id}>{usr.name}</td>
            <td key={usr._id}>{usr.email}</td>
            <td key={usr._id}>{usr.createdAt}</td>
            <td key={usr._id}>{usr.updatedAt}</td>
            <td>
              <button onClick={() => setId(usr._id)}>view</button>
            </td>
          </tr>
        ))}
      </table>
      <p>{id}</p>
    </div>
  );
}

export default App;
