import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

// Wrapper pour injecter la location dans le class component
function withLocation(ClassComponent) {
  return function(props) {
    const location = useLocation();
    return <ClassComponent {...props} location={location} />;
  };
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAppointment: false,
    };
  }

  handleGoToContact = () => {
    const section = document.querySelector("#contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    const { location } = this.props;
    const currentPath = location.pathname;

    return (
      <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-bold brand-logo d-flex align-items-center" to="/">
            <img src="/images/tiganalogo.png" alt="Logo" className="logo-img" />
            <span style={{ marginLeft: "8px", fontSize:"18px"}}>TIGANA Trade</span>
          </Link>
          {/* Burger menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="custom-toggler-icon"><span></span><span></span><span></span></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center nav-animate-links">
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-link" to="/about">À propos de nous</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle custom-link"
                  href="#services"
                  id="navbarServices"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Produits
                </a>
                <ul className="dropdown-menu custom-dropdown">
                  <li><Link className="dropdown-item" to="/produits/Dattes">Dattes</Link></li>
                  <li><Link className="dropdown-item" to="/produits/Huile">Huile d’Olive</Link></li>
                  <li><Link className="dropdown-item" to="/produits/Agricole">Agricole</Link></li>
                  <li><Link className="dropdown-item" to="/produits/Agroalimentaire">Agroalimentaire</Link></li>
                  <li><Link className="dropdown-item" to="/produits/Emballage">Emballage</Link></li>
                  <li><Link className="dropdown-item" to="/produits/Construction">Construction</Link></li>
                </ul>
              </li>

              {/* Bouton Contact visible seulement sur Home */}
              {currentPath === "/" && (
                <button
                  className="btn neon-btn px-4 py-2 fw-semibold book-btn"
                  onClick={this.handleGoToContact}
                >
                  Contact
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// On exporte le class component avec location injecté
export default withLocation(NavBar);
