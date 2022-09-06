import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function profile() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formbasicFirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="FirstName" placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="LastName" placeholder="LastName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Check type="Email" label="Enter Email" />
      </Form.Group>
      <Button variant="primary" type="update">
        update
      </Button>
    </Form>
  );
}

export default profile;