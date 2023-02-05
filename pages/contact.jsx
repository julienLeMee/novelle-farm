import React from 'react'
import Link from 'next/link'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const contactImg = 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80'

const contact = () => {
  return (
    <>
      <div className='relative flex flex-col justify-start h-full bg-center'>
        <img
          src={contactImg}
          alt='homepage' className='w-full h-full object-cover max-h-[400px] opacity-80'
        />
        <div className='text-white flex items-center justify-center h-full w-full my-auto absolute'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>CONTACT</h1>
        </div>
      </div>
        {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-white/30 z-[2] max-h-[80%]' /> */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-10'>
          <div className="flex flex-col items-center justify-center py-8">
            <Link className='my-auto m-10' href="tel:0687324027" target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 bg-white text-[#35441e] ease-in duration-300'>
                <BsFillTelephoneFill className='scale-150' />
              </div>
            </Link>
            <h6 className='mt-8'>Téléphone:</h6>
            <p>438-509-4356</p>
          </div>
          <div className="flex flex-col items-center justify-center py-8">
            <Link className='my-auto m-10' href='mailto:lafermedenovelle@gmail.com' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 bg-white text-[#35441e] ease-in duration-300'>
                <AiOutlineMail className='scale-150' />
              </div>
            </Link>
            <h6 className='mt-8'>Courriel:</h6>
            <p>monmail@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center py-8">
            <Link className='my-auto m-10' href='https://fr-fr.facebook.com/lafermedenovelle/' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 bg-white text-[#35441e] ease-in duration-300'>
                <FaFacebookF className='scale-150' />
              </div>
            </Link>
            <h6 className='mt-8'>Facebook:</h6>
            <p>@fermedenovelle</p>
          </div>
        </div>
    </>
  )
}

export default contact
