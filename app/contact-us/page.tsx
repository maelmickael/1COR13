

import React from 'react'
import PreHead from '../sections/PreHead'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const card = [
      {
        icon: '/logo/1C13S-logo 2021-29.png',
        address: 'Addresse Bureau',
        locater: 'Angre, fin goudron vers station petro',
      },
      {
        icon: '/logo/1C13S-logo 2021-29.png',
        address: 'Contactez-Nous',
        locater: '+225 07 07 07 07 07',
      },
      {
        icon: '/logo/1C13S-logo 2021-31.png',
        address: 'Contactez-Nous',
        locater: 'hello@1cor13.studio',
      }
    ]

const page = (
) => {
  return (
    
    <>
    
      <PreHead />
      <Header />
      <div className="hero-section w-full h-[480px] flex items-center justify-center items-center bg-cover bg-center bg-[url('/img/cta.jpg')]">
        <div className="content-hero w-[60%] mx-auto">
          <h1 className="uppercase text-[100px] leading-[100px] font-[900] text-white">
            Parlez-Nous <br /> de votre <br /> projet
          </h1>
          <div className="trait h-[16px] w-[100px] mt-0.5 bg-[#FE0466]" />
        </div>

      </div>

      {/* Form */}
       <div className='w-[60%] h-screen justify-center items-center mx-auto flex gap-10 py-15'>
          <div className="bloc1 w-full">
            <div className="inner w-full flex flex-col items-center">
              {/* Name input */}
              <div className="name flex gap-4 mb-4">
                <input type="text" name="" id="" placeholder='Name' className='bg-[#FE0466] p-2 w-65 h-10 text-sm text-white placeholder:text-white outline-none border-none' />
                <input type="email" name="" id="" placeholder='E-mail' className='bg-[#FE0466] p-2 w-65 h-10 text-sm text-white placeholder:text-white outline-none border-none' />
              </div>
              {/* city input */}
              <div className="name flex gap-4 mb-4">
                <input type="tel" name="" id="" placeholder='Phone' className='bg-[#FE0466] p-2 w-65 h-10 text-sm text-white placeholder:text-white outline-none border-none' />
                <input type="text" name="" id="" placeholder='City' className='bg-[#FE0466] p-2 w-65 h-10 text-sm text-white placeholder:text-white outline-none border-none' />
              </div>
              {/* city input */}
              <div className="comment w-full">
                <textarea name="" id="" placeholder='Message' className='bg-[#FE0466] w-full h-30 p-2 text-sm text-white placeholder:text-white outline-none border-none'></textarea>
              </div>
              <button type="button" className='bg-[#FE0466] text-white w-full p-2 mt-3'>Envoyez</button>
            </div>
          </div>
          <div className="bloc2 w-full">
            {
              card.map((item, index) => (
                <div key={index} className="w-60 card flex items-center gap-4 mb-6 border-l-4 border-[#FE0466] p-3 shadow-md">
                  <img src={item.icon} alt="Icon" width={40} height={40} />
                  <div className="info">
                    <h4 className="font-bold">{item.address}</h4>
                    <p className="">{item.locater}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <Footer />

    </>

  )
}

export default page