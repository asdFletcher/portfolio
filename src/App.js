import React, { Component } from 'react';
import './styles/reset.scss';
import './styles/base.scss';
import { Route } from "react-router-dom";

import Nav from "./components/Nav.js"
import Resume from './components/Resume.js';
import TreeGraphContainer from './TreeGraph/components/TreeGraphContainer.js';
import Blog from './components/Blog.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>

        <main>
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/trees" component={TreeGraphContainer} />
          <Route exact path="/blog" component={Blog} />
        </main>

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
