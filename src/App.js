import React, { Component } from 'react';
import './styles/reset.css';
import './styles/base.css';
import Nav from "./components/Nav.js"
import TreeGraphContainer from './TreeGraph/TreeGraphContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>header content test</div>
          <Nav />
        </header>

        <main>
          <div>main content</div>
          <TreeGraphContainer />
        </main>

        <footer className="App-footer">
          <div>footer content</div>
        </footer>
      </div>
    );
  }
}

export default App;
