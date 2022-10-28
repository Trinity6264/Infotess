import React, { useState } from 'react'
import { Col, Image } from 'react-bootstrap'
import CustomModal from './CustomModel';

const GalleryComponent = ({ img }) => {
    const [show, setShow] = useState(false);
    return (
        <>
        <CustomModal img={img} isShow={show} disMiss={setShow}/>
            <Col md={'4'} lg={'2'} sm={'6'} xs={'12'} className={'mt-2'}>
                <div className="story-img-wrapper" onClick={() => setShow(true)}>
                    <Image className='storyImg' src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }}></Image >
                </div>
            </Col>
        </>
    )
}

export default GalleryComponent