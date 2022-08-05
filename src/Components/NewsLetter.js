import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

function NewsLetter({ onValidated, status, message }) {
  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <Form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Addres" />
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}

export default NewsLetter;
