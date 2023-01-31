import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'

const Weather = () => {
  const [weather, setWeather] = useState({})

  const url = `https://api.openweathermap.org/data/2.5/weather?q=martigny-le-comte&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather(response.data)
    })
  }, [])

  const tempC = (weather.main?.temp - 32) * (5/9);
 console.log(weather);
  return (
    <div className='w-full p-2 mb-20'>
      <div className='max-w-[700px] w-[80%] mx-auto'>
        <h2 className='uppercase text-3xl tracking-widest text-[#35441e] py-8 text-center'>Météo</h2>
        <div className='bg-black/40 text-white p-8 rounded-md'>
          <h3 className='text-center pb-4'>{weather.name}</h3>
          <div className=" h-full w-full grid grid-cols-2 items-center gap-4 mb-10">
            <div className="flex justify-center items-center mx-auto w-full">
              <Image
                src={weather.weather?.[0]?.icon ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` : '/images/weather/unknown.svg'}
                width={100}
                height={100}
                alt='weather icon'
                priority
              />
              <p className='text-5xl'>{tempC.toFixed(0)}&#176;</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-xl text-center'>Vent</p>
              <p className='text-center text-xl font-bold'>{(weather.wind?.speed * 1.609344).toFixed(0)} km/h</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-xl text-center'>Humidité</p>
              <p className='text-center text-xl font-bold'>{weather.main?.humidity}%</p>
            </div>
            <div className='flex flex-col'>
              <p className='text-xl text-center'>Ressenti</p>
              <p className='text-center text-xl font-bold'>{((weather.main?.feels_like - 32) * 5/9).toFixed(0)}&#176;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
