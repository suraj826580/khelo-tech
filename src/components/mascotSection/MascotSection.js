import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import purple from "../../assets/images/purple.png";

const MascotSection = () => {
  return (
    <Container fluid className="mascot-section">
      <Row className="align-items-center">
        <Col md={6} className="text-column">
          <h2>Hi! I am</h2>
          <h1>THE MASCOT</h1>
          <p>
            Meet Himalayan Monal: The Mascot for the 38th National Games
            Uttarakhand 2024, known as the Impayan Monal. This bird is also the
            state bird of Uttarakhand.
          </p>
          <Button variant="primary">MEET MASCOT</Button>
        </Col>
        <Col md={6} className="image-column">
          <div className="mascot-image-placeholder">
            <img src={purple} alt="purple" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MascotSection;
