import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="primary" expand="lg" variant="light">
      <Navbar.Brand as={Link} to="/">
        VEHICLE SERVICE MANAGEMENT
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/create-user">
            Create USER
          </Nav.Link>
          <Nav.Link as={Link} to="/list-user">
            List USER
          </Nav.Link>
          <Nav.Link as={Link} to="/mechanic-list">
            List MECHANICS
          </Nav.Link>
          <Nav.Link as={Link} to="/mechanic-create">
            Create MECHANICS
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Log out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
