import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='bg-black'>
                <Container>
                    <Navbar.Brand as={Link} to={"/home"}>Bike House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to={"/home"} className='text-white'>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/manage-inventory"} className='text-white'>Manage Item</Nav.Link>
                            <Nav.Link as={Link} to={"/my-item"} className='text-white'>My Item</Nav.Link>
                            <Nav.Link as={Link} to={"/blog"} className='text-white'>Blog</Nav.Link>
                            <Nav.Link as={Link} to={"/login"} className='text-white'>Login</Nav.Link>
                            <Nav.Link as={Link} to={"/signup"} className='text-white'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;