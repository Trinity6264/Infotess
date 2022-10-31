import React from 'react'
import {Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import tour1 from '../../img/trip/tour_1.jpg'
import tour2 from '../../img/trip/tour_2.jpg'
import tour3 from '../../img/trip/tour_3.jpg'
import tour4 from '../../img/trip/tour_4.jpg'
import './style/HomeStyle.css'

const Home = () => {

  const listofPost = [
    {
      id: 0,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo accusamus pariatur necessitatibus veniam nisi tempore',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt alias non eum culpa officia libero saepe odio deleniti, qui autem voluptate nostrum adipisci pariatur veniam voluptas nobis optio corporis distinctio!',
      img: tour1
    },
    {
      id: 1,
      title: ' consectetur adipisicing elit. Quia quo accusamus pariatur necessitatibus veniam nisi tempore',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt alias non eum culpa officia libero saepe odio deleniti, qui autem voluptate nostrum adipisci pariatur veniam voluptas nobis optio corporis distinctio!',
      img: tour2
    },
    {
      id: 2,
      title: ' consectetur adipisicing elit. Quia quo accusamus pariatur necessitatibus veniam nisi tempore',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt alias non eum culpa officia libero saepe odio deleniti, qui autem voluptate nostrum adipisci pariatur veniam voluptas nobis optio corporis distinctio!',
      img: tour3
    },
    {
      id: 3,
      title: ' consectetur adipisicing elit. Quia quo accusamus pariatur necessitatibus veniam nisi tempore',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt alias non eum culpa officia libero saepe odio deleniti, qui autem voluptate nostrum adipisci pariatur veniam voluptas nobis optio corporis distinctio!',
      img: tour4
    },
  ]

  return (
    <div className='section home'>
      <Container>
        <div className="posts">
          {listofPost.map(({ desc, id, img, title }) => {
            return <div className="post" key={id}>
              <div className="img">
                <img src={img} alt="Post-profile" />
              </div>
              <div className="content">
                <h1>{title}</h1>
                <p>{desc}</p>
                <Link to={`/${id}`}>
                  Read more
                </Link>
              </div>
            </div>
          })}
        </div>
      </Container>
    </div>
  )
}

export default Home