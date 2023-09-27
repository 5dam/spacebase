import Header from "./components/Header"
import ImageGenerator from "./components/ImageGenerator"
import VideoBackground from "./components/VideoBackground"
import AISection from "./sections/AISection"
import HeroSection from "./sections/HeroSection"


function App() { 
  return (
    <>
      <div>
        <VideoBackground />
        <Header />
        <HeroSection />        
        <AISection />
      </div>     
    </>
  )
}

export default App
