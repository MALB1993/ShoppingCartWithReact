import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// import SearchProduct from "../../pages/products/SearchProduct";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                        
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/action3">Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    
                    {/* <SearchProduct /> */}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
