import React from "react";
import { Container, Row, Col, Form, Table } from "react-bootstrap";
import golfIcon from "../../assets/images/golfIcon.svg";
import footballIcon from "../../assets/images/footballIcon.svg";
import judoIcon from "../../assets/images/judoIcon.svg";

const scheduleData = [
  {
    time: "08:30:00",
    sports: "Golf",
    events: "Men's Individual",
    round: "Round 3",
    venue: "Indira Gandhi International Sports Stadium",
    icon: golfIcon,
  },
  {
    time: "09:15:00",
    sports: "Football",
    events: "Men's Team",
    round: "League",
    venue: "Haldwani Sports Stadium",
    icon: footballIcon,
  },
  {
    time: "10:30:00",
    sports: "Judo",
    events: "Women's 48kg",
    round: "Elimination",
    venue: "Indira Gandhi International Sports Stadium",
    icon: judoIcon,
  },
  {
    time: "07:00:00",
    sports: "Golf",
    events: "Women's 48kg",
    round: "Elimination",
    venue: "Haldwani Sports Stadium",
    icon: golfIcon,
  },
  {
    time: "10:30:00",
    sports: "Judo",
    events: "Women's 48kg",
    round: "Elimination",
    venue: "Indira Gandhi International Sports Stadium",
    icon: judoIcon,
  },
  {
    time: "10:30:00",
    sports: "Judo",
    events: "Women's 48kg",
    round: "Elimination",
    venue: "Indira Gandhi International Sports Stadium",
    icon: judoIcon,
  },
];
function Schedule() {
  return (
    <Container fluid className="schedule-section">
      <Row className="mb-3 align-items-center">
        <Col>
          <h2 className="schedule-title">SCHEDULE</h2>
        </Col>
        <Col xs="auto" className="schedule-filters">
          <Form.Select className="me-2">
            <option>Select Date</option>
          </Form.Select>
          <Form.Select>
            <option>All Games</option>
          </Form.Select>
        </Col>
      </Row>
      <div className="schedule-table-container">
        <Table responsive className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Sports</th>
              <th>Events</th>
              <th>Round/Pool</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.sports}
                        className="sport-icon me-2"
                      />
                    )}
                    <span>{item.time}</span>
                  </div>
                </td>
                <td>{item.sports}</td>
                <td>{item.events}</td>
                <td>{item.round}</td>
                <td>{item.venue}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Schedule;
