import React, { Component } from 'react';
import EditProfileModal from './EditProfileModal';
import DeleteProfileModal from './DeleteProfileModal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import {Row, Col } from 'react-bootstrap'



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
          
        <Card style={{ minWidth: '300px', width:'50%', boxShadow: '3px 3px 2px 2px #0000003f', fontSize: '1.2em' }}>
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
                <Row xs={1} className='text-center'>
                  {
                    this.props.user.defaultInterests.map(interest =>
                      <Badge pill bg="info" text="light" className='m-1 p-2' key={interest}><span>{interest}</span></Badge>)
                    }
                </Row>
                </ListGroupItem>
              </ListGroup>  
              <div style={{border: '1px solid lightgrey'}} className="mb-3" />       
            <Container>
                <Row xs={2}>
                <Col  className='text-center'>
                <Button size="lg" style={{ boxShadow: '1px 1px 1px 1px #0000003f', backgroundColor: "#8eecf5", fontSize: '1.1em', fontWeight: 'bold'}} variant="outline-primary" onClick={() => this.showModal('profile')} >Edit Profile</Button>
                </Col>
                <Col className='text-center'>
                <Button size="lg" style={{ boxShadow: '1px 1px 1px 1px #0000003f', backgroundColor: "#f1c0e8", fontSize: '1.1em', fontWeight: 'bold'}}  variant="outline-danger" onClick={() => this.showModal()} >Delete Profile</Button>
                </Col>
              </Row>
            </Container>
            </Card.Body>
            <Container>
              <EditProfileModal resetCache={this.props.resetCache} show={this.state.showEditModal} closeModal={this.closeModal} user={this.props.user} updateUser={this.props.updateUser} />
              <DeleteProfileModal show={this.state.showDeleteModal} closeModal={this.closeModal} user={this.props.user} deleteUser={this.props.deleteUser} />
            </Container>
        </Card>
        </Container>
      </Container>
    );
  }
}

export default Profile;