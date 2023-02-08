import React from 'react'

const blog = () => {
  return (
    <>
      <div className='relative flex flex-col justify-start h-full bg-center'>
        <img
          src='https://images.unsplash.com/photo-1561361376-f84b523f6a96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          alt='homepage' className='w-full h-full object-cover max-h-[400px] opacity-80'
          />
        <div className='text-white flex items-center justify-center h-full w-full my-auto absolute'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>BLOG ARTICLE</h1>
        </div>
      </div>
      <div className="flex items-center justify-center p-24">
        <h2 className='w-full text-center'>Page in developement</h2>
      </div>
    </>
  )
}

export default blog
