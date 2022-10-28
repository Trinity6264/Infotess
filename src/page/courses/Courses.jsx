import React from 'react'
import { Container } from 'react-bootstrap'
import PageHeader from '../../components/page_header/PageHeader'
import CourseComponent from './components/CourseComponent'
import GraphicDesignImg from '..//../img/course/graphic_design.png'
import NetworkImg from '..//../img/course/network.PNG'
import DBImg from '..//../img/course/db.PNG'
import accountingImg from '../../img/course/accounting.jpg'
import algebraImg from '../../img/course/algebra_2.jpg'
import cppImg from '../../img/course/c++.png'
import webImg from '../../img/course/web.jpg'
import mobileImg from '../../img/course/mobile.jpg'
import moreImg from '../../img/course/more.png'


const Courses = () => {
    const dataCommunity = [
        {
            bodyHeader: 'Graphic Design',
            bodyContent: 'Come and equip yourself with some designing skills using Photoshop, Corel Draw, Adobe Illustrator many more.',
            bodyLink: "https://docs.google.com/forms/d/e/1FAIpQLSff7hUC-VVnjkYY0t7X86d31NQ15u1KYghBE807NAwnSdZsNg/viewform",
            bodyImage: GraphicDesignImg
        },
        {
            bodyHeader: 'Networking',
            bodyContent: 'Do you want to become a Network Engineer by profession? No time to waste, come and learn with us! ',
            bodyLink: "https://docs.google.com/forms/d/e/1FAIpQLSff7hUC-VVnjkYY0t7X86d31NQ15u1KYghBE807NAwnSdZsNg/viewform",
            bodyImage: NetworkImg
        },
        {
            bodyHeader: 'Database Administration',
            bodyContent: 'Start a lesson in SQL with our highly trained facilitators to equip yourself in Database Administration',
            bodyLink: "https://docs.google.com/forms/d/e/1FAIpQLSff7hUC-VVnjkYY0t7X86d31NQ15u1KYghBE807NAwnSdZsNg/viewform",
            bodyImage: DBImg,
        },
    ]
    const dataClass = [
        {
            bodyHeader: 'Principles of Accounting',
            bodyContent: 'This program introduces you to basic Accounting Principles. Join now as we safely drive you home with our experienced facilitators.',
            bodyImage: accountingImg,
        },
        {
            bodyHeader: 'Algebra I',
            bodyContent: 'Let\'s play with mathematics... the basic foundation for Information Technology. Make a date with us as we drive you through systematically ',
            bodyImage: algebraImg
        },
        {
            bodyHeader: 'Principles of Programming (C++)',
            bodyContent: 'Learn Programming with ease as our skilled facilitators take you through the course systematically.',
            bodyImage: cppImg,
        },
    ]
    const dataDevs = [
        {
            bodyHeader: 'Web Development',
            bodyContent: 'Come and experience real time workshop, bootcamps, etc to solve real world problems using the various technologies in web. ',
            bodyLink: "#",
            bodyImage: webImg
        },
        {
            bodyHeader: 'Mobile App Development',
            bodyContent: 'We provide all necessary resources to write softwares for mobile devices using java, Kotlin, JavaScript, Flutter,  React-native etc.  ',
            bodyLink: "#",
            bodyImage: mobileImg,
        },
        {
            bodyHeader: 'More',
            bodyContent: 'We also take members through practical sections to enhance members with skills in Cloud, Machine Learning and more... ',
            bodyLink: "#",
            bodyImage: moreImg,
        },
    ]

    return (
        <>
            <PageHeader currentPage={'Courses'} hasCurrentPage={false} page={'Courses'} pageTitle={'Courses'} />
            <section className='section courses'>
                <Container>
                    {/* Community  */}
                    <h3 class="section-title">Community of Practice </h3>
                    <CourseComponent data={dataCommunity} />
                    {/* Catch-class */}
                    <h3 class="section-title">Catch-Up Class  </h3>
                    <CourseComponent data={dataClass} />
                    {/* Catch-class */}
                    <h3 class="section-title">Developer Student Clubs</h3>
                    <CourseComponent data={dataDevs} />
                </Container>
            </section>
        </>
    )
}

export default Courses