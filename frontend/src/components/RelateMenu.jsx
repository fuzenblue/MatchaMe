import React, { useEffect, useState } from 'react'
import { listMenu } from '../assets/asset.js'
import { Link, useNavigate } from 'react-router-dom'

const RelatedMenu = ({ type, menuId }) => {

    const navigate = useNavigate()
    const [relatedMenus, setRelatedMenus] = useState([])

    useEffect(() => {
        // console.log("Type:", type, "Menu ID:", menuId)
      
        if (listMenu.length > 0 && type) {
          const similarMenus = listMenu.filter((menu) => {
            // handle case where type is an array
            if (Array.isArray(menu.type) && Array.isArray(type)) {
              return menu._id !== menuId && menu.type.some(t => type.includes(t))
            } else if (Array.isArray(menu.type)) {
              return menu._id !== menuId && menu.type.includes(type)
            } else if (Array.isArray(type)) {
              return menu._id !== menuId && type.includes(menu.type)
            } else {
              return menu._id !== menuId && menu.type === type
            }
          })
      
        //   console.log("Filtered:", similarMenus)
          setRelatedMenus(similarMenus)
        }
      }, [type, menuId])      

    return (
        <div className='flex flex-col items-center gap-4 text-gray-900 my-16 mx-[12%]'>
            <h1 className='text-2xl font-medium'>เมนูที่ใกล้เคียงกัน</h1>
            <p className='sm:w-1/3 text-center text-sm'>ลองดูเมนูประเภทเดียวกันที่คุณอาจชอบ</p>

            <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {relatedMenus.slice(0, 3).map((menu, index) => (
                    <Link key={menu._id} to={`/product/${menu._id}`} onClick={() => scrollTo(0, 0)} 
                            className='border shadow-sm border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <div className='bg-white border border-gray-200 rounded-lg p-3 h-[22rem] flex flex-col relative shadow-md hover:shadow-lg transition-all'>
                            <img src={menu.Img} alt={menu.name} className='w-full h-[12rem] object-cover rounded-lg'/>
                            <h3 className='text-lg font-semibold my-4 cursor-pointer hover:text-primary text-center'>
                                {menu.name}
                            </h3>
                            <button className='p-4 rounded-full bg-primary text-white'>
                                ดูรายละเอียดเมนู
                            </button>
                        </div>
                    </Link>
                ))}
            </div>

            <button onClick={() => {
                navigate('/product')
                scrollTo(0, 0)
            }}
                className='bg-green-50 text-green-700 px-12 py-3 rounded-full mt-5'>
                ดูเมนูทั้งหมด
            </button>
        </div>
    )
}

export default RelatedMenu