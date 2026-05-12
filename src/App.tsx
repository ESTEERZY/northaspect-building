import Header from './components/Header'
import Hero from './components/Hero'
import SystemBreakdown from './components/SystemBreakdown'
import Stats from './components/Stats'
import Advantage from './components/Advantage'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Apex Architecture - Luxury Residential Builder Landing Page
function App() {
  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-gold selection:text-charcoal">
      <Header />
      <Hero />
      <SystemBreakdown />
      <Stats />
      <Advantage />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
