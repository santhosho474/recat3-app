import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function UserAppNavBar() {
    return (
      <Navbar bg="primary" expand="lg" variant="light">
        <Navbar.Brand as={Link} to="/">
          VEHICLE SERVICE MANAGEMENT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/user">
              USER
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              LOG OUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }