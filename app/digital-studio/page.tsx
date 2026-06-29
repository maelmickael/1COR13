import React from 'react'
import Header from '../components/header/Header'
import PreHead from '../sections/PreHead'
import Heroo from '../components/hero/Heroo'

import Call from '../components/Call-To-Action/Call'
import Footer from '../components/footer/Footer'



const digitalStudio = () => {
  return (
    
    <>
      <PreHead />
      <Header />
      <Heroo background='url("/img/digital.png")' traitColor='#FF0063' bgButton='#FF0063' textColor='#ffffff' un='Digital' deux='Studio' text="Studio de création de site web, de boutique en ligne, de référencement naturel (SEO), de gestion des réseaux sociaux"/>
      
      <div className='w-full '>
        <div className='w-[60%] flex flex-col mx-auto justify-center items-center'>
          <div className='flex flex-col justify-center items-center my-20'>
            <img src="/logo/presentation-brand.png" alt="presentation" width="200" height="auto" />
            <h3 className='uppercase text-2xl font-bold text-[#0B253C]'>Digital Studio</h3>
          </div>
          <p className='text-justify'>
            Nous apportons des solutions créatives sur mesure pour renforcer votre image, augmenter votre visibilité, séduire votre cible et développer votre activité. 
            <br /> <br />
            Avec plus de 25 ans d’expérience dans le secteur des médias, nous mettons à profit notre connaissance du marché print et digital pour vous accompagner dans la création d’une image de marque forte, pertinente et séduisante, concevoir des territoires de communication impactants et reconnaissables, imaginer une stratégie visuelle porteuse et pérenne et fédérer autour d’une charte graphique originale…
            Notre savoir-faire vous garantit une réponse rapide à toutes vos demandes, de la conception jusqu’au développement ou le suivi de fabrication, dans le respect de vos délais.

            <br /> ​ <br /> 
            Nous analysons vos besoins, la cible sectorielle, la concurrence et travaillons avec vous sur la conception de tous vos supports médias et hors-médias en leur apportant la touche d’originalité qui souligne votre identité et augmente votre visibilité.
            <br />  <br /> 
            Que vous ayez besoin d’une charte graphique globale pour lancer ou consolider votre activité, d’un logo fort qui valorise votre marque, d’un design dynamique pour votre site web, de la mise en page d’une revue, d’un livre ou encore d’éléments de communication percutants, Xavier Chambon, notre directeur artistique, saura exploiter vos idées à vos côtés, afin de répondre efficacement et à vos attentes et définir avec vous votre identité visuelle unique.
            <br />  <br /> 
            ​
            Soucieux de la satisfaction de nos clients et de la qualité de notre travail, nous ne prenons aucun engagement que nous ne sommes convaincus de pouvoir satisfaire.
          </p>
          <ul className='list-disc text-justify mt-5'>
            <li>Site internet</li>
            <li>Web design</li>
            <li>Community management</li>
            <li>Newsletter</li>
          </ul>
          <a href="#" className="text-white py-2 px-8 bg-[#FE0466] my-20">Quelques Realisations</a>
        </div>
      </div>

      <Call />
      <Footer />
    </>

  )
}

export default digitalStudio