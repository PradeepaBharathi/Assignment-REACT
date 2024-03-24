import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
function Nav() {
  return (
    <>
      <div className="nav-bar">
        <Link to="/nesting">File Explorer</Link>
        <Link to="/scroll">Infinite Scroll</Link>
        <Link to="/transfer">Element Transfer</Link>
        <Link to="/game">Hit Game</Link>
      </div>
      <div className="text">
        <h1> Click on the options to view the assignment</h1>
      </div>
    </>
  );
}

export default Nav;
