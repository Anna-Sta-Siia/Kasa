import { useParams, Navigate } from 'react-router-dom' // 👈 ajoute Navigate ici
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

  // 🔁 Rediriger vers la page 404 si l'id est invalide
  if (logement === null) return null // attend que useEffect charge
  if (!logement) return <Navigate to="/404" replace /> // redirection si pas trouvé

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
  host={logement.host} 
  logementId={logement.id} 
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
