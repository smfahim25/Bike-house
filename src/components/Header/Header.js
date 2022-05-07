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
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={"/home"}>Bike House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>


                            <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
                            {
                                user ? <Nav.Link as={Link} to={"/my-item"}>My Bike</Nav.Link>

                                    : ''
                            }
                            {
                                user ? <Nav.Link as={Link} to={"/manage-inventory"}>Manage Bikes</Nav.Link>

                                    : ''
                            }
                            {
                                user ? <Nav.Link as={Link} to={"/add-new"}>Add New Bike</Nav.Link>

                                    : ''
                            }
                            {
                                user ? <Nav.Link onClick={handleSignOut} >Logout</Nav.Link>

                                    : <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;