import Layout from '../components/Layout'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import PricingTable from '../components/PricingTable'

export default function ServicePage() {
  return (
    <Layout>
      <Services />
      <PricingTable />
      <AboutUs />
      <Contact />
    </Layout>
  )
}
