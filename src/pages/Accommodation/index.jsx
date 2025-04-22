import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import logements from '../../data/logements.json'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'





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
      <Header />

      <main className="accommodation">
        <Gallery pictures={logement.pictures} />

        <div className="accommodation__top">
          <div className="accommodation__info">
            <h1 className="accommodation__title">{logement.title}</h1>
            <p className="accommodation__location">{logement.location}</p>
            <div className="accommodation__tags">
              {logement.tags.map((tag, index) => (
                <Tag key={index} label={tag} />
              ))}
            </div>
          </div>

          <div className="accommodation__host-rating">
            <div className="accommodation__host">
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </div>

        <div className="accommodation__collapses">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Équipements" content={logement.equipments} />
        </div>
      </main>

      <Footer />
    </>
  )
}
