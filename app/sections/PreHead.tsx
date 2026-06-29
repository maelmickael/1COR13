'use client'

import { link } from 'fs';
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn, FaYoutube, FaVimeoV } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const PreHead = ({ onArrowClick }: { onArrowClick: () => void }) => {
    const media = [
        {icon: <FaFacebookF />, link: "https://www.facebook.com/"},
        {icon: <FaInstagram />, link: "https://www.instagram.com/"},
        {icon: <FaBehance />, link: "https://www.behance.net/"},
        {icon: <FaLinkedinIn />, link: "https://www.linkedin.com/"},
        {icon: <FaYoutube />, link: "https://www.youtube.com/"},
        {icon: <FaVimeoV />, link: "https://vimeo.com/"},
    ]


  return (
    <div className="w-full overflow-hidden flex flex-col prehead">

        {/* Top Bar - Social Media INSIDE the fullscreen */}
        <div className='relative z-10 bg-[#0B253C] text-white w-full py-2 flex-shrink-0'>
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

    </div>
  )
}

export default PreHead