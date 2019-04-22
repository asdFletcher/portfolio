import React from "react";
import { Route, Link } from "react-router-dom";

class Nav extends React.Component{
  render() {
    return (
      <nav>
        <ul className="list-tier-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog-bst">Blog</Link>
            <ul className="list-tier-2">
              <li>
                <Link to="/blog-bst">BST</Link>
              </li>
              <li>
                <Link to="/blog-avl">AVL Tree</Link>
              </li>
              <li>
                <Link to="/blog-tree-compare">Comparison</Link>
              </li>
            </ul>
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
