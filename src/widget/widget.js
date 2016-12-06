import React, { Component } from 'react';
import searches from '../Comparison.json';
import {Row, Col, Checkbox } from 'react-bootstrap';
import './Widget.css';

class Widget extends Component {
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
                <Checkbox inline className="tar">
                  Compare
                </Checkbox>
              </div>
          </Col>
    );
    return (
      <Row className="show-grid">
              {listItems}
      </Row>
    );
  }
}

export default Widget;