import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { db } from '../../app/firebase'
import './style/HomeStyle.css'
import { collection, getDocs, } from 'firebase/firestore'
import Loading from '../../components/Loading'

const Home = () => {

  const [listOfPost, setListOfPost] = useState([])
  const [isBusy, setBusy] = useState(true)


  // fetch data from firestore

  const fetchFromFirestore = async () => {
    try {
      if(!isBusy) return;
      let listArr = [];
      const querySnapshot = await getDocs(collection(db, "Posts"));
      querySnapshot.forEach((doc) => {
        listArr.push({ ...doc.data(), id: doc.id })
      });
      setListOfPost(listArr)
      setBusy(false)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchFromFirestore()
  }, [fetchFromFirestore])


  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent;
  }

  return (
    <div className='section home'>
      <Container>
        {isBusy  && <Loading /> }
        <div className="posts">
          {listOfPost?.map(({ body, id, img, title }) => {
            return <div className="post" key={id}>
              <div className="img">
                <img src={img} alt="Post-profile" />
              </div>
              <div className="content">
                <h1>{title}</h1>
                <p>
                  {getText(body)}
                </p>
                
                <Link to={`/${id}`} state={{ body, id, img, title }}>
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