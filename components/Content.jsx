import Image from 'next/image'
import React from 'react'
import { GiChicken, GiCow, GiWheat } from 'react-icons/gi'
import aboutImg from '../public/assets/poule-main.jpg'

const Content = () => {
  return (
    <div id='about' className='w-full py-52 md:py-36 lg:py-20 flex items-center mb-2'>
      <div className='max-w-[80%] m-auto md:grid grid-cols-3'>
        <div className='col-span-2 flex flex-col my-auto max-w-[600px]'>
          <p className='uppercase text-xl tracking-widest text-[#35441e] py-4'>CE QUE NOUS FAISONS À LA FERME</p>
          <p className='py-2 pr-10 mb-8 text-gray-600'>
          La Ferme de Novelle est une ferme Charolaise qui se consacre à l'élevage de bovins Charolais de qualité supérieure, qui sont nourris avec des aliments naturels et élevés en plein air. <br />
          Nous sommes également connus pour nos volailles fermières, élevées en plein air et nourries avec des aliments naturels. <br />
          <br />
          Enfin, La Ferme de Novelle se distingue par sa pratique de permaculture pour son potager, une méthode agricole qui respecte les écosystèmes naturels et qui permet de cultiver des légumes frais et sains.
          </p>
          <div className=" h-full w-full grid grid-cols-3 md:grid-cols-2 gap-4 mb-10">
            <div className="flex items-center">
              <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <GiChicken />
              </div>
              <p className='ml-4'>Volailles fermières</p>
            </div>
            <div className="flex items-center">
              <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <GiCow />
              </div>
              <p className='ml-4'>Boeufs Charolais</p>
            </div>
            <div className="flex items-center">
              <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <GiWheat />
              </div>
              <p className='ml-4'>Permaculture</p>
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-2 gap-4 items-center'>
            <Image
              src={aboutImg}
              alt='/'
              style={{ objectFit: 'cover' }}
              width='677'
              height='451'
              className='rounded-lg w-full col-span-2 md:col-span-2 row-span-1'
            />
            <Image
              src={aboutImg}
              alt='/'
              width='200'
              height='200'
              style={{ objectFit: 'cover' }}
              className='rounded-lg h-full w-full col-span-1 md:col-span-2 lg:col-span-1 lg:mb-8'
            />
            <Image
              src={aboutImg}
              alt='/'
              width='200'
              height='200'
              style={{ objectFit: 'cover' }}
              className='rounded-lg h-full w-full col-span-1 md:col-span-2 lg:col-span-1 lg:mb-8'
            />
        </div>
      </div>
    </div>
  )
}

export default Content
