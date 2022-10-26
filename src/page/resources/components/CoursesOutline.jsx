import React from 'react'
import L1Sem1 from '../../../img/course/L1 SEM1.jpg'
import L1Sem2 from '../../../img/course/L1 SEM2.jpg'
import L2Sem1 from '../../../img/course/L2 SEM1.jpg'
import L2Sem2 from '../../../img/course/L2 SEM2.jpeg'
import L3Sem1 from '../../../img/course/L3 SEM1.jpg'
import L3Sem2 from '../../../img/course/L3 SEM2.jpg'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { Col, Image, Row } from 'react-bootstrap'

const CoursesOutline = () => {
    const lisOfCourses = [
        L1Sem1, L1Sem2, L2Sem1, L2Sem2, L3Sem1, L3Sem2
    ]
    return (
        <Row className='m-2'>
            {lisOfCourses.map((e) => {
                return <Col md={'4'} sm={'6'} xs={'12'} className={'mt-2'}>
                    <div className="course-img-wrapper">
                        <Image fluid src={e} style={{ width: '100%' }}></Image >
                        <a href={e} className='d-wrapper' download>
                            <AiOutlineCloudDownload style={{ fontSize: '5rem' }} />
                        </a>
                    </div>
                </Col>
            })}
        </Row>
    )
}

export default CoursesOutline