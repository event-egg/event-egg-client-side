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

  formatDate = (date) => {
    let formattedDate = new Date(date);
    let day = date.slice(8, 10);
    day[0] === '0' && (day = day.slice(1, 2))
    console.log('month Modal: ', day)
    let dateStr = formattedDate.toDateString();
    let newDate = `${dateStr.slice(4, -8)} ${day} ${dateStr.slice(-4, dateStr.length)}`;

    console.log('dateStr Modal: ', dateStr);
    console.log('newDate Modal: ', newDate);

    return newDate;
  }

  // converts ISO date/time string to local time

  // add date param back to use new Date() method
  formatTime = (time) => {
    /*
    let dateTime = `${date}T${time}Z`;
    console.log('this.props.event.localTime', this.props.event.localTime)
    console.log('dateTime: ', dateTime);
    // new Date() assumes given time is in UTC
    let dateObj = new Date(dateTime);
    console.log('dateObj: ', dateObj);
    let formattedTime = dateObj.toLocaleTimeString('en-US', { timeZone: 'PST', timeZoneName: 'short', hour12: true, hour: '2-digit', minute: '2-digit' });
    console.log('formattedTime: ', formattedTime);
    return formattedTime;
    */

    // adapted from https://medium.com/front-end-weekly/how-to-convert-24-hours-format-to-12-hours-in-javascript-ca19dfd7419d
    let hour = time.slice(0, 2);
    let amPm = hour >= 12 ? 'pm' : 'am';
    hour = (hour % 12) || 12;
    let minutes = time.slice(3, 5);
    let formattedTime = `${hour}:${minutes} ${amPm}`;
    console.log('formattedTime: ', formattedTime);
    return formattedTime;

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
          <Card.Img style={{
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
              <Col >
                <h5 style={{ fontSize: '12px' }}>{this.formatDate(this.props.event.localDate)} {this.formatTime(this.props.event.localTime)}</h5>
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

