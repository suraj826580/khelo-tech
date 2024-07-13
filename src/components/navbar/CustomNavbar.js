import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import uttrakhandLogo from "../../assets/images/uttrakhand-logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";

function CustomNavbar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <div className="navbar-content">
        <div className="left-section">
          <Icon
            icon="icon-park-outline:hamburger-button"
            width="1.2em"
            height="1.2em"
            color="#fff"
          />
          <Navbar.Brand href="#home" className="nav-item">
            Menu
          </Navbar.Brand>
        </div>

        <div className="center-section">
          <img src={uttrakhandLogo} alt="Uttrakhand Logo" height="70" />
        </div>

        <div className="right-section">
          <Nav className="mr-auto">
            <Nav.Link href="#navigation" className="nav-item">
              Navigation
            </Nav.Link>
            <Nav.Link href="#ticketing" className="nav-item">
              Ticketing
            </Nav.Link>
            <Nav.Link href="#shop" className="nav-item">
              Shop
            </Nav.Link>
            <Nav.Link href="#login" className="nav-item">
              Login
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="search-bar"
            />
          </Form>
        </div>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
