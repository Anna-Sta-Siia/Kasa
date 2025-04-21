import '../../styles/components/Footer/footer.scss'
import logo from '../../assets/LOGOfooter.png'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo Kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
