import React from 'react'
import ActivityItem from './ActivityItem'
import activityOne from '../public/assets/poule-groupe.jpg'
import Link from 'next/link'

const Activities = () => {
  return (
    <div id='activities' className='w-full p-2 mb-20'>
      <div className='max-w-[90%] md:max-w-[80%] mx-auto'>
        <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-8 text-center'>Nos activités</h2>
        <div className='grid md:grid-cols-3 gap-4'>
          <ActivityItem
            title={'Les oeufs'}
            description={'Les oeufs de poule élevées en plein air : un goût incomparable'}
            backgroundImg='https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
            url={'/produits/oeufs'}
          />
          <ActivityItem
            title={'Les volailles'}
            description={"Les volailles fermières : une production locale et respectueuse de l'animal"}
            backgroundImg={activityOne}
            url={'/produits/volailles'}
          />
          <ActivityItem
            title={'Les bovins'}
            description={"L'élevage de bovins Charolais : une passion pour la qualité"}
            backgroundImg='https://images.unsplash.com/photo-1554839465-be8f7c6786b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGUlMjBjb3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
            url={'/produits/bovins'}
          />
        </div>
      </div>
    </div>
  )
}

export default Activities
