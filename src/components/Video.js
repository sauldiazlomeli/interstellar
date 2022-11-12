import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import astroVideo from '../assets/astroVideo.mp4'


const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={astroVideo} type='video/mp4' />
        </video>
    <div className='content'>
        <h1>Come join us...</h1>
        <p>Among the Stars.</p>

    <div>
        <Link to='/pricing' className='btn'>Pricing</Link>
        <Link to='/training' className='btn btn-light'>Launch</Link>
 
    </div>
    </div>
    </div>
  )
}

export default Video