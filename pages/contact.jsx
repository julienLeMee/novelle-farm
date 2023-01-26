import React from 'react'
import Link from 'next/link'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const contactImg = 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80'

const contact = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover'>
        <img
          src={contactImg}
          alt='homepage' className='absolute top-0 left-0 right-0 bottom-0 z-[1] w-full object-cover max-h-[80%] my-auto'
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[2] max-h-[80%] my-auto' />
        <div className=' text-white z-[2]'>
          <h1 className='text-5xl'>CONTACT</h1>
        </div>
        <div className='flex items-center justify-center my-4 w-full sm:w-[80%] z-10'>
          <Link className='p-4' href="tel:0687324027" target='_blank'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 bg-white text-[#35441e] ease-in duration-300'>
              <BsFillTelephoneFill />
            </div>
          </Link>
          <Link className='p-4' href='mailto:laberjotine@gmail.com' target='_blank'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 bg-white text-[#35441e] ease-in duration-300'>
              <AiOutlineMail />
            </div>
          </Link>
          <Link className='p-4' href='https://fr-fr.facebook.com/laberjotine/' target='_blank'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 bg-white text-[#35441e] ease-in duration-300'>
              <FaFacebookF />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default contact
