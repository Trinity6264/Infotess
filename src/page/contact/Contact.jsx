import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageHeader from '../../components/page_header/PageHeader'
import './style/ContactStyle.css'
import { FaMapPin, FaMobileAlt, FaEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa'
const Contact = () => {
    return (
        <>
            <PageHeader currentPage={'Contact'} hasCurrentPage={false} page={'Contact'} pageTitle={'Contact'} />
            <section className="section contact">
                <div className="map-wrapper">
                    <iframe
                    title={'Google Map'}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.581467362356!2d-1.684942184674197!3d6.698644122959516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9934fe42a1dd%3A0x801887bad41bd897!2sINFOTESS%20UEW-K!5e0!3m2!1sen!2sgh!4v1580778764780!5m2!1sen!2sgh"
                        width="100%" height="100%" frameborder="0" style={{ boxShadow: "0 2px 5px 0 rgba(0,0,0,.2)" }}
                        allowfullscreen="">

                    </iframe>
                </div>
                <Container>
                    <Row className='mt-2'>
                        <Col md={'4'} sm={'12'} xs={'12'} className={'mt-2'}>
                            <div class="contact-item-wrapper">
                                <h4>Address</h4>
                                <div class="info">
                                    <div class="icon">
                                        <FaMapPin className='ic' />
                                    </div>
                                    <p><span>INFOTESS, C/O University of Education - Winneba, P.O.Box 1277, Kumasi -
                                        Ghana.</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={'4'} sm={'12'} xs={'12'} className={'mt-2'}>
                            <div class="contact-item-wrapper">
                                <h4>Phone</h4>
                                <div class="info">
                                    <div class="icon">
                                        <FaMobileAlt className='ic' />
                                    </div>
                                    <p>
                                        <a href="tel:+233245742899">+233(0)24 574 2899
                                        </a>
                                        <br />
                                        <a href="tel:+233559569752">+233(0)55 956 9752</a>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={'4'} sm={'12'} xs={'12'} className={'mt-2'}>
                            <div class="contact-item-wrapper">
                                <h4>E-mail</h4>
                                <div class="info">
                                    <div class="icon">
                                        <FaEnvelope className='ic' />
                                    </div>
                                    <p>
                                        <a href="mailto:infotessofficial@gmail.com">infotessofficial@gmail.com</a>
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
                                <div class="contact-item-wrapper">
                                    <div class="info">
                                        <a href="https://twitter.com/InfotessO" target={'_blank'} rel={'noreferrer'} style={{
                                            display: 'flex',
                                            gap: '10px',
                                        }}>
                                            <div class="icon">
                                                <FaTwitter />
                                            </div>
                                            <p>@InfotessO</p>
                                        </a></div>
                                </div>
                            </Col>
                            <Col xs={'12'} md={'2'} className={'mt-3'}>
                                <div class="contact-item-wrapper">
                                    <div class="info">
                                        <a href="https://twitter.com/InfotessO" target={'_blank'} rel={'noreferrer'} style={{
                                            display: 'flex',
                                            gap: '10px',
                                        }}>
                                            <div class="icon">
                                                <FaYoutube />
                                            </div>
                                            <p>@Aamusted</p>
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