import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Advantage from './components/Advantage'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Standards from './components/Standards'
import Contact from './components/Contact'
import ProjectAudit from './components/ProjectAudit'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Advantage />
      <Standards />
      <Projects />
      <Testimonials />
      <Contact />
      <ProjectAudit />
      <Footer />
    </div>
  )
}

export default App
