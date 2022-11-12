import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                    <div>
                        <p>369 Blue Dot Boulevard</p>
                        <h4>Planet Earth</h4>
                    </div>
                </div>
                <div className='phone'>
                <h4> <FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> 369-369-9999</h4>
                </div>
                <div className='email'>
                    <h4> <FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> launch@ia.com</h4>
                </div>
            </div>

        <div className='right'>
            <h4>Our Story</h4>
            <p> It all started with a dream, a dream that extended beyond the clouds, and into the stars.
                After many years of sleepless nights, scientific innovation paved the way forward.
                Finally, our technology has broken the barriers that kept mankind grounded here on Planet Earth.
                The future is now. Come join us among the stars.
            </p>
            <div className='social'>
                <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
            </div>
        </div>
        </div>

    </div>
  )
}

export default Footer