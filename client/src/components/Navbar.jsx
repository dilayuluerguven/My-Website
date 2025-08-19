import { useState, useEffect } from "react";
import {
  RocketOutlined,
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  UserOutlined,
  CodeOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { HashLink } from "react-router-hash-link";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../css/Navbar.css"

export default function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setExpanded(expanded ? false : true);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="brand">
          <div className="icon-wrapper">
            <RocketOutlined className="rocket-icon" />
          </div>
          <span className="brand-text">Dilay Uluergüven</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNavbar}
          className="navbar-toggle"
        >
          {expanded ? <CloseOutlined /> : <MenuOutlined />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={HashLink}
              smooth
              to="/#home"
              onClick={closeNavbar}
              className="nav-link"
            >
              <HomeOutlined className="nav-icon" />
              <span>Home</span>
              <div className="link-underline"></div>
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/#about"
              onClick={closeNavbar}
              className="nav-link"
            >
              <UserOutlined className="nav-icon" />
              <span>About</span>
              <div className="link-underline"></div>
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/#projects"
              onClick={closeNavbar}
              className="nav-link"
            >
              <CodeOutlined className="nav-icon" />
              <span>Projects</span>
              <div className="link-underline"></div>
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/#contact"
              onClick={closeNavbar}
              className="nav-link"
            >
              <ContactsOutlined className="nav-icon" />
              <span>Contact</span>
              <div className="link-underline"></div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
