
import React from 'react'

const HERO_COLOR = '#3129FF'

const Heroo = ({
  background = 'url("/img/motion.png")',
  traitColor = HERO_COLOR,
  bgButton = HERO_COLOR,
  textColor = '#ffffff',
  un = 'Motion',
  deux = 'Studio',
  text = `Studio de création 2D, 3D, motion design,  film institutionnel ...`,
}) => {
  return (
    <div className="hero-section w-full h-[480px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: background }}>
      <div className="content-hero w-[60%] mx-auto">
        <h1 className="uppercase text-[100px] leading-[100px] font-[900] text-white">
          {un} <br /> {deux}
        </h1>

        <div className="trait h-[16px] w-[100px] mt-0.5" style={{ backgroundColor: traitColor }} />

        <p className="text-white text-[20px] leading-[20px] mt-4">
          {text}
        </p>

        <div className="buttonoo mt-6">
          <a href="#" className="py-2 px-8 hover:-translate-x-2 transition duration-150 delay-75 ease-in-out font-[600]" style={{ backgroundColor: bgButton, color: textColor }}>
            Cliquez Ici
          </a>
        </div>
      </div>
    </div>
  )
}

export default Heroo