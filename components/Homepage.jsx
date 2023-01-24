import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Homepage = () => {
  return (
    <>
    <div className='w-full h-64 bg-[var(--darkGreen)]'>
      <div className='w-full text-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
        <div className='max-w-[80%] mx-auto my-6'>
          <h1 className='text-white p-4'>La ferme de Novelle</h1>
          <h1 className='text-white lg:text-lg text-xs'>Du champs à l'assiète, bienvenue dans une ferme éthique et familiale</h1>
          <p className='text-white lg:text-lg text-xs'>Boeuf Charolais, volailles fermières et potager en permaculture</p>
        </div>
        {/* <div className="flex justify-center m-4 mb-10">
          <Link
          className='text-white hover:scale-105 hover:bg-white hover:text-[var(--darkGreen)] border p-2 w-40 text-center rounded-md shadow-lg mr-4 duration-300'
          href='/contact'>Contactez-nous
          </Link>
          <Link
          className='text-white hover:scale-105 hover:bg-white hover:text-[var(--darkGreen)] border p-2 w-40 text-center rounded-md shadow-lg duration-300'
          href='/#produits'>Nos produits
          </Link>
        </div> */}
      <Image
        src='/assets/poule-groupe.jpg'
        width={700} height={100}
        alt='poule-groupe'
        className='mx-auto max-h-[300px] rounded-xl shadow-xl shadow-gray-600'
        style={{objectFit: 'cover'}}
        priority
        />
        </div>
    </div>
    <Image
      src='/assets/wave.svg'
      width={100}
      height={100}
      alt='boeuf' className='w-full mt-[-5px]'
      style={{objectFit: 'cover'}}
      priority
    />
    </>
  )
}

export default Homepage
