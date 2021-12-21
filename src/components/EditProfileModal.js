// import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import UpdateProfileBtn from './UpdateProfileBtn';



class EditProfileModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body> Edit profile options here someday... </Modal.Body>
          <Modal.Footer>
            <UpdateProfileBtn variant="primary" closeModal={this.props.closeModal} />
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditProfileModal;




