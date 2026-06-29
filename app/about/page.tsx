'use client'

import React from 'react'
import PreHead from '../sections/PreHead'
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaVimeoV, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import Header from '../components/header/Header'
import Title from '../components/title'
import { div } from 'framer-motion/client'
import Team from '../components/Team/Team'
import Call from '../components/Call-To-Action/Call'
import Footer from '../components/footer/Footer'

const About = () => {

   const media = [
          {icon: <FaFacebookF />, link: "https://www.facebook.com/"},
          {icon: <FaInstagram />, link: "https://www.instagram.com/"},
          {icon: <FaBehance />, link: "https://www.behance.net/"},
          {icon: <FaLinkedinIn />, link: "https://www.linkedin.com/"},
          {icon: <FaYoutube />, link: "https://www.youtube.com/"},
          {icon: <FaVimeoV />, link: "https://vimeo.com/"},
      ]

    const strong = [
        {
            icon: "/logo/1C13S-logo 2021-29.png",
            label: "Originalité & Créativité",
            descript: "Afin de vous démarquer de la concurrence, nous nous attelons au sein de notre studio à vous proposer des solutions uniques et innovantes. Notre équipe d’artistes conçoit également des designs de qualité pour améliorer votre image de marque.",
        },
        {
            icon: "/logo/1C13S-logo 2021-30.png",
            label: "Flexibilité & adaptation",
            descript: "Pour vous apporter des réponses sur mesure, nous prenons plaisir à nous plier à vos exigences. Nous nous ajustons également avec aisance à vos attentes de manière à vous satisfaire.",
        },
        {
            icon: "/logo/1C13S-logo 2021-31.png",
            label: "Dynamise & vivacité",
            descript: "Nous nous investissons corps et âme pour faire de votre projet une réussite totale. Pour garder une relation de confiance et maximiser le retour sur investissement de votre entreprise, nous nous efforçons à accomplir notre mission dans les délais.",
        }, 
    ];

    const team = [
      {
        id: 1,
        img: "/img/team/compt.jpg",
        name: "Jean Dupont",
        role: "Directeur Artistique",
      },
      {
        id: 2,
        img: "/img/team/rh.jpg",
        name: "Marie Curie",
        role: "Designer",
      },
      {
        id: 3,
        img: "/img/team/info.jpg",
        name: "Alice Martin",
        role: "Responsable Marketing",
      },
      {
        id: 4,
        img: "/img/team/dg.jpg",
        name: "David Smith",
        role: "Chargé de Communication",
      },
      {
        id: 5,
        img: "/img/team/pdg.jpg",
        name: "Sophie Dubois",
        role: "Chef de Projet",
      },
    ];
      
  return (
    <>
      <div className='relative z-10 bg-white text-[#0B253C] w-full py-2 flex-shrink-0'>
        <div className='w-[80%] mx-auto flex items-center justify-end text-md gap-1'>
            {
                media.map( (link, index) => (
                    <Link href={link.link} key={index} className='transition-all duration-300 hover:text-[#FE0466]'>
                        {link.icon}
                    </Link>
                ) )
            }
        </div>
      </div>
      <Header bg='#0B253C' logo='/logo/logo_blanc.png' textColor='#ffffff' />
      {/* Hero Section */}
      <div className="w-full h-screen overflow-hidden bg-[url('/img/about.png')] bg-cover bg-center flex items-center justify-center">
        
        <div className="hero_content w-[60%] mx-auto">

          <Title bef='à propos' after='' />

          <p className='w-xs text-justify text-[0.9em]'>
            <b> Fondé en juillet 2017 et situé à Abidjan-Cocody Angré, 1COR13 STUDIO est un studio qui a pour mission de donner un souffle nouveau à votre communication. </b> <br /> <br />

            De la création du logo jusqu’a la fabrication des support de communication qui en découle, il sagit d’un véritable travail  artistique. <br /> <br />

            Alors nous avons rassemblé une équipe d’artistes et de créatifs capable de réaliser l’ensemble de vos projets de créations visuelles sur tous les supports indispensable au bon dévéloppement commercial de votre entreprise.
          </p>

        </div>
      </div>
      
      {/* Conviction Section */}
      <div className="w-full min-h-screen bg-[url('/img/conviction.jpg')] bg-cover bg-center flex items-center justify-center">
          
        <div className="hero_content w-[60%] mx-auto">

          <Title bef='Notre' after='Conviction' textColor='#ffffff' />

          <p className='w-md text-justify text-[0.9em] mt-5 text-[#ffffff]'>

            Nous savons tous que toute relation ou collaboration durable a pour fondation la confiance. 
            Chez nous à 1COR13 STUDIO règne quelque chose de beaucoup plus grand :  l’amour. 
            nous sommes entièrement convaincus que l’amour triomphe toujours
            L’apôtre Paul n’a t-il pas écrit dans l’épitre aux corinthiens : « l’amour n’échoue jamais ».
            C’est pour cela que nous ne comptons pas vous servir mais partager des émotions et des expériences avec vous. Nous ne comptons pas signer des contrats mais bâtir une relation durable avec vous.
            <br /> <br /> <br />
            #LOVEALWAYSWINS

          </p>

        </div>

      </div>
      
      {/* strong Section */}

      <div className="strong w-full h-auto py-10">
        <div className="w-[60%] mx-auto flex gap-10 justify-center items-start">
          
          {

            strong.map((item, index) => (
              <div key={index} className='flex flex-col items-center gap-4'>
                
                <img src={item.icon} alt={item.label} className='object-contain w-30 h-30' />
                <h3 className='text-center'>{item.label}</h3>
                <p className='text-xs text-center'>{item.descript}</p>
              </div>
            ))

          }

        </div>
      </div>

      { /* Team Section */}
      
      

      { /* Team Section */}
      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center py-20">
        <div className="w-[60%] mx-auto">
          <Title bef='Notre' after='Équipe' />
          <p className='text-justify text-[0.9em] mt-5'>
            Notre équipe est composée de professionnels passionnés et expérimentés, 
            dédiés à la création et à l'innovation. Chaque membre apporte son expertise unique 
            pour garantir le succès de vos projets.
          </p>

          <div className="w-full">
            <Team members={team} />
          </div>
        </div>
      </div>

      { /* Call to action Section */}
      <Call />
      <Footer />

    </>
  )
}

export default About