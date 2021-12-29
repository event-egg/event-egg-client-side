
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
        {console.log('Modal rendered')}
        {console.log('modalIsShown: ', this.props.modalIsShown)}
        {console.log('modalEvent: ', this.props.event)}

        <Modal show={this.props.modalIsShown} onHide={() => this.handleClose()} className="event-modal">
          <Modal.Header>
            <Modal.Title><div className="modal-title">{this.props.event.name}</div></Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            {this.props.event.id &&
              <>
                <img src={this.props.event.image.url} alt={this.props.event.name} className="modal-image" />
                <br />
                <div
                  className="modal-description">
                  {this.props.event.description === 'Undefined' ? '' : this.props.event.description}
                </div>
                <br />
                <div className="modal-address">
                  <a href={this.props.event.link} target="_blank" rel="noreferrer" className="modal-link">Get Tickets</a> <br />
                  {this.props.event.localDate} <br />
                  {this.props.event.localTime} <br />
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