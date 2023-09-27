import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-scroll'

const HeroSection = () => {
  return (
    <>
        <div className="h-screen flex items-center justify-center">
            <div className="text-white text-center">             
                <h1 className="text-4xl sm:text-7xl font-bold tracking-wide">Advancing creativity <br/> with artificial intelligence.</h1>
                <h2 className="font-semibold mt-4 text-lg sm:text-2xl tracking-tight">SpaceBase is an applied AI research company shaping the <br/> next era of art, entertainment and human creativity.</h2>               
                <div className="flex justify-center">
                  <button className="flex items-center gap-4 text-lg justify-center font-semibold mt-6 px-6 py-3 bg-red-900 hover:bg-red-600 text-white rounded-full transition duration-300 tracking-tight">
                    <Link to="AI-section" smooth={true} duration={500}>
                      TRY SPACEBASE FOR FREE
                    </Link>
                    <span><FaGreaterThan /></span>
                  </button>                           
                </div>                
            </div>
        </div>
    </>
  )
}

export default HeroSection