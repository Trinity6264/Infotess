import React from 'react'
import { Col, Row, Image, } from 'react-bootstrap'
import orientationImage1 from '../../../img/oreintation/bg_about.jpg'
import orientationImage2 from '../../../img/oreintation/blog1.jpg'
import orientationImage3 from '../../../img/oreintation/orient_12.jpg'
import orientationImage4 from '../../../img/oreintation/orient_13.jpg'
import orientationImage5 from '../../../img/oreintation/orient_16.jpg'
import orientationImage6 from '../../../img/oreintation/orient_18.jpg'
import orientationImage7 from '../../../img/oreintation/orient_19.jpg'
import orientationImage8 from '../../../img/oreintation/orient_20.jpg'
import orientationImage9 from '../../../img/oreintation/orient_22.jpg'
import orientationImage10 from '../../../img/oreintation/orient_23.jpg'
import orientationImage11 from '../../../img/oreintation/orient_24.jpg'
import orientationImage12 from '../../../img/oreintation/orient_28.jpg'
const Orientation = () => {
    const listOfOrientationPics = [
        orientationImage1,
        orientationImage2,
        orientationImage3,
        orientationImage4,
        orientationImage5,
        orientationImage6,
        orientationImage7,
        orientationImage8,
        orientationImage9,
        orientationImage10,
        orientationImage11,
        orientationImage12,
    ];
    return (
        <Row className='m-2'>
            {listOfOrientationPics.map((e) => {
                return <Col key={e} md={'4'} lg={'2'} sm={'6'} xs={'12'} className={'mt-2'}>
                    <div className="story-img-wrapper">
                        <Image className='storyImg' src={e} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></Image >
                    </div>
                </Col>
            })}

        </Row>
    )
}

export default Orientation