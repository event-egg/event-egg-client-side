import React, { Component } from 'react';
import EventCard from './EventCard';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'


// renders user's saved events
// event cards will render 'remove event' btn instead of 'save event'

class MyEvents extends Component {

  render() {
    return (
      <Container>
          <h1 className='m-3' style={{ textAlign: 'center', fontSize: '4em', textShadow: '3px 3px 2px 2px #0000003f'}}>MyEvents</h1>
          <hr></hr>
        {this.props.user.savedEvents.length > 0 ?
          <Row sm={1} md={2} lg={5}>
            {this.props.user.savedEvents.map((event, idx) =>
              <EventCard type="myEvent" event={event} key={event.id} deleteEvent={this.props.deleteEvent} user={this.props.user} showModal={this.props.showModal} />)}
          </Row> : 
          <Container className="d-flex justify-content-center pt-5">
            <Card border="dark" style={{ width: '25rem',  height: '15rem', boxShadow: '3px 3px 2px 2px #0000003f'}} className='mx-auto'>
              <Card.Header style={{ 
                textAlign: 'center', 
                fontSize: '1.6em', 
                fontWeight: 'bold', 
                backgroundColor: '#a3c4f3',
                }}>Uh Oh!</Card.Header>
              <Card.Body >
                <Card.Text style={{ textAlign: 'center', fontSize: '1.4em'}} className='py-auto' >
                  Looks like you don't have any saved events here yet! Why not go to your Dashboard and add some events that look promising?
                </Card.Text>
              </Card.Body>
            </Card>
          </ Container>
          }
      </Container>

    );
  }
}

export default MyEvents;
