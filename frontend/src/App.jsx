import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Matchy from './pages/Matchy'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  return (
    <div className='sm:mx-[8%]'>
        <Navbar />
      <div className='flex flex-col mx-10'>
        <Matchy/>
        <Routes>
          < Route path='/' element={<Home/>} />

          < Route path='/product' element={<Product/>} />
          < Route path='/product/:id' element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App