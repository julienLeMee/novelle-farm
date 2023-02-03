import Image from 'next/image'
import React from 'react'

const Medias = () => {
  return (
    <div id='medias' className='w-full p-2 pt-20'>
      <div className='max-w-[80%] mx-auto'>
        <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-8 text-center'>ILS PARLENT DE NOUS</h2>

        <div className="slider-container">
          <div className="slider">
            <Image
              src="/assets/jsl-logo.png"
              alt="jsl logo"
              width={600}
              height={200}
              className='object-cover max-h-[200px] w-auto h-auto my-auto p-8 scale-95'
              style={{objectFit: 'contain'}}
              priority
            />
            <Image
              src="/assets/renaissance-logo.jpg"
              alt="jsl logo"
              width={600}
              height={200}
              className='object-cover max-h-[200px] w-auto h-auto my-auto p-8'
              style={{objectFit: 'contain'}}
              priority
            />
            <Image
              src="/assets/bienvenue-logo.png"
              alt="jsl logo"
              width={600}
              height={20}
              className='object-cover max-h-[200px] w-auto h-auto my-auto p-8'
              style={{objectFit: 'contain'}}
              priority
            />
            <Image
              src="/assets/local-logo.png"
              alt="jsl logo"
              width={600}
              height={200}
              className='object-cover max-h-[200px] w-auto h-auto my-auto p-8'
              style={{objectFit: 'contain'}}
              priority
            />
            <Image
              src="/assets/jsl-logo.png"
              alt="jsl logo"
              width={600}
              height={200}
              className='object-cover max-h-[200px] w-auto h-auto my-auto p-8 scale-95'
              style={{objectFit: 'contain'}}
              priority
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Medias
