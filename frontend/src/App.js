import "./App.css";
import User from "./component/user/User";
import Register from "./component/Register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <Router>
        <nav className="header">
          <Link to="/">User </Link>
          <Link to="register">Register</Link>
        </nav>
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
