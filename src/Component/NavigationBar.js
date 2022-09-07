import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NewsWeb</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#features">Business</Nav.Link>
            <Nav.Link href="#features">Entertainment</Nav.Link>
            <Nav.Link href="#features">General</Nav.Link>
            <Nav.Link href="#features">Health</Nav.Link>
            <Nav.Link href="#features">Science</Nav.Link>
            <Nav.Link href="#features">Sport</Nav.Link>
            <Nav.Link href="#features">Technology</Nav.Link>
     </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;