import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ActivityItem = ({title, backgroundImg, url, description}) => {
  return (
    // <div className='relative flex items-end h-full w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#35441e] to-[#35441e71]'>
    //     <Link href={url}>
    //   <Image className='rounded-xl group-hover:opacity-10 h-full object-cover' src={backgroundImg} width={600} height={600} alt='project' />
    //   <div className='hidden min-w-[80px] group-hover:block absolute bottom-0 left-0 p-4'>
    //     <h3 className='text-2xl text-white tracking-wider'>{title}</h3>
    //     <p className='pb-4 pt-2 text-white text-sm'>{description}</p>
    //   </div>
    //     </Link>
    // </div>
    <div className='relative mx-auto h-auto w-auto shadow-xl shadow-gray-400 rounded-xl hover:scale-105 duration-300 my-8'>
      <Link href={url}>
        <Image className='rounded-lg h-[300px] w-[300px]' src={backgroundImg} width={600} height={600} alt='project' style={{objectFit: 'cover'}} />
        <div className='min-w-[80px] absolute bottom-0 left-0 p-4 bg-gradient-to-t from-[#35441e] to-[#35441e00] rounded-b-lg'>
          <h3 className='text-2xl text-white tracking-wider'>{title}</h3>
          <p className='pt-2 text-white text-sm'>{description}</p>
        </div>
      </Link>
    </div>
  )
}

export default ActivityItem
