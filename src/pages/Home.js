import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

function Home() {
  return (
    <>
      <Navbar />
      <Carousal /> 

      <div className='m-3'>
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      <Footer />

    </>
  )
}

export default Home