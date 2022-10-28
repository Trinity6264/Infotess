import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Nav, Card, Navbar, NavDropdown, Dropdown, Image } from 'react-bootstrap'
import './Header.css'
import TopNavBar from './TopNavBar'
import Logo from '../../img/logo.png'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

const Header = () => {
    return (
        <header>
            <TopNavBar />
            <Container>
            <Navbar className='navbar' sticky='top' style={{top:'20px'}} fluid expanded expand={true}>

                    <Navbar.Brand href='#home' className='nav-logo-wrapper'>
                        <Image fluid src={Logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className='justify-content-end'>
                    <div className='drop'>

                    </div>
                    </Navbar.Collapse>
                
            </Navbar>

            </Container>
        </header>
    )
}

export default Header