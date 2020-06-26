import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <div>App</div>
        </Link>
        <Link to="/home">
          <div>Home</div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
