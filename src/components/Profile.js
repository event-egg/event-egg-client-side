// import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import EditProfileModal from './EditProfileModal';
import Button from 'react-bootstrap/Button';



class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showEditModal: false
    }
  }

  //--------------Modal Functions----------------
  showModal = () => {
    // sets state to true when modal is shown
    this.setState({ showEditModal: true });
  }

  closeModal = () => {
    // sets state to false when modal closed
    this.setState({ showEditModal: false });
  }


  render() {
    return (
      <div>
        <h3> Some Profile Data </h3>
        <EditProfileModal show={this.state.showEditModal} closeModal={this.closeModal} user={this.props.user} updateUser={this.props.updateUser}/>
        <Button onClick={() => this.showModal()} >Edit Profile</Button>
      </div>
    );
  }
}

export default Profile;