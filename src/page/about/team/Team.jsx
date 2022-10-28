import React from 'react'
import PageHeader from '../../../components/page_header/PageHeader'
import './style/TeamStyle.css'
import {  Row, Container, } from 'react-bootstrap'
import PresidentImg from '../../../img/team/exec_prez.png'
import AvatImg from '../../../img/team/avat.jpg'
import SecImg from '../../../img/team/exec_sec.png'
import FinanImg from '../../../img/team/exec_F.O.png'
import OrgImg from '../../../img/team/exec_org.png'
import WocomImg from '../../../img/team/exe_wocom.png'
import TreaImg from '../../../img/team/exec_trea.png'
import ProImg from '../../../img/team/exec_pro.png'
import CounselImg from '../../../img/team/exec_counsel.png'
import ECImg from '../../../img/team/exec_EC.png'
import TeamCard from '../../../components/cards/TeamCard'

const Team = () => {

    const listOfTeam = [
        {
            name: 'Henry Baffour',
            position: 'President',
            image: PresidentImg,
        },
        {
            name: 'Vice President',
            position: 'Vice President',
            image: AvatImg,
        },
        {
            name: 'Frank Osei Boansi',
            position: 'General Secetary',
            image: SecImg,
        },
        {
            name: 'Owusu Addo Augustine',
            position: 'Financial Secretary',
            image: FinanImg,
        },
        {
            name: 'Kojo Badu Edmund',
            position: 'Organizer',
            image: OrgImg,
        },
        {
            name: 'Abigail Gyimah',
            position: 'Treasure',
            image: TreaImg,
        },
        {
            name: 'Abena Konadu',
            position: 'WOCOM',
            image: WocomImg,
        },
        {
            name: 'Ernest Amediku',
            position: 'PRO',
            image: ProImg,
        },
        {
            name: 'Cosmos Eyram Anyasu',
            position: 'Counsel Attorney',
            image: CounselImg,
        },
        {
            name: 'Wilfred Ofori Kyere',
            position: 'E.C',
            image: ECImg,
        },
        {
            name: 'Maxwell Dogbefu Junior',
            position: 'Patron',
            image: AvatImg,
        },
        {
            name: 'William Asiedu',
            position: 'Patron',
            image: AvatImg,
        },
    ]

    return (
        <>
            <PageHeader currentPage={'Our Team'} hasCurrentPage={true} page={'About'} pageTitle={'Our Team'} />
            <section className='team section'>
                <Container>
                    <h3 class="section-title">Executives</h3>
                    <Row className='justify-content-between'>
                        {listOfTeam.map(({ image, name, position }) => {
                            return <TeamCard image={image} name={name} position={position} key={name} />
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Team