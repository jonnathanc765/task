import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={logo} className="App-logo" alt="logo" width="40px" />
            React.js
          </a>
        </nav>
        
      </div>
    );
  }
}

export default App;
