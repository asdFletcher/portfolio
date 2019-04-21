import React from "react";
import { Route, Link } from "react-router-dom";

class Nav extends React.Component{
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/trees">Binary Trees</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
