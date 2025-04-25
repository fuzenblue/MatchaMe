import React, { useEffect, useState } from 'react'
import { listMenu } from '../assets/asset.js'
import { Link } from 'react-router-dom'

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5)
}

const Product = () => {
  const [shuffledMenu, setShuffledMenu] = useState([])
  const [filterType, setFilterType] = useState("All")

  useEffect(() => {
    setShuffledMenu(shuffleArray(listMenu))
  }, [])

  const handleFilterChange = (type) => {
    setFilterType(type)
  }

  const filteredMenu = shuffledMenu.filter((menu) => {
    if (filterType === "All") return true
    if (Array.isArray(menu.type)) return menu.type.includes(filterType)
    return menu.type === filterType
  })

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-2 mt-6'>
        {['All', 'LATTE', 'PURE', 'SPARKLING', 'ONLY MATCHAME'].map((type) => (
          <label key={type}>
            <input
              className={`btn ${filterType === type ? 'btn-primary' : 'btn-outline'}`}
              type="radio"
              name="menuType"
              aria-label={type}
              onChange={() => handleFilterChange(type)}
              checked={filterType === type}
            />
          </label>
        ))}
      </div>

      <div className='flex-1 mt-5 mb-4'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredMenu.length > 0 ? (
            filteredMenu.map((menu) => (
              <Link key={menu._id} to={`/product/${menu._id}`} onClick={() => scrollTo(0, 0)}>
                <div className='bg-white border border-gray-200 rounded-lg p-3 h-[22rem] flex flex-col relative shadow-md hover:shadow-lg hover:translate-y-[-10px] transition-all'>
                  <img src={menu.Img} alt={menu.name} className='w-full h-[12rem] object-cover rounded-lg' />
                  <h3 className='text-lg font-semibold my-4 cursor-pointer hover:text-primary text-center'>
                    {menu.name}
                  </h3>
                  <button className='p-4 rounded-full bg-primary text-white'>ดูรายละเอียดเมนู</button>
                </div>
              </Link>
            ))
          ) : (
            <p className='text-center text-primary'>No products found.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product