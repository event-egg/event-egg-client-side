import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';


function DeleteBtn(props) {
  const { logout } = useAuth0();

  return (
    <Button className="mx-1" variant="outline-danger" onClick={() => {
      props.deleteUser(props.user);
      logout({ returnTo: window.location.origin })
    }}>Delete My Profile
    </Button>
  )
}


class DeleteProfileModal extends Component {

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeModal} animation={false}>
          <Modal.Header>
            <Modal.Title>Are you sure you want to delete your profile? This action cannot be undone.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-row-reverse bd-highlight">
              <DeleteBtn deleteUser={this.props.deleteUser} user={this.props.user}/>
              <Button className="mx-1" variant="primary" onClick={this.props.closeModal}> Cancel </Button>
            </ div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default DeleteProfileModal;