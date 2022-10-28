import React from 'react'
import { Row  } from 'react-bootstrap'
import storyImage1 from '../../../img/oreintation/bg_about.jpg'
import storyImage2 from '../../../img/oreintation/blog1.jpg'
import storyImage3 from '../../../img/training/7.JPG'
import storyImage4 from '../../../img/training/4.JPG'
import storyImage5 from '../../../img/training/5.JPG'
import storyImage6 from '../../../img/trip/tour_10.jpg'
import GalleryComponent from '../../../components/gallery/GalleryComponent'
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
                return <GalleryComponent img={e} key={e}/>
            })}

        </Row>
    )
}

export default Story