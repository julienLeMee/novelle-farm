import React from 'react'
import Image from 'next/image'

const Homepage = () => {
  return (
    <>
      <div className='w-full h-72 bg-[var(--darkGreen)]'>
        <div className='w-full text-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'>
          <div className='max-w-[90%] md:max-w-[80%] mx-auto my-8'>
            <h1 className='text-white p-4'>La Ferme de Novelle</h1>
            <p className='text-white lg:text-sm text-xs'>Du champs à l'assiette, bienvenue dans une ferme éthique et familiale</p>
            <p className='text-white lg:text-sm text-xs'>Boeuf Charolais, volailles fermières et potager en permaculture</p>
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
          src='https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          width={700} height={100}
          alt='poule-groupe'
          className='mx-auto max-h-[350px] rounded-xl shadow-xl shadow-gray-600'
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
