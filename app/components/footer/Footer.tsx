
import Link from 'next/link'
import React from 'react'
import { FaBehance, FaFacebookF, FaInstagram, FaLinkedinIn, FaVimeoV, FaYoutube } from 'react-icons/fa'

const Footer = () => {

    const media = [
        {icon: <FaFacebookF />, link: "https://www.facebook.com/"},
        {icon: <FaInstagram />, link: "https://www.instagram.com/"},
        {icon: <FaBehance />, link: "https://www.behance.net/"},
        {icon: <FaLinkedinIn />, link: "https://www.linkedin.com/"},
        {icon: <FaYoutube />, link: "https://www.youtube.com/"},
        {icon: <FaVimeoV />, link: "https://vimeo.com/"},
    ]

  return (
    
    <footer>
        <div className='w-[60%] mx-auto flex justify-between items-center py-6'>
            <div className='flex'>
                <img src="/logo/icon.png" alt="logo_icon" className='object-cover' width={150} height={150}/>
                <div className='ml-2 leading-[20px]'>
                    <h1 className='font-[700]'>1COR13 STUDIO</h1>
                    <p>Côte d’ivoire-Abidjan-Cocody-Angré</p>
                    <p>B.P. : 23 BP 1714 Abidjan 23</p>
                    Cel: +225 07 07 07 07 07
                    <p>Email: hello@1cor13studio.com</p>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='font-[700]'>Suivez-nous</h1>
                <div className='flex space-x-1'>
                    {
                        media.map( (link, index) => (
                            <Link href={link.link} key={index} className='transition-all duration-300 hover:text-[#FE0466]'>
                                {link.icon}
                            </Link>
                        ) )
                    }
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer