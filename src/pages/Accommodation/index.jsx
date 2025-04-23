import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import logements from '../../data/logements.json'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Collapse from '../../components/Collapse'
import AccommodationHeader from '../../components/AccommodationHeader'
import "../../styles/variables_et_mixins/variables_et_mixins.scss"




export default function Accommodation() {
  const { id } = useParams()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    const found = logements.find((item) => item.id === id)
    setLogement(found)
  }, [id])

  if (!logement) return <div>Logement introuvable</div>

  return (
    <>
    <main className="page">
      <Header />
      
        <Gallery pictures={logement.pictures} />

        <AccommodationHeader
  title={logement.title}
  location={logement.location}
  tags={logement.tags}
  rating={logement.rating}
/>

        <div className="accommodation__collapses">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </main>

      <Footer />
    </>
  )
}
