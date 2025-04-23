import '../../styles/components/Banner/banner.scss'

export default function Banner({ image, title, overlayOpacity = 0.6 }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${image})`,
        '--overlay-opacity': overlayOpacity, // 👈 une variable CSS pour contrôler l'opacité
      }}
    >
      {title && <h1 className="banner__title">{title}</h1>}
    </div>
  )
}
