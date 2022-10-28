import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NotFoundImg from '../../img/course/cop.png'

const NotFound = () => {
    return (
        <section className='not-found section' style={{paddingTop:'0',paddingBottom:'2rem'}}>
            <Container className='text-center'>
                <Row className='justify-content-center text-align-flex-start'>
                    <Col xs={"12"}>
                        <h1 className='display-4'>Oops! Page not found</h1>
                    </Col>
                    <Col xs={"12"}>
                        <Image src={NotFoundImg} style={{ width: '50%' }} />
                    </Col>
                    <Col xs={"12"}>
                        <Link to={'/'}>
                        <Button variant={'outline-primary'} style={{ width: 'content' }} className={'mt-3'}>Go Home</Button>
                        </Link>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default NotFound