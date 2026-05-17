import Header from './components/Header'
import Hero from './components/Hero'
import BlueprintToggle from './components/BlueprintToggle'
import ProcessBreakdown from './components/ProcessBreakdown'
import Stats from './components/Stats'
import About from './components/About'
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
      <Projects />
      <BlueprintToggle />
      <ProcessBreakdown />
      <Stats />
      <About />
      <Advantage />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
