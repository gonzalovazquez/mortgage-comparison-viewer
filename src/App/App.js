import React, { Component } from 'react';
import Widget from '../Widget/Widget';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Home</h2>
        </div>
          <Grid>
              <Widget name="Mortgage Comparison" />
          </Grid>
      </div>
      
    );
  }
}

export default App;
