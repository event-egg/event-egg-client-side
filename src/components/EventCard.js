import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import SaveEventBtn from './SaveEventBtn';
import RemoveEventBtn from './RemoveEventBtn';
import Button from 'react-bootstrap/Button';
import {Row, Col, Container} from 'react-bootstrap';



class EventCard extends Component {

  // Constructor to create state
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type
    }
  }

  changeToMyEvent = (type) => {
    this.setState({ type: type });
  }


  // show modal when user clicks event image
  handleMoreInfoClick = () => {
    console.log('event type: ', this.props.type)
    this.props.showModal(this.props.event);
  }

  render() {
    return (

      <Card style={{ width: '18rem', boxShadow: '3px 3px 2px 2px #0000003f' }} border="dark" className='m-3 card-styled' >
        <Card.Header style={{ overflow: 'hidden', fontWeight: 'bold', textOverflow: 'ellipsis', whiteSpace: 'nowrap',  backgroundColor: '#8eecf5', border: '1px solid black', boxShadow: '2px 2px 2px 2px #0000003f'}}>
        {this.props.event.name}
        </Card.Header>
        <Card.Body>
        <Card.Img  style={{boxShadow: '2px 2px 2px 2px #0000003f'}} variant="top" src={this.props.event.image.url} />
          <Card.Text>
            {this.props.event.description === "Undefined" ? "" : this.props.event.description}
          </Card.Text>
          <Card.Footer style={{
                textAlign: 'center', 
                fontWeight: 'bold', 
                backgroundColor: '#cfbaf0',
                }}>
            {this.state.type === 'newEvent' ?
              <SaveEventBtn saveEvent={this.props.saveEvent} event={this.props.event} user={this.props.user} changeToMyEvent={this.changeToMyEvent} /> :
              <RemoveEventBtn user={this.props.user} event={this.props.event} deleteEvent={this.props.deleteEvent} changeToMyEvent={this.changeToMyEvent} />}
            <Button className="more-info-button" onClick={this.handleMoreInfoClick}>More Info</Button>  
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  }
}

export default EventCard;

