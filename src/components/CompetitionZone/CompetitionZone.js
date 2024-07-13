import React from "react";
import Statdium from "../../assets/images/Stadium.png";
import Globe from "../../assets/images/Globe.png";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";

function CompetitionZone() {
  return (
    <Container fluid className="competition-zone">
      <Row>
        <Col md={6} className="left-section">
          <h1>COMPETITION ZONE</h1>
          <Card className="venue-card">
            <Card.Img variant="top" src={Statdium} />
            <Card.Body>
              <Card.Title>DELHI</Card.Title>
              <Card.Text>
                The Indira Gandhi Arena, formerly known as the Indraprastha
                Stadium, is located at the Indraprastha Estate in the eastern
                region of New Delhi. It is the largest indoor sports arena in
                India and among the largest in Asia.
              </Card.Text>
              <Button variant="light">EXPLORE</Button>
            </Card.Body>
            <div className="venue-indicator">1 VENUE</div>
          </Card>
          <div className="navigation-dots">
            {/* Add navigation dots here */}
          </div>
        </Col>
        <Col md={6} className="right-section">
          <Dropdown className="country-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select a country
            </Dropdown.Toggle>
            <Dropdown.Menu>{/* Add country options here */}</Dropdown.Menu>
          </Dropdown>
          <div className="map-container">
            {/* Add your map component or image here */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CompetitionZone;
