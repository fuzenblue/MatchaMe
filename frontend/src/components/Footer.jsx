import React from 'react'
import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/asset'

const Footer = () => {

    // const navigate = useNavigate()

    return (
        <div className='mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-8 mt-5 text-sm'>
                {/* ----- Left Section ----- */}
                <div>
                    <img className='mb-5 w-44' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* ----- Center Section ----- */}
                <div>
                    <p className='text-xl font-medium mb-3'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Product</li>
                        <li className='cursor-pointer'>Chatbot</li>
                        {/* <li onClick={() => navigate('/contact')} className='cursor-pointer'>Contact us</li> */}
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* ----- Right Section ----- */}
                <div>
                    <p className='text-xl font-medium mb-3'>CONTACT</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+66-123-4567</li>
                        <li>MatchaMe@cafe.com</li>
                    </ul>
                </div>
            </div>

            {/* ----- Copyright Text ----- */}
            <div>
                <hr />
                <p className='py-3 text-sm text-center'>Copyright © 2025 MatchaMe AI Chatbot - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
