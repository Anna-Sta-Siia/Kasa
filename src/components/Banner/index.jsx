import '../../styles/components/Banner/banner.scss'
import bannerImg from '../../assets/Image_home.png'

export default function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Bannière" className="banner__image" />
      <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
    </div>
  )
}
