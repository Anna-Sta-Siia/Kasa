import { useState } from 'react';
import '../../styles/components/Gallery/gallery.scss';
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'


export default function Gallery({ pictures }) {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const next = () => setCurrent((current + 1) % length)
  const prev = () => setCurrent((current - 1 + length) % length)

  return (
    <div className="gallery">
      {length > 1 && (
        <img
          src={arrowLeft}
          alt="Précédent"
          className="gallery__arrow gallery__arrow--left"
          onClick={prev}
        />
      )}
      <img src={pictures[current]} alt={`slide ${current + 1}`} className="gallery__image" />
      {length > 1 && (
        <img
          src={arrowRight}
          alt="Suivant"
          className="gallery__arrow gallery__arrow--right"
          onClick={next}
        />
      )}
      {length > 1 && <p className="gallery__counter">{current + 1}/{length}</p>}
    </div>
  )
}

