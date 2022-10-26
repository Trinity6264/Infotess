import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineCamera, AiOutlineProfile, AiOutlineHeart } from 'react-icons/ai'
import {Link} from 'react-router-dom'

const SupportSection = () => {
  return (
    <Container>
      <Row >
        <Col md={'4'} sm={'12'} xs={'12'} className={'on-md-mt-10 column'}>
          <div className="about-card">
            <Link to={'/gallery'} className="link">
              < AiOutlineCamera className='icon' />
              <span>{'Gallery'}</span>
            </Link>
          </div>
        </Col>
        <Col md={'4'} sm={'12'} xs={'12'} className={'on-md-mt-10 column'}>
          <div className="about-card">
            <Link to={'/about/team'} className="link">
              < AiOutlineProfile className='icon' />
              <span>{'Our Team'}</span>
            </Link>
          </div>
        </Col>
        <Col md={'4'} sm={'12'} xs={'12'} className={'on-md-mt-10 column'}>
          <div className="about-card">
            <Link to={'#'} className="link">
              < AiOutlineHeart className='icon' />
              <span>{'Support Us'}</span>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SupportSection