import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function EpiflixHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/src/assets/img/logo.png"
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  d-flex flex-row .justify-content-center">
            <div className="d-flex flex-row pe-5">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </div>
            <div className="d-flex flex-rox pe-5">
              <Nav.Link href="#link">Kids</Nav.Link>
              <Nav.Link href="#link">Icon</Nav.Link>
              <Nav.Link href="#link">Icon</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EpiflixHeader;
