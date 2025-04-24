import React from 'react'
import { assets } from '../assets/asset'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className="navbar flex items-center justify-between text-xs lg:text-sm">
            <div className="navbar-start logo">
                <img onClick={() => navigate('/')} className='w-32 lg:w-44 cursor-pointer' src={assets.logo} alt="" />
            </div>

            <div className="navbar-start">
                <ul className="hidden md:flex items-start gap-4 lg:gap-8 font-medium cursor-pointer">
                    <NavLink to='/' onClick={() => scrollTo(0, 0)}>
                        <li className='hover:text-primary py-2'><strong>HOME</strong></li>
                        <hr className='border-none outline-none h-1 rounded bg-primary w-4/5 m-auto hidden' />
                    </NavLink>
                    {/* <li className='hover:text-primary py-2'>MENU</li> */}
                    <NavLink to='/product' onClick={() => scrollTo(0, 0)}>
                        <li className='hover:text-primary py-2'><strong>PRODUCT</strong></li>
                        <hr className='border-none outline-none h-1 rounded bg-primary w-4/5 m-auto hidden' />
                    </NavLink>
                    {/* <li className='hover:text-primary py-2'>MATCHY CHATBOT</li> */}
                    {/* <li className='hover:text-primary py-2'>CONTACT US</li> */}
                </ul>
            </div>

            <div className="navbar-end side_bar flex items-start mx-8">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>

                <div className="drawer drawer-end w-8 lg:hidden">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <img className='w-32 lg:w-44 my-8' src={assets.logo} alt="" />
                            <li className='my-3'><a>HOME</a></li>
                            <li className='my-3'><a>MENU</a></li>
                            <li className='my-3'><a>PRODUCT</a></li>
                            <li className='my-3'><a>MATCHY CHATBOT</a></li>
                            <li className='my-3'><a>CONTACT US</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar