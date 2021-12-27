
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import SaveEventBtn from './SaveEventBtn';
import RemoveEventBtn from './RemoveEventBtn';
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

        <Modal show={this.props.modalIsShown} >
          <Modal.Header>
            <Modal.Title>{this.props.event.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.props.event.id &&
              <>
                <img src={this.props.event.image.url} alt={this.props.event.name} target="_blank" rel="noreferrer" /> <br />
                {this.props.event.description === 'Undefined' ? '' : this.props.event.description} <br />
                <a href={this.props.event.link}>Get Tickets</a> <br />
                {this.props.event.startTime} <br />
                {this.props.event.address.venueName} <br />
                {this.props.event.address.street.line1} <br />
                {this.props.event.address.street.line2 && <p>{this.props.event.address.street.line2} </p>}
                {this.props.event.address.city}, {this.props.event.address.state.stateCode}, {this.props.event.address.zip}
              </>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div >
    );
  }
}

export default EventModal;