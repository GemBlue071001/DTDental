import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Hero.css';
import heroImage from '../assets/dtdentalhero.webp';

export default function Hero() {
  return (
    <section className="hero-section">
      <Container fluid style={{ padding: 0, height: '100%' }}>
        <Row className="hero-row">
          <Col md={6} className="hero-content">
            <h1 className="hero-title">Your Smile Deserves the Best Care</h1>
            <p className="hero-description">
              Welcome to your go-to hub for all things oral and dental care!
              We're here to ensure your smile is as bright and healthy as
              possible with tips, insights, and resources designed just for you.
            </p>
            <Button className="learn-more-btn">LEARN MORE</Button>
          </Col>
          <Col md={6} className="hero-image">
            <img
              src={heroImage}
              alt="Dental Care Products"
              className="hero-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
