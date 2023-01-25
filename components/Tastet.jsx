import React from 'react'
import TastetItem from './TastetItem'

const Tastet = () => {
  return (
    <div id='tastet' className='w-full h-full mx-auto p-2 mb-20 bg-[#f3b45a]/20'>
      <div className='max-w-[80%] mx-auto'>
        <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-8 text-center'>Redécouvrez le goût</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-4 h-full w-full'>
          <TastetItem />
          <TastetItem />
          <TastetItem />
          <TastetItem />
          <TastetItem />
        </div>
      </div>
    </div>
  )
}

export default Tastet
