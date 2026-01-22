import Header from '../components/Header'
import Hero from '../components/Hero'
import ChiSiamo from '../components/ChiSiamo'
import Instagram from '../components/Instagram'
import Camere from '../components/Camere'
import ChaletEtoile from '../components/ChaletEtoile'
import Ristorante from '../components/Ristorante'
import Territorio from '../components/Territorio'
import Recensioni from '../components/Recensioni'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ChiSiamo />
        <Instagram />
        <Camere />
        <ChaletEtoile />
        <Ristorante />
        <Territorio />
        <Recensioni />
      </main>
      <Footer />
    </>
  )
}
