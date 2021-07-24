import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import logo from '../logo.svg';

function NavBar() {
    return (
        <div>
            <Navbar fixed="top" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""/>{' '}
                        Tienda FutFem
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Inicio</Nav.Link>
                                <Nav.Link href="#link">Nosotros</Nav.Link>
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Tazas</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Cuadros</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Rompecabezas</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Jugadoras</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar
