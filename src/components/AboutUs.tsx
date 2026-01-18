import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="page-content">
        <Container fluid style={{ padding: 0 }}>
          <Row className="about-row">
            <Col md={6} className="about-image">
              <img
                src="/src/assets/dtdentalaboutus.webp"
                alt="Dental Care Products"
                className="about-img"
              />
            </Col>
            <Col md={6} className="about-content">
              <h2 className="about-title">Who we are</h2>
              <p className="about-description">
                Welcome to our dental family, where your smile is our top priority! 
                We're here to ensure that your oral care journey is comfortable and 
                stress-free, with a focus on personalized, expert service you can trust.
              </p>
              <Button className="about-learn-btn">LEARN MORE</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
