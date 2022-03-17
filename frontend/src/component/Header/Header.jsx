import React from "react";
import {Router,Link} from "react-router-dom";

function Header() {
  return (
    <Router>
      <Link to="register">Register</Link>
      <Link to="/">User</Link>
    </Router>
  );
}

export default Header;
