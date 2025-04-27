import { useState } from 'react';
import '../../styles/components/Gallery/gallery.scss';
import arrowLeft from '../../assets/arrow-left.png';
import arrowRight from '../../assets/arrow-right.png';

export default function Gallery({ pictures }) {
  const [current, setCurrent] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const length = pictures.length;

  const handleNavigation = (direction) => {
    setFadeOut(true); // déclenche le fadeOut
    setTimeout(() => {
      setCurrent((prev) => {
        if (direction === 'next') {
          return (prev + 1) % length;
        } else {
          return (prev - 1 + length) % length;
        }
      });
      setFadeOut(false); // relance l'affichage avec le nouveau current
    }, 300); // correspond au temps d'animation CSS
  };

  return (
    <div className="gallery">
      {length > 1 && (
        <img
          src={arrowLeft}
          alt="Précédent"
          className="gallery__arrow gallery__arrow--left"
          onClick={() => handleNavigation('prev')}
        />
      )}
      <img
        src={pictures[current]}
        alt={`slide ${current + 1}`}
        className={`gallery__image ${fadeOut ? 'fade' : ''}`} // ajout fade
      />
      {length > 1 && (
        <img
          src={arrowRight}
          alt="Suivant"
          className="gallery__arrow gallery__arrow--right"
          onClick={() => handleNavigation('next')}
        />
      )}
      {length > 1 && (
        <p className="gallery__counter">{current + 1}/{length}</p>
      )}
    </div>
  );
}
