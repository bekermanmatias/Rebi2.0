import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Products from '@/components/Products'
import Magazine from '@/components/Magazine'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Magazine />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
