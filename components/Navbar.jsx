import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import navLogoImg from '../public/assets/logo.jpg'
import { FaFacebookF } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  // const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')
  // const [textShadow, setTextShadow] = useState('0 0 10px #01647C')
  const [logo, setLogo] = useState(navLogoImg)
  const [shadow, setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 50) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div style={{backgroundColor: 'white'}} className={ shadow ? 'fixed left-0 top-0 w-full z-[100] ease-in duration-300 shadow-xl max-w-[100vw]' : 'fixed left-0 top-0 w-full z-[100] ease-in duration-300 max-w-[100vw]'}>
      <div className='max-w-[80%] m-auto flex items-center justify-between text-white'>
        <Link href='/' className='w-16'>
          <Image
            src={logo}
            width={50}
            height='auto'
            alt='logo'
            className='cursor-pointer'
            style={{objectFit: 'cover'}}
            priority
          />
        </Link>
        <ul style={{color: 'black'}} className='hidden sm:flex'>
          <li className='py-4 ml-6'>
            <Link className='hover:text-[var(--red)] text-sm hover:underline text-gray-900' href='/'>Accueil</Link>
          </li>
          <li className='py-4 ml-6'>
            <Link className='hover:text-[var(--red)] text-sm hover:underline text-gray-900' href='/histoire'>Notre histoire</Link>
          </li>
          <li className='py-4 ml-6'>
            <Link className='hover:text-[var(--red)] text-sm hover:underline text-gray-900' href='/produits'>Nos produits</Link>
          </li>
          <li className='py-4 ml-6'>
            <Link className='hover:text-[var(--red)] text-sm hover:underline text-gray-900' href='/blog'>Blog</Link>
          </li>
          <li className='my-auto ml-6 hover:scale-105 duration-300'>
            <Link className='text-sm hover:bg-[#cb5b63] duration-300 p-2 bg-[var(--red)] rounded text-white' href='/contact'>Contact</Link>
          </li>
        </ul>

      {/* Mobile Button */}
      <div onClick={handleNav} className='sm:hidden z-10'>
          {nav ? <AiOutlineClose size={20} style={{color: 'white'}} className='hover:cursor-pointer' /> : <AiOutlineMenu size={20} style={{color: 'black'}} className='hover:cursor-pointer' />}
        </div>
      {/* Mobile Menu */}
      <div className={ nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/90 text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
        <ul>
          <li onClick={handleNav} className='p-4 text-4xl text-white hover:text-[var(--red)]'>
            <Link href='/'>Accueil</Link>
          </li>
          <li onClick={handleNav} className='p-4 text-4xl text-white hover:text-[var(--red)]'>
            <Link href='/histoire'>Notre histoire</Link>
          </li>
          <li onClick={handleNav} className='p-4 text-4xl text-white hover:text-[var(--red)]'>
            <Link href='/produits'>Nos produits</Link>
          </li>
          <li onClick={handleNav} className='p-4 text-4xl text-white hover:text-[var(--red)]'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li onClick={handleNav} className='p-4 text-4xl text-white hover:text-[var(--red)]'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>

      </div>

  )
}

export default Navbar
