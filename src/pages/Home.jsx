import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Serives/Servies'
import Footer from '../components/Footer/Footer'
import Content from '../components/Content/About'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Banner/>
      <Content/>
      <Contact/>
    </div>
  )
}

export default Home
