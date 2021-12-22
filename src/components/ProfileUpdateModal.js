// import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';


// // render modal with user profile update form
// // form submit triggers put request

// class ProfileUpdateModal extends Component {


//   handleProfileSubmit = (e) => {
//     e.preventDefault();
//     let interestArray = [];
//     e.target.interestCheckboxes.forEach(elem => {
//       if (e.target[elem.id].checked) {
//         interestArray.push(elem.id);
//       }
//     });
//     const user = {
//       // name: this.props.auth0.user.name || this.props.user.name,
//       defaultCity: e.target.city.value.toLowerCase() || this.props.user.defaultCity,
//       defaultInterests: interestArray,
//       email: 'fakeemail@email.com'
//       // email: this.props.auth0.user.email || this.props.user.email,
//     }
//     this.props.updateUser(user, this.props.user._id);
//   }

//   componentDidMount(e) {
//     //Fill out checkboxes
//     this.props.user.defaultInterests.forEach(elem => {
//       e.target.interestCheckboxes.forEach(formElem => {
//         if (elem === formElem.id) {
//           formElem.checked = true;
//         }
//       })
//     })
//   }


//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.handleProfileSubmit}>
//           <Form.Group className="mb-3" controlId="city" >
//             <Form.Label>City</Form.Label>
//             <Form.Control type="text" placeholder="this.props.user.defaultCity" />
//           </Form.Group>
//           <fieldset>
//             <Form.Group className="mb-3" controlId="interests" >
//               <Form.Label>Interests</Form.Label>
//               <Col>
//                 <Form.Check
//                   type="checkbox"
//                   label="movies"
//                   name="interestCheckboxes"
//                   id="movies"
//                 />
//               </Col>
//               <Col>
//                 <Form.Check
//                   type="checkbox"
//                   label="music"
//                   name="interestCheckboxes"
//                   id="music"
//                 />
//               </Col>
//               <Col>
//                 <Form.Check
//                   type="checkbox"
//                   label="coffee"
//                   name="interestCheckboxes"
//                   id="coffee"
//                 />
//               </Col>
//               <Col>
//                 <Form.Check
//                   type="checkbox"
//                   label="theatre"
//                   name="interestCheckboxes"
//                   id="theatre"
//                 />
//               </Col>
//               <Col>
//                 <Form.Check
//                   type="checkbox"
//                   label="nightlife"
//                   name="interestCheckboxes"
//                   id="nightlife"
//                 />
//               </Col>
//             </Form.Group>
//           </fieldset>
//           <Button type='submit'>Submit</Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default ProfileUpdateModal;