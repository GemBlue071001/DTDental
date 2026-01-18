import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import PricingTable from '../components/PricingTable'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <AboutUs />
      <PricingTable />
      <Contact />
    </Layout>
  )
}
