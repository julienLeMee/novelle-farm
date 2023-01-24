import Image from 'next/image'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import aboutImg from '../public/assets/poule-main.jpg'

const Content = () => {
  return (
    <div id='about' className='w-full py-52 md:py-36 lg:py-20 flex items-center mb-2'>
      <div className='max-w-[80%] m-auto md:grid grid-cols-3'>
        <div className='col-span-2 flex flex-col my-auto max-w-[600px]'>
          <p className='uppercase text-xl tracking-widest text-[#35441e] py-4'>CE QUE NOUS FAISONS À LA FERME</p>
          <p className='py-2 pr-10 mb-8 text-gray-600'>
          La Ferme de Novelle est une ferme Charolaise qui se consacre à l'élevage de bovins Charolais de qualité supérieure, qui sont nourris avec des aliments naturels et élevés en plein air. <br />
          Nous sommes également connus pour nos volailles fermières, élevées de manière éthique et nourries avec des aliments naturels. <br />
          En plus de cela, nous vendons des œufs frais, pondus par les poules qui y vivent, et qui sont élevées en plein air. <br />
          Enfin, La Ferme de Novelle se distingue par sa pratique de permaculture pour son potager, une méthode agricole qui respecte les écosystèmes naturels et qui permet de cultiver des légumes frais et sains.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="flex items-center">
              <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <BsFillTelephoneFill />
              </div>
              <p className='ml-4'>Permaculture</p>
            </div>
            <div className="flex items-center">
              <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <BsFillTelephoneFill />
              </div>
              <p className='ml-4'>Permaculture</p>
            </div>
            <div className="flex items-center">
              <div className='w-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <BsFillTelephoneFill />
              </div>
              <p className='ml-4'>Permaculture</p>
            </div>
          </div>
        </div>
        <div className='w-full grid md:grid-cols-1 gap-4 my-auto'>
          <div className='w-full h-full col-span-1 md:col-span-2'>
            <Image
              src={aboutImg}
              alt='/'
              style={{ objectFit: 'cover' }}
              width='677'
              height='451'
              className='rounded-lg'
            />
          </div>
          {/* <div className="w-full flex items-center justify-center my-auto">
              <Image
                src={aboutImg}
                alt='/'
                width='auto'
                height='auto'
                style={{ objectFit: 'cover' }}
                className='rounded-lg'
              />
              <Image
                src={aboutImg}
                alt='/'
                width='auto'
                height='auto'
                style={{ objectFit: 'cover' }}
                className='rounded-lg'
              />
           </div> */}
        </div>
      </div>
    </div>
  )
}

export default Content
