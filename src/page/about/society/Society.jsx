import React from 'react'
import PageHeader from '../../../components/page_header/PageHeader'
import './style/SocietyStyle.css'

import AboutSection from './components/About'
import SupportSection from './components/Support'
import { Container } from 'react-bootstrap'

const Society = () => {


    return (
        <>
            <PageHeader currentPage={'Society'} hasCurrentPage={true} page={'About'} pageTitle={'About Us'} />
            <section className='section about'>
                <AboutSection/>
                <SupportSection/>
            </section>
            <section className='section testimonial'>
                <Container>
                    
                </Container>
            </section>
        </>
    )
}

export default Society