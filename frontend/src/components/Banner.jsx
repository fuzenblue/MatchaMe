import React from 'react'
import { assets } from '../assets/asset.js'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='relative min-w-[340px] py-16 sm:py-36 px-5 md:px-10 rounded-2xl overflow-hidden flex items-center justify-center'>
      <div className='absolute inset-0 bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${assets.header_img})`, filter: 'blur(0px)', zIndex: '0' }} />

      <div className='header-contents flex flex-col items-center text-center gap-4 z-10 sm:z-0 animate-fadeIn'>
        <h2 className='text-[max(4.5vw,30px)]  md:text-4xl lg:text-5xl text-white font-semibold'>
         Savor the Vibrant <span className='text-white bg-primary px-3'>Taste of Matcha</span>
        </h2>
        <p className='text-white text-base font-light hidden md:block'>
        Immerse yourself in the serene world of matcha. Discover its rich umami, delicate sweetness, and invigorating energy. Explore our premium selection and find your perfect cup.
        </p>
        <Link to={'/product'}>
          <button className='btn btn-primary text-white px-10 py-6 rounded-full font-light'>
            Explore Our Matcha
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Banner
