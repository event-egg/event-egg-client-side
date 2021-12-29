
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class EventModal extends Component {

  handleClose = () => {
    this.props.closeModal();
  }

  formatDate = (date) => {
    let formatedDate = new Date(date);
    return formatedDate.toDateString();
  }

  formatTime = (time) => {

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

      < div >
        <Modal show={this.props.modalIsShown} onHide={() => this.handleClose()} className="event-modal">
          <Modal.Header>
            <Modal.Title><div className="modal-title">{this.props.event.name}</div></Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            {this.props.event.id &&
              <>
                <img src={this.props.event.image.url} alt={this.props.event.name} className="modal-image mx-0" style={{
                  width: '100%',
                }} />
                <br />
                <div
                  className="modal-description" style={{
                    overflowWrap: 'break-word',
                    textAlign: 'justify'
                  }}>
                  {this.props.event.description === 'Undefined' ? '' : this.props.event.description}
                </div>
                <br />
                <div className="modal-address">
                  <a href={this.props.event.link} target="_blank" rel="noreferrer" className="modal-link">Get Tickets</a> <br />
                  {this.formatDate(this.props.event.localDate)} <br />
                  {this.formatTime(this.props.event.localTime)} <br />
                  {this.props.event.address.venueName} <br />
                  {this.props.event.address.street.line1} <br />
                  {this.props.event.address.street.line2 && <p>{this.props.event.address.street.line2} </p>}
                  {this.props.event.address.city}, {this.props.event.address.state.stateCode}, {this.props.event.address.zip}
                </div>
              </>}
          </Modal.Body>
          <Modal.Footer >
            <Button className="close-modal-button" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div >
    );
  }
}

export default EventModal;