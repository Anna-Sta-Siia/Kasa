import '../../styles/components/Rating/rating.scss'
import starRed from '../../assets/star-red.png';
import starGrey from '../../assets/star-grey.png';


export default function Rating({ rating }) {
  const parsedRating = parseInt(rating);
  console.log(rating)
  return (
    <div className="accommodation-header__rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          src={star <= parsedRating ? starRed : starGrey}
          alt={star <= parsedRating ? 'Étoile remplie' : 'Étoile vide'}
          className="rating-star"
        />
      ))}
    </div>
  );
}
