import '../../styles/components/AccommodationHeader/accommodationheader.scss'

export default function AccommodationHeader({ title, location, tags, host, rating }) {
  return (
    <div className="accommodation-header">
      <div className="accommodation-header__info">
        <h1 className="accommodation-header__title">{title}</h1>
        <p className="accommodation-header__location">{location}</p>
        <div className="accommodation-header__tags">
          {tags.map((tag, index) => (
            <span key={index} className="accommodation-header__tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="accommodation-header__host-rating">
        <div className="accommodation-header__host">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
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
