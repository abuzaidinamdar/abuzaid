import './App.css'
import SplashCursor from './components/SplashCursor'
import { TracingBeam } from './components/ui/tracing-beam'
import { LampEffect } from './components/LampEffect'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <SplashCursor />
      <LampEffect />
      <TracingBeam>
        <div className="portfolio-container">
          {/* Removed portfolio content */}
        </div>
      </TracingBeam>
    </>
  )
}

export default App
