import React, { Component } from 'react';
import searches from './Comparison.json';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'test',
    };
  }
  render() {
    const listItems = searches.map((listing, key) =>
           <Col xs={6} md={4} key={key}>
           <div className="widget">
              <h3>Search # {listing.id} </h3>
              <img src={listing.image} alt="house" width="100%" />
              <p>
                Loan Balance:
                <strong>
                   ${listing.loan_balance}
                </strong>
              </p>
              <p>
                Interest Rate:
                <strong>
                   {listing.interest_rate}%
                </strong>
              </p>
              <p>
                Loan term (years):
                <strong>
                   {listing.term}
                </strong>
              </p>
              <p>
                Period:
                <strong>
                   {listing.period}
                </strong>
              </p>
              <p>
                Monthly Payments: 
                <strong>
                   ${listing.monthly_payments}
                </strong>
              </p>
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
              {listItems}
            </Row>
          </Grid>
      </div>
      
    );
  }
}

export default App;
