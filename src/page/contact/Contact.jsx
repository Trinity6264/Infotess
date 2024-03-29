import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageHeader from '../../components/page_header/PageHeader'
import './style/ContactStyle.css'
import { FaMapPin, FaMobileAlt, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa'
const Contact = () => {
    return (
        <>
            <PageHeader currentPage={'Contact'} hasCurrentPage={false} page={'Contact'} pageTitle={'Contact'} />
            <section className="section contact">
                <div className="map-wrapper">
                    <iframe
                        title={'Google Map'}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.581467362356!2d-1.684942184674197!3d6.698644122959516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9934fe42a1dd%3A0x801887bad41bd897!2sINFOTESS%20Aamusted!5e0!3m2!1sen!2sgh!4v1580778764780!5m2!1sen!2sgh"
                        width="100%" height="100%" frameborder="0" style={{ boxShadow: "0 2px 5px 0 rgba(0,0,0,.2)" }}
                        allowFullScreen>

                    </iframe>
                </div>
                <Container>
                    <Row className='mt-2'>
                        <Col md={'4'} sm={'12'} xs={'12'} className={'mt-2'}>
                            <div className="contact-item-wrapper">
                                <h4>Address</h4>
                                <div className="info">
                                    <div className="icon">
                                        <FaMapPin className='ic' />
                                    </div>
                                    <p><span>AAMUSTED INFOTESS, P.O BOX 1277 KUMASI-GHANA</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={'4'} sm={'12'} xs={'12'} className={'mt-2'}>
                            <div className="contact-item-wrapper">
                                <h4>Phone</h4>
                                <div className="info">
                                    <div className="icon">
                                        <FaMobileAlt className='ic' />
                                    </div>
                                    <p>
                                        <a href="tel:+233540520156">+233(0)54 0520 156</a>
                                        <br />
                                        <a href="tel:+233243548887">+233(0)24 3548 887</a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={'4'} sm={'12'} xs={'12'} className={'mt-2'}>
                            <div className="contact-item-wrapper">
                                <h4>E-mail</h4>
                                <div className="info">
                                    <div className="icon">
                                        <FaEnvelope className='ic' />
                                    </div>
                                    <p>
                                        <a href="mailto:aamustedinfotess@gmail.com">infotessofficial@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="contact-info mt-5">
                    <Container className='center-block'>
                        <Row>
                            <Col>
                                <div class="header-wrap text-center">
                                    <h3 style={{ fontSize: '2.3rem', fontWeight: 'bold', color: '#333' }}>Social Media Handles</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col xs={'12'} md={'2'} className={'mt-3'}>
                                <div className="contact-item-wrapper">
                                    <div className="info">
                                        <a href="https://twitter.com/myinfotess" target={'_blank'} rel={'noreferrer'} style={{
                                            display: 'flex',
                                            gap: '10px',
                                        }}>
                                            <div className="icon">
                                                <FaTwitter />
                                            </div>
                                            <p>Infotess Twitter</p>
                                        </a></div>
                                </div>
                            </Col>
                            <Col xs={'12'} md={'2'} className={'mt-3'}>
                                <div className="contact-item-wrapper">
                                    <div className="info">
                                        <a href="https://twitter.com/InfotessO" target={'_blank'} rel={'noreferrer'} style={{
                                            display: 'flex',
                                            gap: '10px',
                                        }}>
                                            <div className="icon">
                                                <FaInstagram />
                                            </div>
                                            <p>Aamusted Infotess Official</p>
                                        </a></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Contact