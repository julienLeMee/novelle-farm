import React from 'react'

const produits = () => {
  return (
    <div className='relative flex flex-col justify-start h-full bg-center'>
      <img
        src='https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        alt='homepage' className='w-full h-full object-cover max-h-[400px] opacity-80'
      />
      <div className='text-white flex items-center justify-center h-full w-full my-auto absolute'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl'>NOS PRODUITS</h1>
      </div>
    </div>
  )
}

export default produits
