import React, { Component } from 'react';
import './styles/reset.scss';
import './styles/base.scss';
import Nav from "./components/Nav.js"
import TreeGraphContainer from './TreeGraph/components/TreeGraphContainer.js';

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
