
import React from 'react'
import styles from './call.module.css'

const Call = () => {
  return (
    <>
        <div className={`${styles.call}`}>
            <div className='w-[60%] mx-auto py-10'>
                <h1 className='uppercase text-[60px] leading-[60px] font-[600] text-white'>
                    Parlez-Nous <br /> De Votre Projet
                </h1>
                <div className='trait h-[10px] w-[70px] bg-[#FE0466] mt-0.5'></div> 
                <p className='py-4 text-white'>
                    <b>1COR13 STUDIO</b> regroupe à son sein, quatre studios <br />
                    pour répondre à vos besoins de façon optimale.
                </p>   
                <a href="#" className="bg-white text-[#0B253C] py-2 px-8 hover:text-white hover:bg-[#FE0466] transition duration-150 delay-75 ease-in-out font-[600]">Cliquez Ici</a>
            </div>     
        </div>    
    </>
  )
}

export default Call