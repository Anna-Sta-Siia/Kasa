import { Link } from 'react-router-dom'
import '../../styles/components/Card/card.scss'

export default function Card({ title, cover, id }) {
  return (
    <Link to={`/accommodation/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}
