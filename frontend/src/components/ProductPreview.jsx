import React, { useEffect, useState } from 'react'
import { listMenu } from '../assets/asset.js'
import { Link, useNavigate } from 'react-router-dom'

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5)
}

const ProductPreview = () => {
  const [shuffledMenu, setShuffledMenu] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setShuffledMenu(shuffleArray(listMenu))
  }, [])

  return (
    <div>
      <div className='flex justify-between items-center px-8 mt-6 mb-4'>
        <h2 className='text-xl font-semibold'>เมนูแนะนำ</h2>
        <button onClick={() => navigate('/product')} className='btn btn-outline btn-sm mx-4 px-6 py-4'>
          ดูทั้งหมด
          <span className="material-symbols-rounded">arrow_forward</span>
        </button>
      </div>

      <div className='flex-1 mb-4'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4'>
          {shuffledMenu.slice(0, 3).map((menu) => (
            <Link key={menu._id} to={`/product/${menu._id}`} onClick={() => scrollTo(0, 0)}>
              <div className='bg-white border border-gray-200 rounded-lg p-3 h-[20rem] flex flex-col relative shadow-md hover:shadow-lg hover:translate-y-[-10px] transition-all'>
                <img src={menu.Img} alt={menu.name} className='w-full h-[10rem] object-cover rounded-lg' />
                <h3 className='text-md font-semibold my-3 cursor-pointer hover:text-primary text-center'>
                  {menu.name}
                </h3>
                <button className='p-2 text-sm rounded-full bg-primary text-white'>ดูรายละเอียดเมนู</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPreview
