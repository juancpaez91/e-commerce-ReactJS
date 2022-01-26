import { Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import CarritoCompras from "../Icons/CarritoCompras";
import "./NavBar.css" 


const BTNavBar = () => {
    return (
        <Navbar className="NavStyle container-fluid" expand="lg">
            <Container>
                <Navbar.Brand href="#home">My e-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CarritoCompras/>
            </Container>
        </Navbar>
    )

};

export default BTNavBar;
