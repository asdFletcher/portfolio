import React, { Component } from "react";
import "./styles/reset.scss";
import "./styles/base.scss";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Nav from "./components/Nav.js";
import Resume from "./components/Resume.js";
import TreeGraphContainer from "./TreeGraph/components/TreeGraphContainer.js";
import {
    BlogTimingTrees,
    BlogBST,
    BlogAVL,
    BlogSplay,
    BlogTreeCompare,
    BlogRBT,
    BlogTimingSorting,
    Sorting,
} from "./components/Blog.js";
import Header from "./components/Header.js";
import Home from "./components/Home.js";

// import { iconLibrary } from "./icons/library";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <aside className="left-aside">
                    <div className="top-left"></div>
                    <Nav />
                </aside>

                <aside className="right-aside">
                    <Header />
                    <main>
                        <Route exact path="/resume" component={Resume} />
                        <Route exact path="/trees" component={TreeGraphContainer} />
                        <Route exact path="/blog-timing-trees" component={BlogTimingTrees} />
                        <Route exact path="/blog-bst" component={BlogBST} />
                        <Route exact path="/blog-avl" component={BlogAVL} />
                        <Route exact path="/blog-splay" component={BlogSplay} />
                        <Route exact path="/blog-rbt" component={BlogRBT} />
                        <Route exact path="/blog-tree-compare" component={BlogTreeCompare} />
                        <Route exact path="/blog-timing-sorting" component={BlogTimingSorting} />
                        <Route exact path="/blog-sorting" component={Sorting} />
                        <Route exact path="/" component={Home} />
                    </main>
                </aside>
            </div>
        </BrowserRouter>
    );
};
