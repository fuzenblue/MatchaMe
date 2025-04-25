import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { listMenu } from '../assets/asset.js'
import RelatedMenu from '../components/RelateMenu.jsx'

const ProductDetail = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const menu = listMenu.find(item => item._id === id)

  if (!menu) {
    return <p className="text-center text-red-500">ไม่พบเมนูที่คุณเลือก</p>
  }

  return (
    <div className="flexed p-6">
      <button onClick={() => navigate(-1)} className="flex items-start mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        <span className="material-symbols-rounded">arrow_back</span>
        <p className='mx-4'>ย้อนกลับ</p>
      </button>

      <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-6">
          <img src={menu.Img} alt={menu.name} className="w-full lg:w-1/2 h-64 object-cover rounded-lg" />

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{menu.name}</h2>
            <p className="mb-1"><strong>ประเภท:</strong> {menu.type}</p>
            <p className="mb-1"><strong>ระดับความเข้ม:</strong> {menu.matcha_strength_level}</p>
            <p className="mb-1"><strong>แหล่งที่มา:</strong> {menu.origin_province}</p>
            <p className="mb-1"><strong>ตัวเลือกนม:</strong> {menu.milk_option?.join(', ') || 'ไม่มี'}</p>
            <p className="mb-1"><strong>ระดับความหวานที่เลือกได้:</strong> {menu.sweetness_options.join(', ')}</p>
            <p className="mt-3"><strong>กลิ่น/รสชาติ:</strong></p>
            <ul className="list-disc list-inside text-gray-700">
              {menu.tasting_notes_th.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <RelatedMenu type={menu.type} menuId={menu._id} />
      </div>
    </div>
  )
}

export default ProductDetail