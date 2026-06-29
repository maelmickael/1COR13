'use client';


import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const services = [
  { name: 'Motion Studio', href: '/motion-studio' },
  { name: 'Brand Studio', href: '/brand-studio' },
  { name: 'Digital Studio', href: '/digital-studio' },
  { name: 'Editing Studio', href: '/editing-studio' },
]

const Header = ( { logo = '/logo/1C13S-Loog OK-01.png' , bg = '#ffffff', textColor = '#0B253C' } ) => {
  const [fixed, setFixed] = useState(false)
  const [height, setHeight] = useState(0)
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const headerEl = headerRef.current
    if (!headerEl) return

    const rect = headerEl.getBoundingClientRect()
    const initialOffset = rect.top + window.scrollY
    setHeight(rect.height)

    const onScroll = () => {
      if (window.scrollY > initialOffset) setFixed(true)
      else setFixed(false)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {fixed && <div style={{ height }} aria-hidden />}
      <header id="header-section" ref={headerRef}>
        <div
          className={`w-full flex items-center justify-center shadow-md`}
          style={{
            position: fixed ? 'fixed' : 'static',
            top: fixed ? 0 : 'auto',
            left: 0,
            right: 0,
            backgroundColor: bg,
            color: textColor,
            zIndex: fixed ? 50 : 'auto',
            transition: 'box-shadow 150ms ease, transform 150ms ease',
            boxShadow: fixed ? '0 6px 18px rgba(11,37,60,0.15)' : 'none',
          }}
        >
            <div className='header-content w-[80%] x-auto flex items-center justify-center space-x-10 py-4'>
                <Link href="/"><img src={logo} alt="Logo" width={200} height={200}/></Link>
               
                <nav>
                    <ul className='flex items-center space-x-10 uppercase font-uni-sans text-[15px] leading-[16px] font-bold'>
                        <li>
                            <a href="/about">
                                Qui <br /> sommes nous ?
                                <div className='trait h-[6px] w-[30px] bg-[#FE0466] mt-0.5'></div>
                            </a>
                        </li>
                        <li className='relative group'>
                            <a href="#" className='block'>
                                Nos <br /> Services
                                <div className='trait h-[6px] w-[30px] bg-[#FE0466] mt-0.5'></div>
                            </a>
                            <div className='absolute left-0 top-full mt-3 w-50 border border-slate-200 bg-white/95 p-2 shadow-lg opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible'>
                                <ul className='flex flex-col gap-1'>
                                    {services.map((service) => (
                                        <li key={service.href}>
                                            <a
                                                href={service.href}
                                                className='block px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-[#FE0466]'
                                            >
                                                {service.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                        <li className='relative group'>
                            <a href="/nos-realisations">
                                Nos <br /> Réalisations
                                <div className='trait h-[6px] w-[30px] bg-[#FE0466] mt-0.5'></div>
                            </a>
                        </li>
                        <li>
                            <a href="/contact-us">
                                Nous <br /> Contacter
                                <div className='trait h-[6px] w-[30px] bg-[#FE0466] mt-0.5'></div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header