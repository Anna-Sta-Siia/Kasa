import '../../styles/components/Card/card.scss'

export default function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card__img" />
      <h2 className="card__title">{title}</h2>
    </div>
  )
}
