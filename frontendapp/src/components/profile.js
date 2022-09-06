import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col,Container,Row} from "react-bootstrap";
function profile() {
    const firstname="Sathwika";
    const lastname="Chanduri";
    const email="sathwikachanduri@gmail.com";
  return (
    <div>

      <Container>

        <h1 className="shadow-sm text-sucess mt-5 p-3 text-center rounded">MY PROFILE</h1>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
    <Form>
      <Form.Group className="mb-3" controlId="formbasicFirstName">
        <Form.Label>FirstName :  </Form.Label>
        <Form.Label>{firstname}</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>LastName :  </Form.Label>
        <Form.Label>{lastname}</Form.Label>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Enter Email :  </Form.Label>
        <Form.Label>{email}</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Old Password :  </Form.Label>
        <Form.Control type="Old Password" placeholder=" Enter password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>New Password :  </Form.Label>
        <Form.Control type="New Password" placeholder=" Enter password" />
      </Form.Group>
      
      <Button variant="primary" type="Update">
        Update
      </Button>
    </Form>
    </Col>
   </Row>
    </Container>
    </div>
  );
}

export default profile;