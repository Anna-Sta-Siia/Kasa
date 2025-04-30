import "../../styles/components/Header/header.scss";
import { NavLink } from "react-router-dom";
import logoLarge from "../../assets/LOGOgrand.png";
import logoSmall from "../../assets/LOGOsmall.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logoLarge} alt="Kasa logo" className="header__logo header__logo--desktop" />
      <img src={logoSmall} alt="Kasa logo mobile" className="header__logo header__logo--mobile" />
      <nav className="header__nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
