import React from 'react'
import Image from 'next/image'
import { FaCarrot } from 'react-icons/fa'
import Link from 'next/link'

const TastetItem = ({tastetImg, title, url}) => {
  return (
    <div className='relative mx-auto  w-auto shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300 group'>
      <Link href={url}>
        <Image src={tastetImg} alt='Instagram Image' width={600} height={600} className='rounded-lg h-[150px] w-[150px] lg:h-[200px] lg:w-[200px]' style={{objectFit: 'cover'}} priority />
        {/* Overlay */}
        <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group rounded-lg'>
          <p className='group-hover:hidden text-white bg-black/50 rounded py-1 px-2 max-w-[80%] text-center'>{title}</p>
          <p className='text-gray-300 hidden group-hover:block'><FaCarrot size={30} /></p>
        </div>
      </Link>
    </div>
  )
}

export default TastetItem
