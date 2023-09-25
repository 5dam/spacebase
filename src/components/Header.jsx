import React from 'react'

const Header = () => {
  return (
    <>
       <header class="p-4 text-white hover:bg-white hover:text-black transition delay-150 ease-in-out">
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
        </header>
    </>
  )
}

export default Header