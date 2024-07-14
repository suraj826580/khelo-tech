// import React from "react";
import Stadium from "../../assets/images/Stadium.svg";
import Globe from "../../assets/images/Globe.png";
// import { Container, Card, Button, Dropdown } from "react-bootstrap";

// function CompetitionZone() {
//   return (
//     <Container fluid className="competition-zone">
//       <div className="competition-row">
//         <Card>
//           <h1>Competition Zone</h1>
//           <Card.Img variant="top" src={Stadium} />
//           <Card.Body >
//             <Card.Title>Card Title</Card.Title>
//             <Card.Text>
//               ild on the card title and make up the bulk of the card's content.
//             </Card.Text>
//           </Card.Body>
//           <Card.Body>
//             <Button>Explore</Button>
//             <Button>Venue</Button>
//           </Card.Body>
//         </Card>

//         <div md={6} className="right-section">
//           <Dropdown className="country-dropdown">
//             <Dropdown.Toggle variant="dark" id="dropdown-basic">
//               Select a country
//             </Dropdown.Toggle>
//             <Dropdown.Menu>{/* Add country options here */}</Dropdown.Menu>
//           </Dropdown>
//           <div className="map-container">
//             <img src={Globe} alt="Globe" className="globe-image" />
//             <div className="location-marker">
//               <span className="marker-text">DELHI</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default CompetitionZone;

import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaLinkedinIn,
} from "react-icons/fa";
import FootballPlayer from "../../assets/images/FootballPlayer.png";
import { Button, Card } from "react-bootstrap";

const CompetitionZone = () => {
  return (
    <div className="follow-us-container">
      <div className="competition-zone">
        <h2 style={{ fontWeight: "100px" }}>Competition Zone</h2>
        <div className="social-icons">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Stadium} />
            <Card.Body style={{ backgroundColor: "red" }} className="card-body">
              <Card.Title>Delhi</Card.Title>
              <Card.Text>
                The Indira Gandhi Arena, formerly known as the Indraprashtha
                Stadium, is located at the Indraprastha Estate in the eastern
                region of New Delhi. It is the largest indoor sports arena in
                India and among the largest in Asia.
              </Card.Text>
              <Button variant="primary">Explore</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="follow-us-image">
        <img src={Globe} alt="Athlete with football" />
      </div>
    </div>
  );
};

export default CompetitionZone;
