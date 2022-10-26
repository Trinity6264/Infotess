import React from 'react'
import { Card, Container, Tab, Tabs } from 'react-bootstrap'
import Constitution from './components/Constitution'
import CoursesMaterial from './components/CoursesMaterial'
import CoursesOutline from './components/CoursesOutline'
import Forms from './components/Forms'
import Software from './components/Software'
import './style/ResourcesStyle.css'


const Resources = () => {

    return (
        <section className='section resources'>
            <Container>
                <Card>
                    <Tabs defaultActiveKey="Course-Outline" id="uncontrolled-tab-example"
                    >
                        <Tab title={'Course-Outline'} eventKey='Course-Outline'
                        >
                            <CoursesOutline />
                        </Tab>
                        <Tab title={'Course-Materials'} eventKey='Course-Materials'>
                            <CoursesMaterial />
                        </Tab>
                        <Tab title={'Software'} eventKey={'Software'} >
                            <Software />
                        </Tab>
                        <Tab title={'Constitution'} eventKey={'Constitution'}>
                            <Constitution />
                        </Tab>
                        <Tab title={'E.C-Forms'} eventKey={'E.C-Forms'} >
                            <Forms />
                        </Tab>
                    </Tabs>
                </Card>
            </Container>
        </section>
    )
}

export default Resources