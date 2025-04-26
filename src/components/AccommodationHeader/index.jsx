import '../../styles/components/AccommodationHeader/accommodationheader.scss'
import '../Tag/index.jsx'
import starRed from '../../assets/star-red.png'
import starGrey from '../../assets/star-grey.png'

export default function AccommodationHeader({ title, location, tags, rating, host }) {
  return (
    <div className="accommodation-header">
      <div className="accommodation-header__left">
        <h1 className="accommodation-header__title">{title}</h1>
        <p className="accommodation-header__location">{location}</p>
        <div className="accommodation-header__tags">
          {tags.map((tag, index) => (
            <span key={index} className="accommodation-header__tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="accommodation-header__right">
      <div className="accommodation-header__host">
  <p>{host.name}</p>
  <img src={host.picture} alt={host.name || "Hôte"} />
</div>
<div className="accommodation-header__rating">
  {[1, 2, 3, 4, 5].map((star) => (
    <img
      key={star}
      src={star <= parseInt(rating) ? starRed : starGrey}
      alt={star <= parseInt(rating) ? 'Étoile remplie' : 'Étoile vide'}
      className="rating-star"
    />
  ))}
</div>
      </div>
    </div>
  )
}

