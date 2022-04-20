import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar collapseOnSelect bg="light" expand="lg" variant="light" className='mb-5'>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">Accounts App</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">                            
                            <NavLink to="/" className={({ isActive }) => isActive ? "activeLink nav-link" : 'nav-link'}>Accounts</NavLink>
                            <NavLink to="/new" className={({ isActive }) => isActive ? "activeLink nav-link" : 'nav-link'}>New Account</NavLink>
                            <NavLink to="/actions" className={({ isActive }) => isActive ? "activeLink nav-link" : 'nav-link'}>Edit/Delete</NavLink> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
