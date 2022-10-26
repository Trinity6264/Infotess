import React from 'react'
import { Card, Col, Row, } from 'react-bootstrap'
import { HiOutlineBookOpen } from 'react-icons/hi'
const Constitution = () => {
  return (
    <Row className='m-2'>
      <Col md={'6'} sm={'12'} xs={'12'} lg={'6'} className={'mt-2'}>
        <Card className='shadow  border-0'>
          <div class="support-info">
            <div class="info-title">
              <HiOutlineBookOpen style={{ fontSize: '2rem', color: '#fc2626' }} />
              {'INFOTESS Constitution 2019'}
            </div>
          </div>
          <div class="software-list">
            <ul>
              <p>
                Want to legal you legal status of the society? Download Infotess Constitution App <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.infotessconstitution.com&amp;hl=en_US" style={{ color: "#fc2626", fontStyle: "italic", cursor: 'pointer', fontWeight: "700" }}>here...</a>
              </p>
            </ul>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default Constitution