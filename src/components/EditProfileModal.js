import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import eventCategories from '../eventCategories.js'
import { Col, Row } from 'react-bootstrap';

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
      name: this.props.user.name,
      defaultCity: e.target.city.value.toLowerCase() || this.props.user.defaultCity,
      defaultInterests: interestArray,
      email: this.props.user.email,
    }
    this.props.updateUser(user, this.props.user._id);
    this.props.closeModal('profile');
  }

  render() {
    return (
      <div>
        <Modal autoFocus  className="py-5" show={this.props.show} onHide={() => this.props.closeModal('profile')}>
          <Modal.Header style={{background: 'linear-gradient(135deg, #CFBAF0 9%, #B9FBC0 52%, #90DBF4 100%)' }}>
            <Modal.Title style={{fontSize: '1.6em', fontWeight: 'bold'}}>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleProfileSubmit}>
              <Form.Group className="mb-3" controlId="city" >
                <Form.Label style={{fontSize: '1.4em', fontWeight: 'bold'}}>City</Form.Label>
                <Form.Control type="text" placeholder={this.props.user.defaultCity} />
              </Form.Group>
              <fieldset>
                <Form.Group className="mb-3" controlId="interests" >
                  <Form.Label style={{fontSize: '1.4em', fontWeight: 'bold'}}>Interests</Form.Label>
                  <Row xs={2} className='px-2' >
                    {
                      eventCategories.map(category => {
                      let nonAlphaChars = /\W/;
                      let id = category.toLowerCase().replace(nonAlphaChars, '');
                        return (
                        <Col key={id} style={{fontSize: '1.2em'}}>
                          <Form.Check
                            type="checkbox"
                            label={category}
                            name="interestCheckboxes"
                            id={id}
                            defaultChecked={this.props.user.defaultInterests.includes(id)}
                          className='m-2'
                          />             
                        </Col>
                        )} 
                      )
                    }
              </Row>
                </Form.Group>
              </fieldset>
              <div style={{border: '1px solid lightgrey'}} className="mb-3" /> 
              <Row xs={2}>
                <Col  className='text-center'>
                  <Button className='mx-3 px-5' variant="outline-primary" style={{ backgroundColor: "#fbf8cc", fontSize: '1.4em', fontWeight: 'bold'}}  type='submit'>Update</Button>
                </Col>
                <Col className='text-center'>
                  <Button className='mx-3 px-5' variant="outline-secondary" style={{ backgroundColor: "#90dbf4", fontSize: '1.4em', fontWeight: 'bold'}} variant="secondary" onClick={() => this.props.closeModal('profile')}>Close</Button>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default EditProfileModal;




