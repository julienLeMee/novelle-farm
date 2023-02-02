import Image from 'next/image'
import React from 'react'

const Medias = () => {
  return (
    <div id='chambres' className='w-full p-2 py-20'>
      <div className='max-w-[80%] mx-auto'>
        <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-8 text-center'>ILS PARLENT DE NOUS</h2>

        <div class="slider-container">
        <div class="slider">
          <Image
            src="/assets/jsl-logo.png"
            alt="jsl logo"
            width={600}
            height={200}
            className='object-cover w-full my-auto p-8'
            priority
          />
          <Image
            src="/assets/renaissance-logo.jpg"
            alt="jsl logo"
            width={600}
            height={200}
            className='object-cover w-full my-auto p-8'
            priority
          />
          <Image
            src="/assets/jsl-logo.png"
            alt="jsl logo"
            width={600}
            height={200}
            className='object-cover w-full my-auto p-8'
            priority
          />
          <Image
            src="/assets/renaissance-logo.jpg"
            alt="jsl logo"
            width={600}
            height={200}
            className='object-cover w-full my-auto p-8'
            priority
          />
          <Image
            src="/assets/jsl-logo.png"
            alt="jsl logo"
            width={600}
            height={200}
            className='object-cover w-full my-auto p-8'
            priority
          />
        </div>
      </div>

      </div>
    </div>
  )
}

export default Medias
