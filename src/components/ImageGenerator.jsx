import React from 'react'
import default_img from '../assets/ai-default.jpg'
import robot from '../assets/pngeggrobot.png'

const ImageGenerator = () => {
  return (
    <>
        <section class="h-screen flex flex-col items-center pt-28">
            <div class="text-center">
                <h1 class="text-4xl font-bold mb-4">AI Image Generator</h1>
                <img className='rounded' src={default_img}></img>
                <button className='font-bold px-10 py-4 bg-yellow-500 hover:bg-yellow-400 rounded mt-4'>Generate</button>
            </div>
        </section>
    </>
  )
}

export default ImageGenerator