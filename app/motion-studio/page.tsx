import React from 'react'
import Header from '../components/header/Header'
import PreHead from '../sections/PreHead'
import Heroo from '../components/hero/Heroo'
import Footer from '../components/footer/Footer'
import Call from '../components/Call-To-Action/Call'


const motionStudio = () => {
  return (
    
    <>
    
        <PreHead />
        <Header />
        <Heroo text="Studio de création 2D, 3D, motion design, film institutionnel ..." />
        <div className='w-full '>
        <div className='w-[60%] flex flex-col mx-auto justify-center items-center'>
          <div className='flex flex-col justify-center items-center my-20'>
            <img src="/logo/presentation-motion.png" alt="presentation" width="200" height="auto" />
            <h3 className='uppercase text-2xl font-bold text-[#0B253C]'>Motion Studio</h3>
          </div>
          <p className='text-justify'>
            Ce studio est chargé de produire et réaliser toute sorte de projet s’inscrivant dans l’audiovisuel ou la publicité (film d’animation 2D, série télé, clip vidéo, publicité…).
            <br /> <br />
            Animation 2D
            L’animation 2D ou dessin animée est une technique qui consiste à animer des éléments en deux dimensions pour donner une impression de mouvement continu et de vie. On retrouve de l’animation 2D dans plusieurs formats : message publicitaire, clip vidéo, film d’animation.
            <br /> <br />
            Motion design
            Le motion design ou graphisme animé est une forme d’art visuel consistant à donner vie au graphisme, c’est aussi étendre le graphisme au milieu audiovisuel. Cela peut concerner de l’habillage typographique, de l’animation d’identités visuelles, de l’animation d’éléments 3D, interfaces, sites web, tablettes, téléphones ou encore l’animation d’illustrations (images, vidéos etc).
              <br /> <br />
            Animatic
            L’animatic c’est une technique d’animation qui consiste à animer grossièrement les esquisses ou images contenues dans un story-board afin d’obtenir une idée d’ensemble de la réalisation finale.
              <br /> <br />
            Storyboard
            Un story-board ou scénarimage est un outil audiovisuel qui intervient dans la réalisation de films publicitaires ou cinématographiques. Le storyboard est tout simplement le scénario découpé et illustré en image de plusieurs croquis ou dessin d’où le nom scénarimage.
          </p>
          <a href="#" className="text-white py-2 px-8 bg-[#FE0466] my-20">Quelques Realisations</a>
        </div>
      </div>

      <Call />
      <Footer />
    
    </>

  )
}

export default motionStudio