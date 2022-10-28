import React from 'react'
import { Col, Row, Image, } from 'react-bootstrap'
import storyImage1 from '../../../img/oreintation/bg_about.jpg'
import storyImage2 from '../../../img/oreintation/blog1.jpg'
import storyImage3 from '../../../img/training/7.JPG'
import storyImage4 from '../../../img/training/4.JPG'
import storyImage5 from '../../../img/training/5.JPG'
import storyImage6 from '../../../img/trip/tour_10.jpg'
const Story = () => {
    const listOfStoryPics = [
        storyImage1,
        storyImage2,
        storyImage3,
        storyImage4,
        storyImage5,
        storyImage6,
    ]
    return (
        <Row className='m-2'>
            {listOfStoryPics.map((e) => {
                return <Col key={e} md={'4'} lg={'2'} sm={'6'} xs={'12'} className={'mt-2'}>
                    <div className="story-img-wrapper">
                        <Image className='storyImg' src={e} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></Image >
                    </div>
                </Col>
            })}

        </Row>
    )
}

export default Story