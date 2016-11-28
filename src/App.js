import React, { Component } from 'react';
import logo from './logo.svg';
import searches from './Comparison.json';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'test',
    };
    console.log(searches);
  }
  render() {
    const listItems = searches.map((elem, key) =>
          <li key={key}>{elem.id}</li>
    );
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mortgage Comparison</h2>
        </div>
        <p className="App-intro">
          {this.state.value}
        </p>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;
