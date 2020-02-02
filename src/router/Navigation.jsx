import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <h2>Routing demo</h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
