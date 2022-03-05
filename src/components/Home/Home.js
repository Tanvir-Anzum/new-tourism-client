import React, { useEffect, useState } from 'react'
//import bgTwo from '../../Images/bgTwo.jpg'
import tourism from '../Images/tourism.jpg'
//import bannerOne from '../../Images/bannerOne.jpg'
import reviewerOne from '../Images/reviewerOne.png'
import reviewerTwo from '../Images/reviewerTwo.png'
import reviewerThree from '../Images/reviewerThree.png'
import './Home.css'
import Menubar from '../Menubar/Menubar'
import Placed from '../Placed/Placed'

import Footer from '../Footer/Footer'


const Home = () => {
   const [event, setEvent] = useState([])
  // const { show } = Review()
  // const {show} = Show()
  useEffect(() => {
    fetch('http://localhost:5000/allEvents')
      .then((res) => res.json())
      .then((data) => setEvent(data))
  }, [])
  // const { comment } = review
  // console.log(comment)
  return (
    <div className='container-fluid mb-5'>
      <Menubar></Menubar>
      {/* <Review></Review> */}
      <div className='d-flex row background'>
        <div className='d-flex align-items-center col-sm-12 col-md-6 mt-5 mb-5 pt-3'>
          <div>
            <h1>Begin Your Journey With Us</h1>
            <p>
              We are providing high quality service with low cost.We are
              commited to provide you the best service.
            </p>
          </div>
          {/* <button className='btn btn-primary'>Learn More</button> */}
        </div>
        <div className='col-sm-12 col-md-6'>
          <img className='bannerOne' src={tourism} alt='' />
        </div>
      </div>
      <h3 className='color mt-5 pt-3 mb-5'>Our Services</h3>
      <div className='row'>
        {/* <div className='events-container'>
        <div className='row container'>
          {events?.map((pd) => (
            <div className='col-md-4'>
              <div className='event border border'>
                <div className='event-img'>
                  <img className='w-100' src={pd.image} alt='' />
                </div>
                <div
                  style={{ backgroundColor: pd?.EventColor }}
                  className='title-container p-2 '
                >
                  <h4>{pd.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>  */}
        {event.slice(0, 6).map((user) => (
          <div className='users col-sm-12 col-md-6 mb-3'>
            <Placed ser={user}></Placed>
          </div>
        ))}
      </div>
      <div id='bottom' className='mb-5 pb-5 pt-5 '>
        <h3 className='color d-flex justify-content-center'>Customers Say</h3>
        <div className='d-flex justify-content-center'>
          <h1 className='w-75 pb-3'>What Our Customers Say About Us</h1>
        </div>
        <div className='container'>
          <div className='row row-cols-sm-1 row-cols-md-3'>
            {/* <div id='lower-space' className='box col '> */}
            <div id='first' className='pt-5 col pb-5'>
              <img id='one' src={reviewerOne} alt='' />
              <div>
                <h5>Customer</h5>
                <div className='d-flex justify-content-center'>
                  <p className='w-75'>
                    I love travelling the most to be honest.I want to see the
                    world.EarthTrip has really done a great job in this regarf.I
                    hope they do better.I have best wishes for them.
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* <div className='box col'> */}
            <div id='second' className='pt-5 col pb-5'>
              <img id='two' src={reviewerTwo} alt='' />
              <div>
                <h5>Customer</h5>
                <div className='d-flex justify-content-center'>
                  <p className='w-75'>
                    EarthTrip made my dream come true.I want to see my country
                    more closely.Their service is also great.They are really
                    dedicated,I must say.
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
            {/* <div className='box col'> */}
            <div id='third' className='pt-5 pb-5 col'>
              <img id='three' src={reviewerThree} alt='' />
              <div>
                <h5>Customer</h5>
                <div className='d-flex justify-content-center'>
                  <p className='w-75'>
                    I had passions for travelling from an early age.EarthTrip
                    really helped me a lot to make it true.I thank them from the
                    core of my heart for their services.
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
