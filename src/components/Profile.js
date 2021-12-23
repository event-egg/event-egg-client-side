import React, { Component } from 'react';
import EditProfileModal from './EditProfileModal';
import DeleteProfileModal from './DeleteProfileModal';
import Button from 'react-bootstrap/Button';




class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showEditModal: false,
      showDeleteModal: false
    }
  }

  //--------------Modal Functions----------------
  showModal = (type) => {
    // sets state to true when modal is shown
    type === 'profile' ? 
      this.setState({ showEditModal: true }) : 
      this.setState({ showDeleteModal: true })
  }

  closeModal = (type) => {
    // sets state to false when modal closed
    type === 'profile' ? 
    this.setState({ showEditModal: false }) : 
    this.setState({ showDeleteModal: false })
  }

  render() {
    return (
      <div>
        <h3> Some Profile Data </h3>
        <EditProfileModal show={this.state.showEditModal} closeModal={this.closeModal} user={this.props.user} updateUser={this.props.updateUser}/>
        <DeleteProfileModal show={this.state.showDeleteModal} closeModal={this.closeModal} user={this.props.user} deleteUser={this.props.deleteUser} />
        <Button onClick={() => this.showModal()} >Edit Profile</Button>
        <Button  variant="outline-danger" onClick={() => this.showModal()} >Delete Profile</Button>
      </div>
    );
  }
}

export default Profile;