import '../../styles/components/Footer/footer.scss'
import logo from '../../assets/LOGOfooter.png'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer__logo" />
      <p className="footer__text"><span className="footer__text_part">© 2020 Kasa. All</span><span className="footer__text_part"> rights reserved</span></p>
    </footer>
  )
}
