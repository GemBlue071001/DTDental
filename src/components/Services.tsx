import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Services.css';
import service1Image from '../assets/dtdentalservice1.jpg';
import service2Image from '../assets/dtdentalservice2.jpg';
import service3Image from '../assets/dtdentalservice3.jpg';

const servicesData = [
  {
    id: 1,
    title: 'Basic Service',
    price: '$99.00',
    image: service1Image,
  },
  {
    id: 2,
    title: 'Intermediate Service',
    price: '$149.00',
    image: service2Image,
  },
  {
    id: 3,
    title: 'Advanced Service',
    price: '$199.00',
    image: service3Image,
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <h1 className="services-header">Services</h1>
      <div className="page-content">
        <Container fluid style={{ padding: 0 }}>
          <Row className="services-row">
            {servicesData.map((service) => (
              <Col key={service.id} lg={4} md={4} sm={12} className="service-col">
                <div className="service-card">
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-info">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-price">{service.price}</p>
                    <Button className="service-book-btn">BOOK</Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}
