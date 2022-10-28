import React from 'react'
import { Row} from 'react-bootstrap'
import tourImage1 from '../../../img/trip/tour_1.jpg';
import tourImage2 from '../../../img/trip/tour_2.jpg';
import tourImage3 from '../../../img/trip/tour_3.jpg';
import tourImage4 from '../../../img/trip/tour_4.jpg';
import tourImage5 from '../../../img/trip/tour_5.jpg';
import tourImage6 from '../../../img/trip/tour_6.jpg';
import tourImage7 from '../../../img/trip/tour_7.jpg';
import tourImage8 from '../../../img/trip/tour_8.jpg';
import tourImage9 from '../../../img/trip/tour_9.jpg';
import tourImage10 from '../../../img/trip/tour_10.jpg';
import tourImage11 from '../../../img/trip/tour_11.jpg';
import tourImage12 from '../../../img/trip/tour_12.jpg';
import GalleryComponent from '../../../components/gallery/GalleryComponent';


const Trip = () => {
    const listOfTripPics = [
        tourImage1,
        tourImage2,
        tourImage3,
        tourImage4,
        tourImage5,
        tourImage6,
        tourImage7,
        tourImage8,
        tourImage9,
        tourImage10,
        tourImage11,
        tourImage12,
    ];
    return (
        <Row className='m-2'>
            {listOfTripPics.map((e) => {
                return <GalleryComponent img={e} key={e}/>
            })}

        </Row>
    )
}

export default Trip