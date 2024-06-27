import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigationbar(){
    return(
      <>
        <Navbar id="navbar" key="md" expand="md" className="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand href="#">Fab Tech</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Fab Tech
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Avis</Nav.Link>
                  <Nav.Link href="#action2">Inventaire</Nav.Link>
                  <Nav.Link href="#action2">Services</Nav.Link>
                </Nav>
                <Button className='btn-green'>Me Contacter</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </>
    );
}

export default Navigationbar;