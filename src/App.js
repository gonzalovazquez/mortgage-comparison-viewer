import React, { Component } from 'react';
import searches from './Comparison.json';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      widgetA: 'test',
      widgetB: 'test'
    };
    this.selectedWidget = (e) => {
      console.log('this is:', this);
    }
  }
  render() {
    const listItems = searches.map((listing, key) =>
          <Col xs={6} md={4} key={key}>
            <div className="widget" onClick={this.selectedWidget}>
                <h3>Search # {listing.id} </h3>
                <img src={listing.image} alt="house" width="100%" />
                <p>
                  Loan Balance: 
                  <strong>
                      ${listing.loan_balance}
                  </strong>
                </p>
                <p>
                  Interest Rate: <strong>{listing.interest_rate}%</strong>
                </p>
                <p>
                  Loan term: <strong>{listing.term} years</strong>
                </p>
                <p>Period: <strong>{listing.period}</strong>
                </p>
                <p><a href={listing.link}>Reference</a></p>
                <p className="amount">${listing.monthly_payments} per month</p>
              </div>
          </Col>
    );
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Home</h2>
        </div>
          <Grid>
            <Row className="show-grid">
               <Col xs={12} md={12} className="ta-r">
                <Button bsStyle="primary" className="compare-btn">Compare</Button>
               </Col>
            </Row>
            <Row className="show-grid">
              {listItems}
            </Row>
          </Grid>
      </div>
      
    );
  }
}

export default App;
