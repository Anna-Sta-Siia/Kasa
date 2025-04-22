import '../../styles/components/Rating/rating.scss'

export default function Rating({ rating }) {
  const totalStars = 5
  const stars = []

  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
    )
  }

  return <div className="rating">{stars}</div>
}
