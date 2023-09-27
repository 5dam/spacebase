import React, { useState } from 'react'
import space_rocket from '../assets/space_rocket.png'
import { Link } from 'react-scroll'

const Header = () => {

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible)
    }

  return (
    <>
       {/* <header class="p-4 text-white hover:bg-white hover:text-black transition delay-150 ease-in-out">
            <div class="container mx-auto">
                <nav class="flex items-center justify-between">
                    <div className='flex gap-4'>
                        <h1><a href="#" class="text-4xl font-bold">SpaceBase</a></h1>
                    </div>
                                                           
                    <ul class="text-lg flex space-x-6 font-bold">
                        <li><a href="#" class="hover:text-gray-300">Home</a></li>
                        <li><a href="#" class="hover:text-gray-300">About</a></li>
                        <li><a href="#" class="hover:text-gray-300">Services</a></li>
                        <li><a href="#" class="hover:text-gray-300">Contact</a></li>
                    </ul>

                    <div className='flex gap-3 items-center font-semibold'>
                        <a href="#">Login</a>
                        <button className='px-4 py-2 bg-indigo-700 hover:bg-indigo-500 rounded'>Signup</button>
                    </div>
                </nav>
            </div>
        </header> */}

        <header className="hover:bg-white/10  hover:text-white text-white p-4">
            <div className='container mx-auto'>
                <div className="flex justify-between items-center">
                    <div className='flex items-center gap-2'>
                        <img src={space_rocket} className='animate-pulse h-15 w-12'/>
                        <a href="#" className="text-3xl font-bold tracking-tighter">
                            SpaceBase
                        </a>
                    </div>
                    <div className="hidden sm:flex space-x-6 text-md font-semibold">
                        <a href="#" className="hover:text-gray-300">
                            Home
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            About
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <Link to="AI-section" smooth={true} duration={500}>
                                Services
                            </Link>                          
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            Contact
                        </a>
                    </div>
                    <div className='sm:flex items-center gap-2 hidden font-semibold'>
                        <a href="#">LOG IN</a>
                        <button className='px-4 py-2 rounded-full bg-red-900 hover:bg-red-600'>Sign Up</button>
                    </div>

                    <div className="sm:hidden">
                        <button id="mobile-menu-button" onClick={toggleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div id="mobile-menu" className={`${mobileMenuVisible ? 'block' : 'hidden'} sm:hidden font-semibold mt-4`}>
                    <a href="#" className="block py-2 px-4 hover:bg-blue-400">
                        Home
                    </a>
                    <a href="#" className="block py-2 px-4 hover:bg-blue-400">
                        About
                    </a>
                    <a href="#" className="block py-2 px-4 hover:bg-blue-400">
                        Services
                    </a>
                    <a href="#" className="block py-2 px-4 hover:bg-blue-400">
                        Contact
                    </a>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header