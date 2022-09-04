import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Loanform() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Loan type</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>select loan type</option>
          <option value="1">home</option>
          <option value="2">personal</option>
          <option value="3">car loan</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Loan period</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>select loan duration</option>
          <option value="1">10</option>
          <option value="2">11</option>
          <option value="3">12</option>
        </Form.Select>
      </Form.Group> 

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Loanform;