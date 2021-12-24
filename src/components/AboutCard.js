import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';



class AboutCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Header>{this.props.bio.name}</Card.Header>
          <Card.Img variant="top" src={this.props.bio.image} />
          <Card.Body>
            <Card.Text>
              {this.props.bio.about}<br />
              <a href={this.props.bio.githubLink} target="_blank" rel="noreferrer">GitHub</a><br />
              <a href={this.props.bio.linkedinLink} target="_blank" rel="noreferrer">LinkedIn</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default AboutCard;