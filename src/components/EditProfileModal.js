// import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class EditProfileModal extends Component {


  handleProfileSubmit = (e) => {
    e.preventDefault();
    let interestArray = [];
    e.target.interestCheckboxes.forEach(elem => {
      if (e.target[elem.id].checked) {
        interestArray.push(elem.id);
      }
    });
    const user = {
      // this.props.auth0.user.name || 
      name: this.props.user.name,
      defaultCity: e.target.city.value.toLowerCase() || this.props.user.defaultCity,
      defaultInterests: interestArray,
      // this.props.auth0.user.email ||
      email: this.props.user.email,
    }
    this.props.updateUser(user, this.props.user._id);
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <Modal className="pt-5" show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <Form onSubmit={this.handleProfileSubmit}>
          <Form.Group className="mb-3" controlId="city" >
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder={this.props.user.defaultCity}/>
          </Form.Group>
          <fieldset>
            <Form.Group className="mb-3" controlId="interests" >
              <Form.Label>Interests</Form.Label>
                  <Col>
                <Form.Check
                  type="checkbox"
                  label="movies"
                  name="interestCheckboxes"
                  id="movies"
                  defaultChecked={this.props.user.defaultInterests.includes('movies')}
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="music"
                  name="interestCheckboxes"
                  id="music"
                  defaultChecked={this.props.user.defaultInterests.includes('music')}
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="coffee"
                  name="interestCheckboxes"
                  id="coffee"
                  defaultChecked={this.props.user.defaultInterests.includes('coffee')}
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="theatre"
                  name="interestCheckboxes"
                  id="theatre"
                  defaultChecked={this.props.user.defaultInterests.includes('theatre')}
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="nightlife"
                  name="interestCheckboxes"
                  id="nightlife"
                  defaultChecked={this.props.user.defaultInterests.includes('nightlife')}
                />
              </Col>
            </Form.Group>
          </fieldset>
          <div className="d-flex flex-row-reverse bd-highlight">
          <Button className="mx-1" variant="secondary" onClick={this.props.closeModal}>Close</Button>
          <Button className="mx-1" type='submit'>Update</Button>
          </ div>
        </Form>
            
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default EditProfileModal;




