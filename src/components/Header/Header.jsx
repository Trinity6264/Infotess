import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Nav, Card, Navbar, NavDropdown } from 'react-bootstrap'
import './Header.css'
import TopNavBar from './TopNavBar'
import Logo from '../../img/logo.png'

const Header = () => {
    return (
        <header>
            <TopNavBar />
            <Container >
                <Row>
                    <Navbar expand="md" className='navbar ' >
                        <Container >
                            <Row className='align-items-center justify-content-between'>
                                <Col>
                                    <Navbar.Brand >
                                        <Link to='/#home'>
                                            <img src={Logo} alt="Logo" style={{ width: '2.8rem' }} />
                                        </Link>
                                    </Navbar.Brand>
                                </Col>
                                <Col>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav" >
                                        <Nav className="me-auto">
                                            <Nav.Link href="#home">Home</Nav.Link>
                                            <Nav.Link href="#link">Link</Nav.Link>
                                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">
                                                    Separated link
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Col>
                            </Row>
                        </Container>
                    </Navbar>
                </Row>

            </Container>
        </header>
    )
}

export default Header