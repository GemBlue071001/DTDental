import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="page-content">
        <Container fluid style={{ padding: 0 }}>
          <Row className="contact-row">
            <Col md={5} className="contact-info">
              <h2 className="contact-title">Contact Us</h2>
              <p className="contact-subtitle">
                Interested in working together? Fill out some info and we will be
                in touch shortly. We can't wait to hear from you!
              </p>
            </Col>
            <Col md={7} className="contact-form-container">
              <Form className="contact-form">
                <Row>
                  <Col md={6} className="form-group-col">
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" className="form-input" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="form-group-col">
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" className="form-input" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mt-3">
                  <Form.Label>Email (required)</Form.Label>
                  <Form.Control type="email" required className="form-input" />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Message (required)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    required
                    className="form-input"
                  />
                </Form.Group>
                <Button className="contact-send-btn mt-4">SEND</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
