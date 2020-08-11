import React from "react";
import { Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul className="list-tier-1">
                    <li>
                        <NavLink className="nav-tier-1-link" exact={true} to="/">
                            <FontAwesomeIcon className="icon" icon={faHome} />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-tier-1-link" exact={true} to="/trees">
                            <FontAwesomeIcon className="icon" icon={faProjectDiagram} />
                            Tree Playground
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-tier-1-link" exact={true} to="/blog-bst">
                            <FontAwesomeIcon className="icon" icon={faPenNib} />
                            Blog
                        </NavLink>
                        <ul className="list-tier-2">
                            <li>
                                <NavLink
                                    className="nav-tier-2-link"
                                    exact={true}
                                    to="/blog-timing-trees"
                                >
                                    Timing (Trees)
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-tier-2-link" exact={true} to="/blog-bst">
                                    BST
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-tier-2-link" exact={true} to="/blog-avl">
                                    AVL Tree
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-tier-2-link" exact={true} to="/blog-splay">
                                    Splay Tree
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-tier-2-link" exact={true} to="/blog-rbt">
                                    Red Black Tree
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav-tier-2-link"
                                    exact={true}
                                    to="/blog-tree-compare"
                                >
                                    Comparison
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav-tier-2-link"
                                    exact={true}
                                    to="/blog-timing-sorting"
                                >
                                    Timing (Sorting)
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav-tier-2-link"
                                    exact={true}
                                    to="/blog-sorting"
                                >
                                    Sorting
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink className="nav-tier-1-link" exact={true} to="/resume">
                            <FontAwesomeIcon className="icon" icon={faLinkedin} />
                            Resume
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
