import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="page-content">
        <Container fluid style={{ padding: 0 }}>
          <Row className="footer-row">
            <Col md={3} className="footer-brand-col">
              <h3 className="footer-brand">DT Dental</h3>
            </Col>
            <Col md={2} className="footer-links-col">
              <h4 className="footer-heading">Explore</h4>
              <ul className="footer-links">
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/services">Services</Link></li>
              </ul>
            </Col>
            <Col md={2} className="footer-links-col">
              <h4 className="footer-heading">Follow us</h4>
              <ul className="footer-links">
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#instagram">Instagram</a></li>
              </ul>
            </Col>
            <Col md={5} className="footer-newsletter-col">
              <p className="newsletter-text">
                Sign up with your email address to receive news and updates.
              </p>
              <Form className="newsletter-form">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  className="newsletter-input"
                />
                <Button className="newsletter-btn">SIGN UP</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
