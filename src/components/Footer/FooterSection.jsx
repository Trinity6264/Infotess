import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineHome, AiOutlinePhone} from 'react-icons/ai'
import { FaEnvelope } from 'react-icons/fa'
import './FooterStyle.css'
import PlayStore from '../../img/google-play-badge.png'

const FooterSection = () => {
    return (
        <footer className='section'>
            <Container >
                <Row className='justify-content-around row '>
                    <Col md='5' sm='12' className=''>
                        <div className="contact-us">
                            <h3 className="widget-title">Contact Us</h3>
                            <div className="contact-list">
                                <li>
                                    <AiOutlineHome className='i' />
                                    <span>INFOTESS, Aamusted, P.O.Box
                                        1277, Kumasi - Ghana. </span>
                                </li>
                                <li style={{display: 'flex'}}>
                                    <AiOutlinePhone className='i' />
                                    <span style={{display: 'flex',flexDirection:'column', color:'#999'}}>
                                        <a href="tel:+233540520156">+233(0)54 0520 156</a> 
                                        <a  href="tel:+233243548887">+233(0)24 3548 887</a>
                                    </span>
                                </li>
                                <li>
                                    <FaEnvelope className='i' /> <span><a href="mailto:aamustedinfotess@gmail.com">Email us</a></span>
                                </li>
                            </div>
                        </div>
                    </Col>
                    <Col md='3' sm='12' className=''>
                        <h3 className="widget-title">Useful Links</h3>
                        <div >
                            <li><a target="_blank" rel="noreferrer" href="https://aamusted.edu.gh/">Aamusted Website</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://instagram.com/myinfotess?igshid=YmMyMTA2M2Y=">Infotess Instagram</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100074619553556&mibextid=ZbWKwL">Infotess Facebook</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://twitter.com/myinfotess">Infotess Twitter</a></li>
                            
                        </div>
                    </Col>
                    <Col md='4' sm='12' className=''>
                        <h3 className="widget-title">Explore</h3>
                        <div className="tagcloud">
                            <a target="_blank" rel="noreferrer" href="https://www.netacad.com/" className="tag-link">NETACAD</a>
                            <a target="_blank" rel="noreferrer" href="https://www.udacity.com/" className="tag-link">UDACITY</a>
                            <a target="_blank" rel="noreferrer" href="https://www.ipmcghana.com/" className="tag-link">IPMC</a>
                            <a target="_blank" rel="noreferrer" href="https://www.niitghana.com/" className="tag-link">NIIT</a>
                            <a target="_blank" rel="noreferrer" href="https://edu.google.com/" className="tag-link">GOOGLE EDUCATION</a>
                            <a target="_blank" rel="noreferrer" href="https://techdevguide.withgoogle.com/" className="tag-link">GOOGLE TECH DEV GUIDE</a>
                            <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/" className="tag-link">STACKOVERFLOW</a>
                            <a target="_blank" rel="noreferrer" href="https://vodafone.com.gh/" className="tag-link">VODAFONE GH</a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/" className="tag-link">GITHUB</a>
                        </div>
                    </Col>
                    {/* <Col md='3' sm='12' className='sm-mt-5'>
                        <div className="block-subscribe">
                            <h3 className="widget-title">Download App</h3>
                            <p style={{  color: '#999'}}>Download Infotess Online Now </p>
                            <a href="https://play.google.com/store/apps/details?id=pastech.infotess.mim&amp;hl=en" target="_blank" rel="noreferrer">
                                <img src={PlayStore} alt="Play Store Badge" className='img-fluid' />

                            </a>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </footer>
    )
}

export default FooterSection