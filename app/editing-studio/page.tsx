import React from 'react'
import Header from '../components/header/Header'
import PreHead from '../sections/PreHead'
import Heroo from '../components/hero/Heroo'
import Footer from '../components/footer/Footer'
import Call from '../components/Call-To-Action/Call'


const editingStudio = () => {
  return (
    
    <>
    
        <PreHead />
        <Header  />
        <Heroo background='url("/img/editing.png")' traitColor='#FF0063' bgButton='#FF0063' textColor='#ffffff' un='Editing' deux='Studio' text="Studio de montage vidéo, de post-production, d'effets spéciaux, de color grading" />

        <div className='w-full '>
        <div className='w-[60%] flex flex-col mx-auto justify-center items-center'>
          <div className='flex flex-col justify-center items-center my-20'>
            <img src="/logo/presentation-brand.png" alt="presentation" width="200" height="auto" />
            <h3 className='uppercase text-2xl font-bold text-[#0B253C]'>Editing Studio</h3>
          </div>
          <p className='text-justify'>
            Bande dessinée
            La bande dessinée communément appelé BD ou bébé est une forme artistique, souvent désignée comme le neuvième art, utilisant une juxtaposition de dessins articulés en séquences narratives et le plus souvent accompagnés de textes.
            <br/> <br/>
            Livre illustré
            Un livre illustré est un livre composé d’illustration accompagnant généralement un texte, récit, éducatif ou documentaire.
            <br/> <br/>
            Mise en page
            La mise en page est l’action de disposer différents éléments de la composition d’une page papier ou web (titres, textes, illustrations voire animation) de manière hiérarchique et harmonieuse, elle comprend certaines techniques de typographie, de mise en forme et d’espacement, de titrage et de lettrines, d’illustration et de
            leur habillage.
            <br/> <br/>
            Game design
            Le game design ou conception de jeu est le processus de création et de mise au point des règles et autres éléments constitutifs d’un jeu. L’expression, qui s’applique à tout type de jeu, dont les jeux de société et les jeux de cartes et aussi les jeux vidéo.
          </p>
          <ul className='list-disc text-justify mt-5'>
            <li className='bold'>Illustration</li>
            <li>Bande dessinée</li>
            <li>livre pour enfants</li>
            <li>Mise en page Magazine …</li>
            <li>Game design ( création de jeux de société )</li>
          </ul>
          <a href="#" className="text-white py-2 px-8 bg-[#FE0466] my-20">Quelques Realisations</a>
        </div>
      </div>

      <Call />
      <Footer />
    
    </>

  )
}

export default editingStudio