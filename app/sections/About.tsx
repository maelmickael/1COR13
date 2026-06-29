import React from 'react'

const About = () => {
  return (
    <>
        <div className='py-20'>

            <div className="w-[60%] mx-auto ">

                <h1 className='uppercase text-[60px] leading-[60px] font-[600] text-[#0B253C]'>
                    qui <br /> sommes-nous ?
                </h1>
                <div className='trait h-[10px] w-[70px] bg-[#FE0466] mt-0.5'></div>
                <p className='py-4 text-justify text-[17px] leading-[20px]'>
                    <b>
                        Fondé en juillet 2017 et situé à Abidjan Cocody Angré, 1COR13 STUDIO est un studio qui a pour mission de donner un souffle nouveau à votre communication. 
                    </b> <br />
                    De la création du logo jusqu’a la fabrication des support de communication qui en découle, il s’agit d’un véritable travail  artistique.
                    Alors nous avons rassemblé une équipe d’artistes et de créatifs capable de réaliser l’ensemble de vos projets de créations visuelles sur tous les supports indispensable au bon devéloppement commercial de votre entreprise.
                </p>

                <div className="pt-3">
                    <a href="#" className='bg-[#FE0466] text-white py-2 px-5'>En Savoir Plus</a>
                </div>

            </div>

        </div>
    </>
  )
}

export default About