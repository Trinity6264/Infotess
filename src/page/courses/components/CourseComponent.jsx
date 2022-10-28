import React from 'react'
import { Button, Card, CardImg, Col, Row } from 'react-bootstrap'

const CourseComponent = ({ data }) => {
    return (
        <Row className='justify-content-between mb-5'>
            {data.map(({ bodyHeader, bodyContent, bodyLink, bodyImage }) => {
                return <>
                    <Col md={'6'} lg={"4"} sm={'6'} xs={'12'} className={'mt-3'}>
                        <Card className='shadow'>
                            <CardImg className={'card-img'} src={bodyImage}></CardImg>
                            <Card.Body>
                                <h4>{bodyHeader}</h4>
                                <p>{bodyContent}</p>
                                {bodyLink && <a href={bodyLink} target={'_blank'} rel="noreferrer">
                                    <Button variant='outline-danger' class="btn btn-common btn-sm">Click to Apply</Button
                                    ></a>}
                            </Card.Body>
                        </Card>
                    </Col>
                </>
            })}

        </Row>
    )
}

export default CourseComponent