import React from "react";
import Stadium from "../../assets/images/Stadium.svg";
import Globe from "../../assets/images/Globe.png";
import { Container, Card, Button, Dropdown } from "react-bootstrap";

function CompetitionZone() {
  return (
    <Container fluid className="competition-zone">
      <div className="competition-row">
        <Card>
          <h1>Competition Zone</h1>
          <Card.Img variant="top" src={Stadium} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              ild on the card title and make up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Button>Explore</Button>
            <Button>Venue</Button>
          </Card.Body>
        </Card>

        <div md={6} className="right-section">
          <Dropdown className="country-dropdown">
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Select a country
            </Dropdown.Toggle>
            <Dropdown.Menu>{/* Add country options here */}</Dropdown.Menu>
          </Dropdown>
          <div className="map-container">
            <img src={Globe} alt="Globe" className="globe-image" />
            <div className="location-marker">
              <span className="marker-text">DELHI</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CompetitionZone;
