import React from 'react'
import './TrainingStyles.css'
import { Link } from 'react-router-dom'
import astroImage from '../assets/astroImage.png'


const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Stellar Academy</h1>
            <p>We provide industry-leading pre-flight and continued in-flight training.
                When leaving our lovely Planet Earth, with it's delicious oxygen, and 
                and all of its perfect conditions for sustaining the Human Life - it is
                absolutely imperitive that we take every precaution possible. 
                <br></br>
                Thus, we created <i>Stellar Academy</i>, because safety is our
                number one priority during interstellar travel.
            </p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <img src={astroImage} className='img' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Training