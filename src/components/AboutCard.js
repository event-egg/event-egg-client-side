// import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';



class AboutCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Team Member Name</Card.Header>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              <p>Bio goes here</p>
              {/* <a href="#">LinkedIn link </a> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AboutCard;