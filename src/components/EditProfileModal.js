import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import eventCategories from '../eventCategories.js'

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
    this.props.resetCache();
    this.props.closeModal('profile');
  }

  render() {
    return (
      <div>
        <Modal className="pt-5" show={this.props.show} onHide={() => this.props.closeModal('profile')}>
          <Modal.Header>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleProfileSubmit}>
              <Form.Group className="mb-3" controlId="city" >
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder={this.props.user.defaultCity} />
              </Form.Group>
              <fieldset>
                <Form.Group className="mb-3" controlId="interests" >
                  <Form.Label>Interests</Form.Label>
                  {
                    eventCategories.map(category => {
                      let nonAlphaChars = /\W/;
                      let id = category.toLowerCase().replace(nonAlphaChars, '');
                      return (<Form.Check
                        key={id}
                        type="checkbox"
                        label={category}
                        name="interestCheckboxes"
                        id={id}
                        defaultChecked={this.props.user.defaultInterests.includes(id)}
                      />
                      )
                    }
                    )
                  }
                </Form.Group>
              </fieldset>
              <div className="d-flex flex-row-reverse bd-highlight">
                <Button className="mx-1" variant="secondary" onClick={() => this.props.closeModal('profile')}>Close</Button>
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




