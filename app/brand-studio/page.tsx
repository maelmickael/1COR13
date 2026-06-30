import React from 'react'
import Header from '../components/header/Header'
import PreHead from '../sections/PreHead'
import Heroo from '../components/hero/Heroo'
import Footer from '../components/footer/Footer'
import Call from '../components/Call-To-Action/Call'


const brandStudio = () => {
  return (
    
    <>
        <PreHead />
        <Header />
        <Heroo background='url("/img/brand.png")' traitColor='#00FFFF' bgButton='#00FFFF' textColor='#000000' un='Brand' deux='Studio' text="Studio de creation de logo, de charge graphique, carte de visite, de flyers, plaquette commerciale" />
        <div className='w-full '>
        <div className='w-[60%] flex flex-col mx-auto justify-center items-center'>
          <div className='flex flex-col justify-center items-center my-20'>
            <img src="/logo/presentation-brand.png" alt="presentation" width="200" height="auto" />
            <h3 className='uppercase text-2xl font-bold text-[#0B253C]'>Brand Studio</h3>
          </div>
          <p className='text-justify'>
            L’identité visuelle ou identité graphique est un ensemble d’éléments visuels cohérents qui permettent d’identifier une même entité au travers des différents médias de communication qu’elle émet. Elle exprime grâce à un style graphique propre à l’entreprise, les valeurs, l’activité et les ambitions de celle-ci et se traduit par des signes, des couleurs, des formes, des textes ainsi que des mises en forme. L’identité graphique se décline sur tout support : documents, tracts, enseigne matérielle, mais aussi sites web ou produits promotionnels. Elle permet de reconnaître l’entité qui émet le document, qu’il s’agisse d’une structure (entreprise, institution, association),
            d’une marque, ou d’un projet. Les supports de communications regroupent tout support média dont le rôle est de
            faire passer un message ( affiches, spot publicitaire, site internet,…)
          </p>
          <ul className='list-disc text-justify mt-5'>
            <li className='bold'>Création de logo &  Charte  
            graphique</li>
            <li>Affiche publicitaire / flyer</li>
            <li>Plaquette commerciale</li>
            <li>Brochure </li>
            <li>Kakémono</li>
          </ul>
          <a href="#" className="text-white py-2 px-8 bg-[#FE0466] my-20">Quelques Realisations</a>
        </div>
      </div>

      <Call />
      <Footer />
    
    </>

  )
}

export default brandStudio