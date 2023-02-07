import React from 'react'
import TastetItem from './TastetItem'

const Tastet = () => {
  return (
    <div id='tastet' className='w-full h-full mx-auto py-20 bg-[#f3b45a]/20'>
      <div className='max-w-[90%] md:max-w-[80%] mx-auto'>
        <h2 className='uppercase text-3xl tracking-widest text-[#35441e] pb-8 text-center'>Redécouvrez le goût</h2>
        <h3 className='text-xl tracking-widest text-[#35441e] pb-8 text-center'>Nos idées recettes de la ferme</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-4 h-full w-full'>
          <TastetItem
            tastetImg='https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            title={'Pot-au-feu'}
            url={'/'}
          />
          <TastetItem
            tastetImg='https://images.unsplash.com/photo-1505872342847-6dbb5e76cd31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            title={'Crumble'}
            url={'/'}
          />
          <TastetItem
            tastetImg='https://images.unsplash.com/photo-1575672336898-d8142e84a14e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            title={'Soupe de citrouilles'}
            url={'/'}
          />
          <TastetItem
            tastetImg='https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            title={'Carottes râpées'}
            url={'/'}
          />
          <TastetItem
            tastetImg='https://images.unsplash.com/photo-1576072115035-5fe30e447e60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
            title={'Radis au vinaigre'}
            url={'/'}
          />
        </div>
      </div>
    </div>
  )
}

export default Tastet
