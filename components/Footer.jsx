import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { SlSocialInstagram } from 'react-icons/sl'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='pt-10 bg-[#f3b45a]/20'>
      <div className='flex max-w-[80%] mx-auto items-start justify-evenly my-4 sm:w-[80%] border-b p-4 py-10'>
        <Link href='/'>
          <Image src='/assets/logo.jpg' width={70} height={70} alt='logo' className='cursor-pointer rounded-full hover:scale-105 duration-300' style={{objectFit: 'cover'}} priority />
        </Link>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <p className='py-4 tracking-wider text-sm'>Liens rapides</p>
            <div className="flex flex-col">
              <Link href="tel:0687324027">
                <p className='text-gray-500 mb-2 mr-4 cursor-pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>page link</p>
              </Link>
              <Link href='mailto:laberjotine@gmail.com' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>page link</p>
              </Link>
              <Link href='https://fr-fr.facebook.com/laberjotine/' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 ointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>page link</p>
              </Link>
              <Link href='https://fr-fr.facebook.com/laberjotine/' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 ointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>page link</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className='py-4 tracking-wider text-sm'>Productions</p>
            <div className=" flex-col">
              <Link href="tel:0687324027">
                <p className='text-gray-500 mb-2 mr-4 cursor-pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>page link</p>
              </Link>
              <Link href='mailto:laberjotine@gmail.com' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>page link</p>
              </Link>
              <Link href='mailto:laberjotine@gmail.com' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>page link</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className='py-4 tracking-wider text-sm'>Contact</p>
            <div className=" flex-col">
              <Link href="tel:0687324027">
                <p className='text-gray-500 mb-2 mr-4 cursor-pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>page link</p>
              </Link>
              <Link href='mailto:laberjotine@gmail.com' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>page link</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className='py-4 tracking-wider text-sm'>Social</p>
            <div className="flex">
              <Link href="tel:0687324027">
                <BsFillTelephoneFill className='mr-4 cursor-pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
              <Link href='mailto:laberjotine@gmail.com' target='_blank'>
                <AiOutlineMail className='cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
              <Link href='https://fr-fr.facebook.com/laberjotine/' target='_blank'>
                <SlSocialInstagram className='cursor-pointer mr-4 ointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
              <Link href='https://fr-fr.facebook.com/laberjotine/' target='_blank'>
                <FaFacebookF className='cursor-pointer mr-4 ointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
            </div>
          </div>
        </div>
      </div>
        <p className='text-sm text-center text-gray-500 pb-20'>2023 | © La Ferme De Novelle tous droits réservés</p>
    </div>
  )
}

export default Footer
