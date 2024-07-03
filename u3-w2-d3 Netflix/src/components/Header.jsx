import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import TvShows from "./TvShows";

function Header() {
  return (
    <Navbar expand="lg" className="customNav">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="100px" height="55px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
            <Link to="/tvshows" className="nav-link text-white">
              TV Shows
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
