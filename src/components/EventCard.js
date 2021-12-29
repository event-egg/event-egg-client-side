import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import SaveEventBtn from './SaveEventBtn';
import RemoveEventBtn from './RemoveEventBtn';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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

      <Card style={{ 
        width: '18rem',
        height: '24rem', 
        boxShadow: '3px 3px 2px 2px #0000003f' 
      }} border="dark" className='m-3 card-styled' >
        <Card.Header className='mx-3 pt-1 mt-1' style={{ 
          overflow: 'hidden', 
          fontWeight: 'bold', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap',  
          backgroundColor: '#8eecf5', 
          border: '1px solid black', 
          boxShadow: '1px 1px 2px 2px #0000003f'
        }}>
        {this.props.event.name}
        </Card.Header>

        <Card.Body>
        <Card.Img  style={{
          boxShadow: '2px 2px 2px 2px #0000003f',
          border: '2px solid grey'
          }} variant="top" src={this.props.event.image.url} />
          <Card.Text>
            {this.props.event.description === "Undefined" ? "" : this.props.event.description}
          </Card.Text>
          <Card.Footer className='py-3 px-2' style={{
                textAlign: 'center', 
                fontWeight: 'bold', 
                backgroundColor: '#cfbaf0',
                boxShadow: '1px 1px 2px 2px #0000003f',
                border: '1px solid grey'
                }}>
                  <Row> 
                    <Col>
                      <h5>{this.props.event.localDate}</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {this.state.type === 'newEvent' ?
                        <SaveEventBtn saveEvent={this.props.saveEvent} event={this.props.event} user={this.props.user} changeToMyEvent={this.changeToMyEvent} /> :
                        <RemoveEventBtn user={this.props.user} event={this.props.event} deleteEvent={this.props.deleteEvent} changeToMyEvent={this.changeToMyEvent} />}
                    </Col>
                    <Col>
                      <Button className="more-info-button p-1" onClick={this.handleMoreInfoClick}>More Info</Button> 
                    </Col>            
                  </Row>

          </Card.Footer>
        </Card.Body>
      </Card>
    );
  }
}

export default EventCard;

