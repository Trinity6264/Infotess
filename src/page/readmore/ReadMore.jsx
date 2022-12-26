import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import './style/ReadMoreStyle.css'
const ReadMore = () => {
  const postState = useLocation()
  const {body, img, title} = postState.state;

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent;
  }

  return (
    <div className='section read-more'>
      <Container>
        <div className="con">
          <div className="read-more-img-wrapper">
            <img src={img} alt="Profile" />
          </div>
          <h2>{title}</h2>
          <p>
            {getText(body)}
          </p>
        </div>
      </Container>
    </div>
  )
}

export default ReadMore