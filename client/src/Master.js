import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/Master.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Master() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" mg="5%">
        <Container calssName="main-navbar">
          <Navbar.Brand href="/">SPC_2</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/overview">Overview</Nav.Link>
              <Nav.Link href="/history">History</Nav.Link>
              <Nav.Link href="/email">Set Email</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Master;
