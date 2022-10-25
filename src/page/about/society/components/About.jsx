import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const AboutSection = () => {
    return (
        <Container>
            <Row className='g-5'>
                <Col md={'6'} className={'shadow-sm shadow p-4 mb-5 bg-white rounded'}>
                    <div className="about-content">
                        <h3>Background History</h3>
                        <p>
                            INFOTESS was formed in the year 2005/2006 under the Leadership of HIS EXCELLENCY GEORGE,
                            currently a Lecturer in the Ghana Tele-Com University in Kumasi-Ghana. The IDEA for the
                            formation of INFOTESS Society was to seek for the walfare of their members registered under
                            the IT Department @ COLTEK Campus.
                            <br />
                            <br />
                            The Association has produced a number of SUCCESSORS
                            after the formation by the first President. Currently HENRY BAFFOUR is the President for the
                            Association in the year 2019/2020.
                        </p>
                    </div>
                </Col>
                <Col md={'6'} className={'shadow-sm shadow p-4 mb-5 bg-white rounded'}>
                    <div className="about-content on-md-mt-10">
                        <h3>Vision Statement</h3>
                        <p>
                            OUR VISION is to make INFOTESS the best association on campus by helping members engaged in
                            the pure practical aspect apart from the normal school curriculum.
                        </p>
                        <br />
                        <br />
                        <h3>Mission Statement</h3>
                        <p>
                            We the students of the Information Technology Department of the University of Education
                            Winneba - Kumasi Campus, guided by the need to be unified to ensure good intellectual,
                            spiritual and social advancement of our members.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutSection