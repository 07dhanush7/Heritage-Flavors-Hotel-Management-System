import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Hero.css'
import herobg from '../../assets/herobg.WebP'

const Hero = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/services');
  };

  return (
    <div className='hero'>
      <div className='hero-content'>
        <img src={herobg} alt="Hero Image" className='hero-image' />
      </div>
      
      <div className='hero-text-container'>
        <h1 className='hero-title'>Heritage Flavors</h1>
        <p className='hero-subtitle'>Discover Authentic Culinary Traditions</p>
        <p className='hero-description'>
          Explore the rich history and exquisite taste of traditional cuisines 
          crafted with passion and heritage in every bite.
        </p>
        <button className='explore-btn' onClick={handleExplore}>
          Explore Now
        </button>
      </div>

      <div className='scroll-indicator' onClick={handleExplore}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

export default Hero