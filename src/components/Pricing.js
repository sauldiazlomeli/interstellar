import React from 'react'
import './PricingStyles.css'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3> - Basic - </h3>
                <span className='btc'></span>
                <p className='btc'>1 BTC</p>
                <p> - 3 Days - </p>
                <p> - Private Quarters - </p>
                <p> - Stellar Views - </p>
                <p> - Access to Basic Club - </p>
                <Link to='/contact' className='btn'>Book</Link>

            </div>
            <div className='card'>
                <h3> - Suite - </h3>
                <span className='btc'></span>
                <p className='btc'>2 BTC</p>
                <p> - 6 Days - </p>
                <p> - Private Quarters - </p>
                <p> - Stellar Views - </p>
                <p> - Access to Suite Club - </p>
                <Link to='/contact' className='btn'>Book</Link>

            </div>
            <div className='card'>
                <h3> - Executive - </h3>
                <span className='btc'></span>
                <p className='btc'>3 BTC</p>
                <p> - 9 Days - </p>
                <p> - Private Quarters - </p>
                <p> - Stellar Views - </p>
                <p> - Access to Executive Club - </p>
                <Link to='/contact' className='btn'>Book</Link>

            </div>
        </div>
    </div>
  )
}

export default Pricing