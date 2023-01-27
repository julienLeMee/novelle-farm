import React from 'react'

const histoire = () => {
  return (
    <div className='relative flex flex-col justify-start h-full bg-center'>
      <img
        src='https://images.unsplash.com/photo-1471532027614-154d124ccf57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
        alt='homepage' className='w-full h-full object-cover max-h-[400px] opacity-80'
      />
      <div className='text-white flex items-center justify-center h-full w-full my-auto absolute'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl'>HISTOIRE</h1>
      </div>
    </div>
  )
}

export default histoire
