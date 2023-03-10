import React from 'react'
import { GiChicken, GiCow, GiWheat } from 'react-icons/gi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { SlSocialInstagram } from 'react-icons/sl'
import Link from 'next/link'

const Contact = () => {
  return (
    <div id='contact' className='w-full p-2 py-20'>
      <div className='max-w-[80%] mx-auto'>
        {/* <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-8 text-center'>Contact</h2> */}
        <div className="h-full w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center mx-auto w-[150px]">
            <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 text-white bg-[#35441e] ease-in duration-300'>
              <GiChicken className='scale-150' />
            </div>
            <h3 className='pt-4 text-xl'>Email</h3>
            <p className='text-xs md:text-sm lg:text-base'>monmail@mail.com</p>
          </div>
          <div className="flex flex-col items-center mx-auto w-[150px]">
            <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 text-white bg-[#35441e] ease-in duration-300'>
              <GiChicken className='scale-150' />
            </div>
            <h3 className='pt-4 text-xl'>Téléphone</h3>
            <p className='text-xs md:text-sm lg:text-base'>438 506 3456</p>
          </div>
          <div className="flex flex-col items-center mx-auto w-[150px]">
            <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 text-white bg-[#35441e] ease-in duration-300'>
              <GiChicken className='scale-150' />
            </div>
            <h3 className='pt-4 text-xl'>Adresse</h3>
            <p className='text-xs md:text-sm lg:text-base'>Lieu dit Novelle</p>
            <p className='text-xs md:text-sm lg:text-base'>Martigny le comte</p>
          </div>
          <div className="flex flex-col items-center mx-auto w-[150px]">
            <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 text-white bg-[#35441e] ease-in duration-300'>
              <GiChicken className='scale-150' />
            </div>
            <h3 className='pt-4 text-xl'>Socials</h3>
            <div className="flex pt-1">
              <Link href="tel:0687324027">
                <BsFillTelephoneFill className='mx-auto w-full mr-4 cursor-pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
              <Link href='mailto:lafermedenovelle@gmail.com' target='_blank'>
                <AiOutlineMail className='mx-auto w-full cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
              <Link href='https://www.instagram.com/lafermedenovelle/' target='_blank'>
                <SlSocialInstagram className='mx-auto w-full cursor-pointer mr-4 ointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
              <Link href='https://fr-fr.facebook.com/lafermedenovelle/' target='_blank'>
                <FaFacebookF className='mx-auto w-full cursor-pointer mr-4 ointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
