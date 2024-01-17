import Form from 'react-bootstrap/Form';

function FormTextExample() {
  return (
    <>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
      </Form.Text>
    </>
  );
}

export default FormTextExample;