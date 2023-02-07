import React from 'react'
import Image from 'next/image'

const oeufs = () => {
  return (
    <>
      <div className='relative flex flex-col justify-start h-full bg-center'>
        <img
          src='/assets/oeuf.jpg'
          alt='homepage' className='w-full h-full object-cover max-h-[400px] opacity-80'
        />
        <div className='text-white flex items-center justify-center h-full w-full my-auto absolute'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>OEUFS</h1>
        </div>
      </div>

      <div className='w-full py-16 flex items-center justify-center m-2'>
        <div className='max-w-[80%] mx-auto md:grid grid-cols-3'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center md:mr-10 lg:mr-10'>
            <Image
              src='https://images.unsplash.com/9/fields.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhcm18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
              alt='/'
              style={{ objectFit: 'cover' }}
              width='677'
              height='451'
              className='rounded-lg h-full w-full col-span-2 md:col-span-2 row-span-1 lg:my-4'
            />
          </div>
          <div className='col-span-2 flex flex-col my-auto max-w-[600px]'>
            <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-4 max-w-[400px]'>Les oeufs de poule élevées en plein air : un goût incomparable</h2>
            <p className='py-2 mb-8 text-gray-600 text-sm'>
            La Ferme de Novelle est une ferme Charolaise qui se consacre à l'élevage de bovins Charolais et de volailles fermières de qualité supérieure, qui sont nourris avec des aliments naturels et élevés en plein air. <br />
            <br />
            Nous avons également à coeur de respecter la pratique de la permaculture pour notre potager, une méthode agricole qui respecte les écosystèmes naturels et qui permet de cultiver des légumes frais et sains.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default oeufs
