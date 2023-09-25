import React from 'react'
import './VideoBackground.css'
import videobg from '../assets/earth_rotate.mp4'

const VideoBackground = () => {
  return (
    <div className="video-background">
        <video autoPlay loop muted className="object-cover w-full h-full">
            <source src={videobg} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {/* Your other content goes here */}
    </div>
  )
}

export default VideoBackground