import React from 'react'
import './Servies.css'
import bannerbg from '../../assets/bannerbg.WebP'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Welcome to Heritage Flavors</h1>
          <p className="banner-subtitle">Experience the Taste of Tradition</p>
          <div className="banner-buttons-group">
            <button className="banner-btn"><Link to="/menu" className='link'>Menu</Link></button>
            <button className="banner-btn"><Link to="/reservation" className='link'>Table Reservation</Link></button>
            <button className="banner-btn"><Link to="/orders" className='link'>Order Delivery</Link></button>
            <button className="banner-btn"><Link to="/dining" className='link'>Fine Dining Restaurant</Link></button>
            <button className="banner-btn"><Link to="/hotels" className='link'>Luxury Hotel</Link></button>
            <button className="banner-btn"><Link to="/resorts" className='link'>Resort Experience</Link></button>
          </div>
        </div>
        <img src={bannerbg} alt="Banner" className="banner-image" />
      </div>
    </>
  )
}

export default Banner