import { Link } from "react-router-dom";
import "../../styles/pages/NotFound/notfound.scss";
import errorImage from "../../assets/404.png";

export default function NotFound() {
  return (
    <>
      <div className="notfound">
        <img src={errorImage} alt="404 - Page non trouvée" className="notfound__image" />
        <h2 className="notfound__text">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="notfound__link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </>
  );
}
