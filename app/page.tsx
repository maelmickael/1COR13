'use client'

import React, { useState, useEffect } from 'react'
import PreHead from './sections/PreHead'
import Header from './components/header/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Service from './sections/Service'
import Realisations from './sections/Realisations'
import Call from './components/Call-To-Action/Call'
import Footer from './components/footer/Footer'

const page = () => {

  return (
    <>
      <>
      <PreHead />
      <Header />
      <Hero />
      <About />
      <Service />
      <Realisations />
      <Call />
      <Footer />
      </>
    </>
  )
}

export default page