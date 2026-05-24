import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Differentials from '@/components/sections/Differentials'
import Methodology from '@/components/sections/Methodology'
import TaxReform from '@/components/sections/TaxReform'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Differentials />
      <Methodology />
      <TaxReform />
      <Contact />
      <Footer />
    </main>
  )
}
