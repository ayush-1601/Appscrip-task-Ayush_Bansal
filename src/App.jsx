import './App.css'
import { Footer } from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import './index.css'
import Home from './pages/home.jsx'

function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <main className="main-container">
    <Home/>
      </main>
    <Footer/>
    </>
  )
}

export default App
