import React, { Component } from 'react';
import Widget from '../Widget/Widget';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.selectedWidget = (e) => {
      console.log('this is:', this);
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Home</h2>
        </div>
          <Grid>
            <Row className="show-grid">
               <Col xs={12} md={12} className="tar">
                <Button bsStyle="primary" className="compare-btn">Compare</Button>
               </Col>
            </Row>
              <Widget name="Gonzalo" />
          </Grid>
      </div>
      
    );
  }
}

export default App;
