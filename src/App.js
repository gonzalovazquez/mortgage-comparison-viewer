import React, { Component } from 'react';
import searches from './Comparison.json';
import { Navbar, Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'test',
    };
  }
  render() {
    const listItems = searches.map((elem, key) =>
           <Col xs={6} md={4} key={key} className="widget">
            <p>
              {elem.id} | 
              {elem.loan_balance} | 
              {elem.interest_rate} |
              {elem.term} |
              {elem.period} |
              {elem.monthly_payments}
            </p>
          </Col>
    );
    return (
      <div className="App">
        <div className="App-header">
          <h2>Mortgage Comparison</h2>
        </div>
          <Grid>
            <Row className="show-grid">
              {listItems}
            </Row>
          </Grid>
      </div>
      
    );
  }
}

export default App;
