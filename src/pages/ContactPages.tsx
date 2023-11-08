
import { Col, Container, Form, Row, Button } from "react-bootstrap";

function ContactPages() {
  return (
    <div className="contact-page-element">
      <Container>
        <h2 className="title-heading">Contact.</h2>
        <p className="text-title">
          Get in touch or shoot me an email directly on{" "}
          <strong className="fw-bold">dadifarisa08@gmail.com</strong>{" "}
        </p>
        <Row>
          <Col xs="8">
        <Form>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Control size="lg" type="email" placeholder="Nama" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Control size="lg" type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="Massage">
            <Form.Control size="lg" as="textarea" rows={3}  placeholder="Massage"/>
          </Form.Group>
        </Form>
        <Button className="element-button-contact">Send Message</Button>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPages;
