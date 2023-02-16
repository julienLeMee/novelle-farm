import React from 'react'
import Image from 'next/image'
import { RecipesData } from '@/components/RecipesData'
import { BiRadioCircleMarked } from 'react-icons/bi'

const SoupeDeCitrouilles = () => {
  return (
    <>
      <div className='relative flex flex-col justify-start h-full bg-center'>
        <img
          src={RecipesData[2].tastetImg}
          alt='homepage' className='w-full h-full object-cover max-h-[400px] opacity-80'
          />
        <div className='text-white flex items-center justify-center h-full w-full my-auto absolute'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>{RecipesData[2].title}</h1>
        </div>
      </div>

      <div className='w-full max-w-[90%] md:max-w-[80%] mx-auto py-16 flex items-center justify-center m-2'>
        <div className='w-full mx-auto md:grid grid-cols-3'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center md:mr-10 lg:mr-10'>
            <Image
              src={RecipesData[2].tastetImg}
              alt='/'
              style={{ objectFit: 'cover' }}
              width='677'
              height='451'
              className='rounded-lg h-full w-full col-span-2 md:col-span-2 row-span-1 lg:my-4'
            />
          </div>
          <div className='col-span-2 flex flex-col my-auto max-w-[600px]'>
            <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-4 max-w-[400px]'>Recette de la ferme de Novelle : {RecipesData[0].title}</h2>
            <p className='py-2 mb-8 text-gray-600 text-sm'>
              {RecipesData[2].description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[90%] md:max-w-[80%] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className='w-full justify-center py-8'>
              <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-4 max-w-[400px]'>Ingrédients <span className='text-base'>(6 pers.)</span></h2>
              <ul className='py-2 mb-8 text-gray-600 text-sm'>
                {RecipesData[2].ingredients.map((ingredient, index) => (
                  <li key={index} className='py-1 flex items-center'><BiRadioCircleMarked className='mr-3 w-4'/>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className='w-full justify-center py-8'>
              <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-4 max-w-[400px]'>Préparation</h2>
              <ol className='py-2 mb-8 text-gray-600 text-sm'>
                {RecipesData[2].preparation.map((preparation, index) => (
                  <li key={index} className='py-1 list-decimal pl-2 ml-2'>{preparation}</li>
                ))}
              </ol>
            </div>

      </div>

    </>
  )
}

export default SoupeDeCitrouilles
