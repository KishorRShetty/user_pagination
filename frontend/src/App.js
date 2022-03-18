import "./App.css";
import User from "./component/user/User";
import Register from "./component/Register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <Router>
          {/* <Link to="/">User </Link>
          <Link to="register">Register</Link> */}
          <Header/>
        <br/>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      {/* <User /> */}
    </>
  );
}

export default App;
