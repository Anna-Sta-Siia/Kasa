import '../../styles/components/Banner/banner.scss'

export default function Banner({ title, image, variant = 'default' }) {
  const className = `banner banner--${variant}`

  return (
    <div className={className}>
      <div className="banner__overlay"></div>
      {title && <h1 className="banner__title">{title}</h1>}
      <div className="banner__bg" style={{ backgroundImage: `url(${image})` }}></div>
    </div>
  )
}

