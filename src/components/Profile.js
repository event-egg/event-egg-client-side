import React, { Component } from 'react';
import EditProfileModal from './EditProfileModal';
import DeleteProfileModal from './DeleteProfileModal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'



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
      <Container>
        <Card style={{ maxWidth: '500px' }}>
          <Container>
            <Card.Body>
              <Card.Title>Your Profile</Card.Title>
              <Card.Header>{this.props.user.name}</Card.Header>
              <ListGroup variant="flush">
                <ListGroupItem>Email: {this.props.user.email}</ListGroupItem>
                <ListGroupItem>Location: {this.props.user.defaultCity}</ListGroupItem>
                <ListGroupItem>Interests: <br />
                  {
                    this.props.user.defaultInterests.map(interest =>
                      <Badge pill bg="success" key={interest}>{interest}</Badge>)
                  }
                </ListGroupItem>
              </ListGroup>
            
            <Container>
              <Stack direction="horizontal" xs={2} gap={4}>
                <Button size="lg" variant="outline-success" onClick={() => this.showModal('profile')} >Edit Profile</Button>
                <Button size="lg" variant="outline-danger" onClick={() => this.showModal()} >Delete Profile</Button>
              </Stack>
            </Container>
            </Card.Body>
            <EditProfileModal show={this.state.showEditModal} closeModal={this.closeModal} user={this.props.user} updateUser={this.props.updateUser} />
            <DeleteProfileModal show={this.state.showDeleteModal} closeModal={this.closeModal} user={this.props.user} deleteUser={this.props.deleteUser} />
          </Container>
        </Card>
      </Container>
    );
  }
}

export default Profile;