import React from 'react'
import { Card, Container, Tab, Tabs } from 'react-bootstrap'
import PageHeader from '../../components/page_header/PageHeader'
import Orientation from './components/Orientation'
import Story from './components/Story'
import Trip from './components/Trip'
import Workshop from './components/Workshop'
import './style/GalleryStyle.css'

const Gallery = () => {
    return (
        <>
            <PageHeader currentPage={'Gallery'} hasCurrentPage={false} page={'Gallery'} pageTitle={'Gallery'} />
            <section className='gallery section'>
                <Container>
                    <Card className='border-0'>
                        <Tabs defaultActiveKey="Story"
                            id="uncontrolled-tab-example"
                        >
                            <Tab title={'Story'} eventKey='Story'
                            >
                                <Story />
                            </Tab>
                            <Tab title={'Workshops'} eventKey='Workshops'>
                                <Workshop />
                            </Tab>
                            <Tab title={'Trip'} eventKey={'Trip'} >
                                <Trip/>
                            </Tab>
                            <Tab title={'Orientation'} eventKey={'Orientation'}>
                                <Orientation/>
                            </Tab>

                        </Tabs>
                    </Card>
                </Container>
            </section>
        </>
    )
}

export default Gallery