import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const nav = () => {
  return (
    <header className="Nav">
      <nav>
        <Link to="/users">Users</Link>
        <Link to="/courses">Courses</Link>
      </nav>
    </header>
  );
}

export default nav;
