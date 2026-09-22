import "../Navbar.css";
import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18n from "../i18n";

// Wrapper pour injecter la location dans le class component
function withLocation(ClassComponent) {
  return function (props) {
    const location = useLocation();
    return <ClassComponent {...props} location={location} />;
  };
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: (i18n.language || "fr").toUpperCase(),
    };
  }

  setLang = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
    this.setState({ lang });

    // Bascule le sens du texte pour l'arabe (RTL)
    document.documentElement.dir = lang === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = lang.toLowerCase();
  };

  render() {
    const { location, t } = this.props;
    const currentPath = location.pathname;
    const { lang } = this.state;

    return (
      <nav className="navbar navbar-expand-lg fixed-top nx-navbar">
        <div className="container-fluid nx-navbar-inner">

          {/* Logo */}
          <Link className="navbar-brand nx-brand" to="/">
            <img src="/images/nexova-logo.png" alt="Nexova Trade" className="nx-logo-img" />
          </Link>

          {/* Burger menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label={t("navbar.toggle")}
          >
            <span className="custom-toggler-icon"><span></span><span></span><span></span></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto nx-nav-links">
              <li className="nav-item">
                <Link
                  className={`nav-link nx-link ${currentPath === "/" ? "active" : ""}`}
                  to="/"
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link nx-link ${currentPath === "/a-propos" ? "active" : ""}`}
                  to="/a-propos"
                >
                  {t("navbar.about")}
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nx-link"
                  href="#produits"
                  id="navbarProduits"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("navbar.products")}
                </a>
                <ul className="dropdown-menu nx-dropdown">
                  <li><Link className="dropdown-item" to="/produits/agricoles">{t("navbar.agricole")}</Link></li>
                  <li><Link className="dropdown-item" to="/produits/huiles">{t("navbar.huiles")}</Link></li>
                  <li><Link className="dropdown-item" to="/produits/terroir">{t("navbar.terroir")}</Link></li>
                  <li><Link className="dropdown-item" to="/produits/matieres">{t("navbar.matieres")}</Link></li>
                  <li><Link className="dropdown-item" to="/produits/manufactures">{t("navbar.manufactures")}</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link nx-link" to="/services">{t("navbar.services")}</Link>
              </li>
            </ul>

            {/* Zone droite : langue uniquement */}
            <div className="nx-nav-right">
              <div className="nx-lang-switch">
                {["FR", "EN", "AR"].map((l) => (
                  <button
                    key={l}
                    className={`nx-lang-btn ${lang === l ? "active" : ""}`}
                    onClick={() => this.setLang(l)}
                    type="button"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withLocation(withTranslation()(NavBar));