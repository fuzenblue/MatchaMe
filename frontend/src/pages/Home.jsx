import React from 'react'
import Banner from '../components/Banner'
import ProductPreview from '../components/ProductPreview'
import { card } from '../assets/asset.js'

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductPreview />
      <div id='product-deli' className='bg-base-content p-4 my-8'>
        <h2 className='font-semibold text-center text-white text-4xl mb-6'>Unlock Your Matcha Moment</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-6 my-4'>

          <div className='bg-cover bg-center p-8 text-white flex flex-col items-center' 
               style={{ backgroundImage: `url(${card.cafe_img_l})` }}>

            <h2 className='text-2xl pt-2 font-bold'>Elevate Your Focus</h2>
            <p className='hidden md:block font-light text-sm text-center mt-2'>Experience sustained energy and enhanced concentration without the jitters.</p>
          </div>

          <div className='bg-cover bg-center p-8 text-white flex flex-col items-center' 
               style={{ backgroundImage: `url(${card.cafe_img_c})` }}>

            <h2 className='text-2xl pt-2 font-bold'>Rich in Antioxidants</h2>
            <p className='hidden md:block font-light text-sm text-center mt-2'>Support your well-being with the natural goodness of high-quality matcha.</p>
          </div>

          <div className='bg-cover bg-center p-8 text-white flex flex-col items-center' 
               style={{ backgroundImage: `url(${card.cafe_img_r})` }}>
            <h2 className='text-2xl pt-2 font-bold'>Versatile & Delicious</h2>
            <p className='hidden md:block font-light text-sm text-center mt-2'>Enjoy matcha in various forms, from traditional tea to lattes and culinary creations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home