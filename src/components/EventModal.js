
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class EventModal extends Component {

  handleClose = () => {
    this.props.closeModal();
  }

  render() {
    return (

      < div >
        <Modal show={this.props.modalIsShown} onHide={() => this.handleClose()} className="event-modal">
          <Modal.Header>
            <Modal.Title>{this.props.event.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.event.id &&
              <>
                <img src={this.props.event.image.url} alt={this.props.event.name} /> <br />
                {this.props.event.description === 'Undefined' ? '' : this.props.event.description} <br />
                <a href={this.props.event.link} target="_blank" rel="noreferrer">Get Tickets</a> <br />
                {this.props.event.localDate} <br />
                {this.props.event.localTime} <br />
                {this.props.event.address.venueName} <br />
                {this.props.event.address.street.line1} <br />
                {this.props.event.address.street.line2 && <p>{this.props.event.address.street.line2} </p>}
                {this.props.event.address.city}, {this.props.event.address.state.stateCode}, {this.props.event.address.zip}
              </>}
          </Modal.Body>
          <Modal.Footer>
            <Button className="close-modal-button" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div >
    );
  }
}

export default EventModal;