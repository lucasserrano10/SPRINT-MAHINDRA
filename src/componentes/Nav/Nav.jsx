import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Nav/Nav.css';

function Menu() {
    return (
        <Navbar expand="lg" className="nav-bar bg-body-tertiary mb-0"> {/* Remove a margem inferior do Navbar */}
            <Container fluid>
                <Navbar.Brand href="#" className='brand-link'>CODETECH</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            Mahindra Race
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="nav-canvas justify-content-start flex-grow-1 pe-3">
                            <Nav.Link href="#action1" className='link ms-5 fs-5'>Home</Nav.Link>
                            <Nav.Link href="#action2" className='link ms-5 fs-5'>Equipe</Nav.Link>
                            <Nav.Link href="#action2" className='link ms-5 fs-5'>Contato</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Pesquisar..."
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger">Buscar</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Menu;
