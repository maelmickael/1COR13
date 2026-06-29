import React from 'react'
import PreHead from '../sections/PreHead'
import Header from '../components/header/Header'
import Realise from '../sections/Realise'
import Footer from '../components/footer/Footer'
import Call from '../components/Call-To-Action/Call'

const page = () => {
  return (
    
    <>
        <PreHead />
        <Header />
        <div className="hero-section w-full h-[480px] flex items-center justify-center items-center bg-cover bg-center bg-white">
            <div className="content-hero w-[60%] mx-auto">
            <h1 className="uppercase text-[60px] leading-[60px] font-[900] text-[#0B253C]">
                Quelques <br /> Réalisations
            </h1>
            <div className="trait h-[16px] w-[100px] mt-0.5 bg-[#FE0466]" />
            </div>
        </div>

        <Realise />
        <Call />
        <Footer />
    </>

  )
}

export default page