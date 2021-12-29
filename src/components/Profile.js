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
import Image from 'react-bootstrap/Image'



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
        <h1 className='m-3' style={{ textAlign: 'center', fontSize: '4em', textShadow: '3px 3px 2px 2px #0000003f' }}>My Profile</h1>
          <hr></hr>
        <Container className="d-flex justify-content-center pt-5">
          
        <Card style={{ minWidth: '500px', maxWidth: '75%', boxShadow: '3px 3px 2px 2px #0000003f', fontSize: '1.2em' }}>
          <Card.Header style={{ 
                textAlign: 'center', 
                fontSize: '1.8em', 
                fontWeight: 'bold', 
                backgroundColor: '#8eecf5',
            }}>Profile Details</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem><strong>Name:</strong> {this.props.user.name}</ListGroupItem>
                <ListGroupItem><strong>Email:</strong> {this.props.user.email}</ListGroupItem>
                <ListGroupItem><strong>Location:</strong> {this.props.user.defaultCity}</ListGroupItem>
                <ListGroupItem><strong>Interests:</strong> <br />
                  {
                    this.props.user.defaultInterests.map(interest =>
                      <Badge pill bg="success"  key={interest}><span className='pt-1 pb-2'>{interest}</span></Badge>)
                  }
                </ListGroupItem>
              </ListGroup>         
            <Container>
              <Stack direction="horizontal" xs={2} gap={4}>
                <Button size="lg" style={{backgroundColor: 'white', boxShadow: '1px 1px 1px 1px #0000003f'}} variant="outline-success" onClick={() => this.showModal('profile')} >Edit Profile</Button>
                <Button size="lg" style={{backgroundColor: 'white', boxShadow: '1px 1px 1px 1px #0000003f'}} variant="outline-danger" onClick={() => this.showModal()} >Delete Profile</Button>
              </Stack>
            </Container>
            </Card.Body>
            <Container>
              <EditProfileModal show={this.state.showEditModal} closeModal={this.closeModal} user={this.props.user} updateUser={this.props.updateUser} />
              <DeleteProfileModal show={this.state.showDeleteModal} closeModal={this.closeModal} user={this.props.user} deleteUser={this.props.deleteUser} />
            </Container>
        </Card>
        </Container>
      </Container>
    );
  }
}

export default Profile;