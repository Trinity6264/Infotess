import React from 'react'
import { Card, Col, Row, } from 'react-bootstrap'
import { FcDocument } from 'react-icons/fc'

const CoursesMaterial = () => {
  const listOfCourseMaterial = [
    {
      title: 'Level 100',
      fSem: 'https://drive.google.com/drive/folders/1Qdg9JCWj5LXmo7rTZahmYemA8rVdjgoD?usp=sharing',
      sSem: 'https://drive.google.com/drive/folders/1wXr8UC4nIuXWyD_VHGdMRxDIIMmMnImt?usp=sharing'
    },
    {
      title: 'Level 200',
      fSem: 'https://drive.google.com/drive/folders/1tgmktyJqPAk9v58Qj4Jh535ucuwERq8O?usp=sharing',
      sSem: 'https://drive.google.com/drive/folders/1iIBY3g77UrgVt1SDjGlH5Rtc8XPzORb8?usp=sharing'
    },
    {
      title: 'Level 300',
      fSem: 'https://drive.google.com/drive/folders/1kiyf9N70KGC_Gy0I9BqhZHaJpYBYTnz1?usp=sharing',
      sSem: 'https://drive.google.com/drive/folders/1T3RA8vb01DRB7yi8YaFWwAi6eSZXFeZx?usp=sharing'
    },
  ]
  return (
    <Row className='m-2'>
      {listOfCourseMaterial.map(({ fSem, sSem, title }) => {
        return <Col md={'6'} sm={'12'} xs={'12'} lg={'4'} className={'mt-2'}>
          <Card className='shadow  border-0'>
            <div className="support-info">
              <div className="info-title">
                <FcDocument style={{ fontSize: '2.5rem' }} />
                {title}
              </div>
            </div>
            <div className="software-list">
              <ul>
                <strong>Click to download materials</strong>
                <li>
                  <a target="_blank" rel="noreferrer" href={fSem}>
                    1st Semester
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href={sSem}>
                    2nd Semester
                  </a>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
      })}

    </Row>
  )
}

export default CoursesMaterial