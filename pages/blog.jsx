import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BlogData } from '../components/BlogData'
import Link from 'next/link'

const blog = () => {
  return (
    <>
      <div className='relative flex flex-col justify-start h-full bg-center'>
        <img
          src='https://images.unsplash.com/photo-1441122456239-401e92b73c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
          alt='homepage' className='w-full h-full object-cover max-h-[400px] opacity-80'
          />
        <div className='text-white flex items-center justify-center h-full w-full my-auto absolute'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>BLOG</h1>
        </div>
      </div>

      <div className='max-w-[90%] md:max-w-[80%] mx-auto md:grid grid-cols-2 gap-4 py-20'>
        {BlogData.map((article) => (
          <div key={article.id} className='flex flex-col my-10 p-4'>
            <div>
              <Image
                src={article.img}
                alt={article.title}
                style={{ objectFit: 'cover' }}
                width='400'
                height='200'
                className='rounded-lg w-[600px] h-[300px] object-cover shadow-lg'
              />
            </div>
            <div>
              <h3 className='text-xl text-[#35441e] py-4'>{article.title}</h3>
              <p className='text-lg text-[#35441e]'>{article.description}</p>
            </div>
            <Link href={`/blog/${article.id}`}>
              <div className='flex items-center'>
                <AiOutlineArrowRight />
                <button className='ml-4 py-4 rounded-lg text-[#35441e] hover:text-gray-500 hover:underline duration-300'>Lire l'article</button>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </>
  )
}

export default blog
