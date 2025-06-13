import './App.css'
import Home from './pages/home'
import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import { Footer } from './components/Footer'
import FilterSidebar from './components/FilterSidebar'
import ProductGrid from './components/ProductGrid'

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
