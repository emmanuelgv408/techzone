import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='relative h-[80vh] w-full'>
      <img src={assets.heroImg} alt="hero" className='absolute top-0 left-0 w-full h-full object-cover' />
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50'>
        <p className='uppercase text-lg tracking-wider mb-2'>Your One Stop for All Tech</p>
        <h1 className='text-5xl font-bold mb-4'>TechZone</h1>
        <button className='uppercase bg-black text-white py-2 px-6  hover:bg-cyan-600 transition duration-300'>
         
          <Link to='/all-products'> Shop All</Link>
        </button>
      </div>
    </div>
  )
}
