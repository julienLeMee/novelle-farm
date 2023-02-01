import React from 'react'
import ActivityItem from './ActivityItem'
import activityOne from '../public/assets/poule-groupe.jpg'

const Activities = () => {
  return (
    <div id='chambres' className='w-full p-2 mb-20'>
      <div className='max-w-[80%] mx-auto'>
        <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-8 text-center'>Nos activités</h2>
        <div className='grid md:grid-cols-3 gap-4'>
          <ActivityItem
            title={'Les volailles'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
            backgroundImg={activityOne}
            url={'/'}
          />
          <ActivityItem
            title={'Les bovins'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
            backgroundImg='https://images.unsplash.com/photo-1554839465-be8f7c6786b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGUlMjBjb3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
            url={'/'}
          />
          <ActivityItem
            title={'Le potager'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
            backgroundImg='https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhcm18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
            url={'/'}
          />
        </div>
      </div>
    </div>
  )
}

export default Activities
