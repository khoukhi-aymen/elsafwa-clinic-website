import { Component } from "react";
import { withTranslation } from "react-i18next";

class Footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        {/* Footer Section */}
        <footer className="footer">
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@tiganaexport?_r=1&_t=ZS-926guh8qDot" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            {/* Icône Email */}
            <a
              href="mailto:tigana2013exports@gmail.com?subject=Demande%20d'information&body=Bonjour,%0A%0AVotre%20message%20ici..."
            >
              <i className="fas fa-envelope"></i>
            </a>


          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} TIGANA Trade. Tous droits réservés.
          </p>
        </footer>
      </div>
    );
  }
}

export default withTranslation()(Footer);
