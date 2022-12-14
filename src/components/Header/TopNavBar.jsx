import React from 'react'
import { FaEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
const TopNavBar = () => {
    return (
        <nav className="top-nav">
            <Container className="container">
                <ul>
                    <li><a href="mailto:infotessofficial@gmail.com" target="_blank" rel='noopener noreferrer'> <FaEnvelope /></a></li>
                    <li><a href="https://twitter.com/InfotessO" target="_blank" rel='noopener noreferrer'><FaTwitter /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCYqGVwdeakfXR1lqjQGSp_A" target="_blank" rel='noopener noreferrer'><FaYoutube /></a></li>
                </ul>
            </Container>
        </nav>
    )
}

export default TopNavBar