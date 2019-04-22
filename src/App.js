import React, { Component } from 'react';
import './styles/reset.scss';
import './styles/base.scss';
import { Route } from "react-router-dom";

import Nav from "./components/Nav.js"
import Resume from './components/Resume.js';
import TreeGraphContainer from './TreeGraph/components/TreeGraphContainer.js';
import { BlogBST, BlogAVL, BlogTreeCompare } from './components/Blog.js';
import Header from './components/Header.js';
import Home from './components/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside className="left-aside">
          <div className="top-left"></div>
          <Nav />
        </aside>

        <aside className="right-aside">
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/trees" component={TreeGraphContainer} />
            <Route exact path="/blog-bst" component={BlogBST} />
            <Route exact path="/blog-avl" component={BlogAVL} />
            <Route exact path="/blog-tree-compare" component={BlogTreeCompare} />
          </main>
        </aside>
      </div>
    );
  }
}

export default App;
