import React from 'react'
import { Card, Col, Row, } from 'react-bootstrap'
import { BiNote } from 'react-icons/bi'
const Forms = () => {
    return (
        <Row className='m-2'>
            <Col md={'6'} sm={'12'} xs={'12'} lg={'6'} className={'mt-2'}>
                <Card className='shadow  border-0'>
                    <div className="support-info">
                        <div className="info-title">
                            <BiNote style={{ fontSize: '2rem', color: '#fc2626' }} />
                            {'Electoral commission\'s Form'}
                        </div>
                    </div>
                    <div className="software-list">
                        <ul>
                            <p style={{fontSize:'1.2em', fontWeight:'300'}}>
                                Nomination is closed at the moment. Check up Later
                                Thank you :{')'}
                            </p>
                        </ul>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default Forms