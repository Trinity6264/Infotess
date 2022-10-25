import React from 'react'
import { Col, Card } from 'react-bootstrap'

const TeamCard = ({ image, name, position }) => {
    return (
        <Col md='4' sm='6' xs='12' lg='3'>
            <Card className='text-align-center border-5 shadow-5 m-2'>
                <Card.Img src={image}>
                </Card.Img>
                <Card.Text>
                    <h4 style={{ textAlign: 'center', fontSize: '1.2em' }}>{name}</h4>
                </Card.Text>
                <Card.Subtitle style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p>{position}</p>
                </Card.Subtitle>
            </Card>
        </Col>
    )
}

export default TeamCard