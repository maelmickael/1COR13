import React from 'react'
import styles from './styles/hero.module.css'

const Hero = () => {
  return (
    <>
        <div className={styles.hero} id="hero-section">

            <div className="content-hero w-[60%] mx-auto">
                <h1 className='uppercase text-[60px] leading-[60px] font-[900] text-white'>
                    love <br /> always <br /> wins
                </h1>
                <div className='trait h-[10px] w-[80px] bg-[#FE0466] mt-0.5'></div>
            </div>

        </div>
    </>
  )
}

export default Hero