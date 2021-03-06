import React, { Component } from 'react';
import { Button, Row, Col, Image, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



class AboutCard extends Component {
  render() {
    return (
      <Container>
        <Card className='m-3' border="dark" style={{ minHeight:'580px', minWidth: '500', boxShadow: '3px 3px 2px 2px #0000003f'}}>
          <Card.Header style={{
                textAlign: 'center', 
                fontSize: '2.2em', 
                fontWeight: 'bold', 
                backgroundColor: '#98f5e1',
          }}>{this.props.bio.name}
            <img src='./img/white-egg8bit.png' alt='open egg icon' style={{ marginLeft: '.5rem', width: '1.5rem' }} />
          </Card.Header>
          <Card.Body>
            <Image roundedCircle className='px-5' fluid variant="top" style={{ width: '45rem' }} src={this.props.bio.image} />
                <Card className='m-3' style={{boxShadow: '3px 3px 2px 2px #0000003f'}}>
              <Card.Text className='p-3' style={{ fontSize: '1.3em', textAlign: 'left', minHeight: '14rem' }}>
                  {this.props.bio.about}
                </Card.Text>
                </Card>
          </Card.Body>
          <Card.Footer style={{
                textAlign: 'center', 
                fontWeight: 'bold', 
                backgroundColor: '#cfbaf0',
                }}>
            <Row>
              <Col className='text-center m-2'><Button variant="dark" style={{ fontSize: '1.2em',  boxShadow: '3px 3px 2px 2px #0000003f' }} href={this.props.bio.githubLink}>GitHub</Button></Col>
              <Col className='text-center m-2'><Button variant="outline-info" style={{ fontSize: '1.2em', backgroundColor: 'white',  boxShadow: '3px 3px 2px 2px #0000003f'}} href={this.props.bio.linkedinLink}>LinkedIn</Button></Col>
            </Row>        
          </Card.Footer>
        </Card>
      </Container>
    );
  }
}

export default AboutCard;

