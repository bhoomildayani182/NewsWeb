import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">NewsWeb</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
            <Nav.Link href="/general">General</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/science">Science</Nav.Link>
            <Nav.Link href="/sport">Sport</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
     </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;