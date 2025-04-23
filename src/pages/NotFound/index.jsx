import { Link } from 'react-router-dom'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "../../styles/pages/NotFound/notfound.scss"
import errorImage from "../../assets/404.png"

export default function NotFound() {
  return (
    <>
    <main className='page'>
      <Header />
      <div className="notfound">
        <img src={errorImage} alt="404 - Page non trouvée" className="notfound__image" />
        <h2 className="notfound__text">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="notfound__link">Retourner sur la page d’accueil</Link>
      </div>
      </main>
      <Footer />
    </>
  )
}

