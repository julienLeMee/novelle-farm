import React from 'react'
import Image from 'next/image'
import { FaCarrot } from 'react-icons/fa'
import Link from 'next/link'
const tastetImg = 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'

const TastetItem = () => {
  return (
    <div className='relative mx-auto  w-auto shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300'>
      <Link href='/'>
        <Image src={tastetImg} alt='Instagram Image' width={600} height={600} className='rounded-lg h-[150px] w-[150px] lg:h-[200px] lg:w-[200px]' style={{objectFit: 'cover'}} priority />
        {/* Overlay */}
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group rounded-lg'>
          <p className='text-gray-300 hidden group-hover:block'><FaCarrot size={30} /></p>
        </div>
      </Link>
    </div>
  )
}

export default TastetItem
