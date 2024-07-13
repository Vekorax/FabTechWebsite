import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

function Navigationbar({ t }){
  let navigate = useNavigate();
  const changeRoute = () => {
      let path = "/contactme";
      navigate(path);
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

    return(
      <>
        <Navbar id="navbar" key="md" expand="md" className="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand href="/">Fab's PC</Navbar.Brand>
            <Dropdown>
              <Dropdown.Toggle className='btn-green' id="dropdown-basic">
                {t('language')}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className="drop" onClick={() => changeLanguage('fr')}>Français</Dropdown.Item>
                <Dropdown.Item className="drop" onClick={() => changeLanguage('en')}>English</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Fab's PC
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/reviews">{t('review')}</Nav.Link>
                  <Nav.Link href="/builds">{t('inventory')}</Nav.Link>
                  <Nav.Link href="/services">{t('services')}</Nav.Link>
                </Nav>
                <Button onClick={changeRoute} className='btn-green'>{t('contactme')}</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </>
    );
}

export default withNamespaces()(Navigationbar);