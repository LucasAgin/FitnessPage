import React, { Component } from 'react';
import './App.css';

class Navigation extends Component {
  render() {
    return <div className="navigation"> 
              {/* <img src="https://via.placeholder.com/350x150" alt="Working on it" width="200px" height="50px"></img>
              <nav className="nav">
                <button type="button" className="btn btn-outline-primary">Sign up for Emails</button>
              </nav> */}
           </div>;
  }
}

class Quote extends Component {
  constructor(props) {
      super(props);
      this.state = {quote: props.quote};
  }

  render() {
    return (
      <p className="quote"> "{this.state.quote}" </p>
      
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <header className="App-header">
          <Quote quote="tester"></Quote>
        </header>
      </div>
    );
  }
}

export default App;
