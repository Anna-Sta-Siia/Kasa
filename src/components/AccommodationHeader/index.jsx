import '../../styles/components/AccommodationHeader/accommodationheader.scss'
import '../../styles/components/Tag/tag.scss'

export default function AccommodationHeader({ title, location, tags, rating }) {
  const [region, city] = location.split(' - ')

  return (
    <div className="accommodation-header">
      {/* Gauche : titre + région + tags */}
      <div className="accommodation-header__left">
        <h1 className="accommodation-header__title">{title}</h1>
        <p className="accommodation-header__location">{region}</p>
        <div className="accommodation-header__tags">
          {tags.map((tag, index) => (
            <span key={index} className="accommodation-header__tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Droite : rating + badge */}  
      <div className="accommodation-header__right">
      {city && (
          <div className="accommodation-header__badge-container">
          <span className="accommodation-header__badge-label">{city}</span>
          <span className="accommodation-header__location-badge" />
        </div>
        )}
      
        <div className="accommodation-header__rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= parseInt(rating) ? 'star active' : 'star'}
            >
              ★
            </span>
          ))}
        </div>

      
      </div>
    </div>
  )
}
