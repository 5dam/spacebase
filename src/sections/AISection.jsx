import React from 'react'

const AISection = () => {
  return (
    <div name='AI-section' className='bg-white h-screen flex items-center justify-center'>
        
        <div>
            <h1 className='mb-4 px-40 text-4xl text-center font-bold tracking-tighter'>
                "Unlocking Potential: Harnessing the Power of AI Tools for Innovation and Efficiency"
            </h1>
            <h2 className='mb-24 text-center font-semibold text-2xl tracking-tighter'>
                Lorem ipsum dolor sit amet consectetur.
            </h2>

            {/* cards placement */}
            <div className='sm:flex justify-center gap-2 px-4 mt-6 text-center'>
                <div className='mb-2 flex justify-center md:w-60'>                  
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>
                </div>
                <div className='mb-2 flex justify-center md:w-60'>                   
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>
                </div>
                <div className='mb-2 flex justify-center md:w-60'>                  
                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>
                </div>                
            </div>
        </div>
           
    </div>
  )
}

export default AISection