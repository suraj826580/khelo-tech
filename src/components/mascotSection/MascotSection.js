import React from "react";
import { Container, Button } from "react-bootstrap";
import purple from "../../assets/images/purple.png";

const MascotSection = () => {
  return (
    <Container fluid className="mascot-section">
      <div style={{ padding: "50px" }}>
        <div className="mascot-container">
          <div md={6} className="mascot-content">
            <h2>HI! I AM</h2>
            <h1>THE MASCOT</h1>
            <p>
              Meet Himalayan Monal: The Mascot for the 38th National Games
              Uttarakhand 2024. Known as the Impayan Monal. This bird is also
              the state bird of Uttarakhand.
            </p>
            <Button variant="primary" className="meet-mascot-btn">
              MEET MASCOT →
            </Button>
          </div>
          <div md={6} className="mascot-image-container p-0">
            <div className="mascot-image">
              <img src={purple} alt="purple background" />
              <div className="mascot-arch"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MascotSection;
