import React from 'react'
import { Col, Row, Image, } from 'react-bootstrap'
import workShopImage1 from '../../../img/training/1.JPG'
import workShopImage2 from '../../../img/training/2.JPG'
import workShopImage3 from '../../../img/training/3.JPG'
import workShopImage4 from '../../../img/training/4.JPG'
import workShopImage5 from '../../../img/training/5.JPG'
import workShopImage6 from '../../../img/training/6.JPG'
import workShopImage7 from '../../../img/training/7.JPG'
import workShopImage8 from '../../../img/training/8.JPG'
import workShopImage9 from '../../../img/training/9.JPG'
const Workshop = () => {
    const listOfWorkshopPics = [
        workShopImage1,
        workShopImage2,
        workShopImage3,
        workShopImage4,
        workShopImage5,
        workShopImage6,
        workShopImage7,
        workShopImage8,
        workShopImage9,
    ];
    return (
        <Row className='m-2'>
            {listOfWorkshopPics.map((e) => {
                return <Col key={e} md={'4'} lg={'2'} sm={'6'} xs={'12'} className={'mt-2'}>
                    <div className="story-img-wrapper">
                        <Image className='storyImg' src={e} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></Image >
                    </div>
                </Col>
            })}

        </Row>
    )
}

export default Workshop