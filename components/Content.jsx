import Image from 'next/image'
import React from 'react'
import { GiChicken, GiCow, GiWheat } from 'react-icons/gi'
import aboutImg from '../public/assets/poule-main.jpg'

const Content = () => {
  return (
    <div id='about' className='w-full pt-52 pb-24 md:py-36 lg:py-16 flex items-center justify-center mb-2'>
      <div className='max-w-[90%] md:max-w-[80%] mx-auto md:grid grid-cols-3'>
        <div className='col-span-2 flex flex-col my-auto max-w-[600px]'>
          <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-4 max-w-[400px]'>NOS VALEURS ET NOTRE ENGAGEMENT</h2>
          <p className='py-2 pr-10 mb-8 text-gray-600 text-sm'>
          La Ferme de Novelle est une ferme Charolaise qui se consacre à l'élevage de bovins Charolais et de volailles fermières de qualité supérieure, qui sont nourris avec des aliments naturels et élevés en plein air. <br />
          <br />
          Nous avons également à coeur de respecter la pratique de la permaculture pour notre potager, une méthode agricole qui respecte les écosystèmes naturels et qui permet de cultiver des légumes frais et sains.
          </p>
          <div className=" h-full w-full grid grid-cols-3 md:grid-cols-2 gap-4 mb-20">
            <div className="flex items-center">
              <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 text-white bg-[#35441e] ease-in duration-300'>
                <GiChicken className='scale-150' />
              </div>
              <h6 className='ml-2 md:ml-4 text-xs md:text-sm lg:text-base'>Volailles fermières</h6>
            </div>
            <div className="flex items-center">
              <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 text-white bg-[#35441e] ease-in duration-300'>
                <GiCow className='scale-150' />
              </div>
              <h6 className='ml-2 md:ml-4 text-xs md:text-sm lg:text-base'>Boeufs Charolais</h6>
            </div>
            <div className="flex items-center">
              <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 text-white bg-[#35441e] ease-in duration-300'>
                <GiWheat className='scale-150' />
              </div>
              <h6 className='ml-2 md:ml-4 text-xs md:text-sm lg:text-base'>Permaculture</h6>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center'>
            <Image
              src='https://images.unsplash.com/9/fields.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhcm18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              alt='/'
              style={{ objectFit: 'cover' }}
              width='677'
              height='451'
              className='rounded-lg h-100 w-full col-span-2 md:col-span-2 row-span-1 lg:my-4'
            />
            <Image
              src='https://images.unsplash.com/photo-1485795046599-702122cd1267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              alt='/'
              width='200'
              height='200'
              style={{ objectFit: 'cover' }}
              className='rounded-lg h-100 w-full col-span-2 md:col-span-2 lg:col-span-1 hidden md:block'
            />
            <Image
              src={aboutImg}
              alt='/'
              width='200'
              height='200'
              style={{ objectFit: 'cover' }}
              className='rounded-lg h-100 w-full col-span-2 md:col-span-2 lg:col-span-1 hidden md:block'
            />
        </div>
      </div>
    </div>
  )
}

export default Content
