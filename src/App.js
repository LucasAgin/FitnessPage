import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Headerss extends Component {
  render() {
    return <div> Welcome to my site in {this.props.month}</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headerss month="dec"></Headerss>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
