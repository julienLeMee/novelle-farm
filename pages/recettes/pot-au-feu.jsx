import React from 'react'
import Image from 'next/image'
import { RecipesData } from '@/components/RecipesData'

const PotAuFeu = () => {
  return (
    <>
      <div className='relative flex flex-col justify-start h-full bg-center'>
        <img
          src={RecipesData[0].tastetImg}
          alt='homepage' className='w-full h-full object-cover max-h-[400px] opacity-80'
        />
        <div className='text-white flex items-center justify-center h-full w-full my-auto absolute'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>{RecipesData[0].title}</h1>
        </div>
      </div>

      <div className='w-full py-16 flex items-center justify-center m-2'>
        <div className='max-w-[90%] md:max-w-[80%] mx-auto md:grid grid-cols-3'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center md:mr-10 lg:mr-10'>
            <Image
              src={RecipesData[0].tastetImg}
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
              {RecipesData[0].description}
            </p>
          </div>
        </div>
      </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-10 lg:mx-10">
      <div className='max-w-[90%] md:max-w-[80%] w-full justify-center p-8'>
        <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-4 max-w-[400px]'>Ingrédients</h2>
        <ul className='py-2 mb-8 text-gray-600 text-sm'>
          <li className='py-1'>1 kg de viande de boeuf</li>
          <li className='py-1'>Carottes (quantité selon votre goût)</li>
          <li className='py-1'>Oignons (quantité selon votre goût)</li>
          <li className='py-1'>1 bouquet garni</li>
          <li className='py-1'>1 cube de bouillon de boeuf</li>
          <li className='py-1'>1 cuillère à soupe de concentré de tomate</li>
          <li className='py-1'>1 cuillère à soupe de farine</li>
          <li className='py-1'>1 cuillère à soupe d'huile d'olive</li>
        </ul>
      </div>

      <div className='max-w-[90%] md:max-w-[80%] w-full justify-center p-8'>
        <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-4 max-w-[400px]'>Préparation</h2>
        <ol className='py-2 mb-8 text-gray-600 text-sm'>
          <li className='py-1'>Éplucher les carottes et les oignons et les couper en morceaux.</li>
          <li className='py-1'>Émincer la viande en gros morceaux.</li>
          <li className='py-1'>Faire revenir la viande dans l'huile d'olive.</li>
          <li className='py-1'>Ajouter les carottes et les oignons et laisser cuire 5 minutes.</li>
          <li className='py-1'>Ajouter le concentré de tomate, le cube de bouillon et le bouquet garni.</li>
          <li className='py-1'>Ajouter 1,5 litre d'eau et laisser cuire 1h30.</li>
          <li className='py-1'>Après 1h30, ajouter la farine et laisser cuire 30 minutes.</li>
          <li className='py-1'>Retirer le bouquet garni et servir.</li>
        </ol>
      </div>

</div>

    </>
  )
}

export default PotAuFeu
