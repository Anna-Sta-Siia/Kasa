import "../../styles/components/AccommodationHeader/accommodationheader.scss";
import Tag from "../Tag/index.jsx";
import Rating from "../Rating/index.jsx";

export default function AccommodationHeader({ title, location, tags, rating, host, logementId }) {
  return (
    <div className="accommodation-header">
      <div className="accommodation-header__left">
        <h1 className="accommodation-header__title">{title}</h1>
        <p className="accommodation-header__location">{location}</p>
        <div className="accommodation-header__tags">
          {tags.map((tag) => (
            <Tag key={`${logementId}-${tag}`} label={tag} />
          ))}
        </div>
      </div>

      <div className="accommodation-header__right">
        <div className="accommodation-header__host">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name || "Hôte"} />
        </div>
        <Rating rating={rating} />
      </div>
    </div>
  );
}
