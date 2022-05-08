import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    // Sign out process 
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="danger">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"} className='text-white'>Bike House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to={"/home"} className='text-white'>Home</Nav.Link>


                            <Nav.Link as={Link} to={"/blog"} className='text-white'>Blog</Nav.Link>
                            {
                                user ? <Nav.Link as={Link} to={"/my-item"} className='text-white'>My Bikes</Nav.Link>

                                    : ''
                            }
                            {
                                user ? <Nav.Link as={Link} to={"/manage-inventory"} className='text-white'>Manage Bikes</Nav.Link>

                                    : ''
                            }
                            {
                                user ? <Nav.Link as={Link} to={"/add-new"}>Add New Bike</Nav.Link>

                                    : ''
                            }
                            {
                                user ? <Nav.Link onClick={handleSignOut} className='text-white'>Logout</Nav.Link>

                                    : <Nav.Link as={Link} to={"/login"} className='text-white'>Login</Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;