import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

export function Header() {
  return (
    <Row className="header">
      <Col>
        <h1>2024</h1>
        <p>NATIONAL GAMES 2024</p>
      </Col>
      <Col className="text-end">
        <Button variant="outline-light">DOWNLOAD THE APP</Button>
      </Col>
    </Row>
  );
}

export function Navigation() {
  const navItems = [
    "Home",
    "Schedule and Results",
    "Medal Tally",
    "Media",
    "Visit",
    "Teams",
    "Milestones",
    "Games Culture",
  ];
  return (
    <div className="navigation">
      {navItems.map((item, index) => (
        <a key={index} href="#" className="nav-link">
          {item}
        </a>
      ))}
    </div>
  );
}

export function Sports() {
  const sports = [
    "Aquatics",
    "Swimming",
    "Diving",
    "Water Polo",
    "Archery",
    "Athletics",
    "Badminton",
    "Basketball",
    "Boxing",
    "Canoeing",
    "Canoe - Sprint",
    "Canoe - Slalom",
    "Kayaking",
    "Rowing",
    "Cycling",
    "BMX",
    "Road Racing",
    "Track Racing",
    "Equestrian",
    "Fencing",
    "Football",
    "Golf",
    "Gymnastics",
    "Handball",
    "Hockey",
    "Judo",
    "Kabaddi",
    "Karate-Do",
    "Kho- Kho",
    "Netball",
    "Rugby Sevens",
    "Sailing",
    "Sepaktakraw",
    "Shooting",
    "Shooting Rifle",
    "Shooting Pistol",
    "Shooting Shotgun",
    "Squash",
    "Table Tennis",
    "Taekwondo",
    "Tennis",
    "Triathlon",
    "Volleyball",
    "Beach Volleyball",
    "Weightlifting",
    "Wrestling",
    "Wushu",
    "Synchronized Swimming",
  ];

  return (
    <div className="sports">
      <h2>SPORTS</h2>
      <div className="sports-list">
        {sports.map((sport, index) => (
          <a key={index} href="#" className="sport-link">
            {sport}
          </a>
        ))}
      </div>
    </div>
  );
}

export function UkgocInfo() {
  return (
    <div className="ukgoc-info">
      <h3>UKGOC INFO</h3>
      <p>Director Sports, Uttarakhand</p>
      <p>Maharana Pratap Sports College Campus,Raipur,Dehradun</p>
      <p>Pin: 248008</p>
      <p>Ph: 0135-2781414</p>
      <p>Email: uttarakhandgamesofficial@gmail.com</p>
      <Button variant="outline-light">DOWNLOAD THE APP</Button>
      <div className="app-store-buttons">
        <img src="path-to-app-store-button.png" alt="App Store" />
        <img src="path-to-google-play-button.png" alt="Google Play" />
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <FaTwitter />
        <FaFacebookF />
        <FaInstagram />
        <FaTiktok />
        <FaLinkedinIn />
      </div>
      <p>COPYRIGHT © UTTARAKHAND NATIONAL GAMES ORGANIZING COMMITTEE</p>
      <p>VISITORS: 5553232 PRIVACY</p>
    </div>
  );
}
