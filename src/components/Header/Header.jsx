import React from 'react'
import { Container, Navbar, Image } from 'react-bootstrap'
import './Header.css'
import TopNavBar from './TopNavBar'
import Logo from '../../img/logo.png'
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom'



const Header = () => {
    const nav = useNavigate()
    return (
        <header>
            <TopNavBar />
            <Navbar bg="light" expand="lg" style={{width: '100%'}}>
                <Container>
                    <Navbar.Brand onClick={()=> nav('/')} style={{cursor:'pointer'}}>
                        <Image src={Logo} style={{ width: '3rem' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center justify-content-center gap-3">
                            <Link to={'/'}>
                                Home
                            </Link>
                            <Link to={'/courses'}>
                                Courses
                            </Link>
                            <Link to={'/resources'}>
                                Resources
                            </Link>
                            <Link to={'/gallery'}>
                                Gallery
                            </Link>
                            <Link to={'/contact'}>
                                Contact
                            </Link>

                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <NavDropdown.Item> <Link to={'/about/society'}>Society</Link></NavDropdown.Item>
                                <NavDropdown.Item> <Link to={'/about/team'}>Our Team</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header