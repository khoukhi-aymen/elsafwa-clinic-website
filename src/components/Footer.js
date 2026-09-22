import "../Footer.css";
import { Component } from "react";
import { withTranslation } from "react-i18next";

class Footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <footer className="nx-footer">
        <div className="nx-footer-top">

          {/* Colonne 1 : à propos */}
          <div className="nx-footer-col nx-footer-brand">
            <h3>{t("footer.brand_title")}</h3>
            <p>{t("footer.brand_text")}</p>
            <div className="nx-footer-social">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t("footer.social_facebook")}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t("footer.social_instagram")}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@nexovatrade" target="_blank" rel="noopener noreferrer" aria-label={t("footer.social_tiktok")}>
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.linkedin.com/company/nexova-trade" target="_blank" rel="noopener noreferrer" aria-label={t("footer.social_linkedin")}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="mailto:eurlnexova@gmail.com?subject=Demande%20d'information&body=Bonjour,%0A%0AVotre%20message%20ici..." aria-label={t("footer.social_email")}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : navigation */}
          <div className="nx-footer-col">
            <h4>{t("footer.nav_heading")}</h4>
            <ul>
              <li><a href="/">{t("navbar.home")}</a></li>
              <li><a href="/a-propos">{t("navbar.about")}</a></li>
              <li><a href="/produits">{t("navbar.products")}</a></li>
              <li><a href="/services">{t("navbar.services")}</a></li>
            </ul>
          </div>

          {/* Colonne 3 : produits */}
          <div className="nx-footer-col">
            <h4>{t("footer.products_heading")}</h4>
            <ul>
              <li><a href="/produits/agricoles">{t("navbar.agricole")}</a></li>
              <li><a href="/produits/huiles">{t("navbar.huiles")}</a></li>
              <li><a href="/produits/terroir">{t("navbar.terroir")}</a></li>
              <li><a href="/produits/matieres">{t("navbar.matieres")}</a></li>
              <li><a href="/produits/manufactures">{t("navbar.manufactures")}</a></li>
            </ul>
          </div>

          {/* Colonne 4 : contact */}
          <div className="nx-footer-col">
            <h4>{t("footer.contact_heading")}</h4>
            <ul className="nx-footer-contact">
              <li>
                <i className="fas fa-user"></i>
                <span>HAMI Mounir</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>{t("footer.address")}</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:eurlnexova@gmail.com">eurlnexova@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:hami.mounir@nexova-trade.fr">hami.mounir@nexova-trade.fr</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+213781809408">07 81 80 94 08</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+213666002938">06 66 00 29 38</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nx-footer-bottom">
          <p>
            © {new Date().getFullYear()} EURL Nexova Trade. {t("footer.rights")}
          </p>
        </div>
      </footer>
    );
  }
}

export default withTranslation()(Footer);