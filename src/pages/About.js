import { Component } from "react";

class About extends Component {
  render() {
    return (
      <section className="about-section">
        <br />
        <br />
        <div className="container">
          {/* Titre */}
          <h2 className="about-title">À propos de nous</h2>
          <p className="about-subtitle">
            Bienvenue chez <strong>TIGANA Trade</strong>
          </p>

          {/* Présentation */}
          <div className="about-content">
            <div className="about-text">
              <h3>Qui sommes-nous ?</h3>
              <p>
                TIGANA INTERNATIONAL TRADING est une entreprise spécialisée dans l’exportation de produits algériens vers les marchés internationaux. 
                Notre mission est de promouvoir la qualité, l’authenticité et la richesse des produits fabriqués en Algérie, tout en offrant des solutions commerciales fiables, rapides et adaptées aux besoins de nos partenaires à l’étranger.
              </p>

              <h3>Nos services & produits</h3>
              <p>
                Nous assurons un accompagnement complet allant de la sélection des produits, au contrôle de qualité, jusqu’à la gestion logistique et l’expédition. 
                Grâce à notre réseau professionnel solide et à notre expertise confirmée dans le commerce international, nous garantissons un service transparent, efficace et centré sur la satisfaction de nos clients.
              </p>

              <ul>
                <li>✔ Dattes</li>
                <li>✔ Huile d’Olive</li>
                <li>✔ Produits agricoles</li>
                <li>✔ Produits agroalimentaires</li>
                <li>✔ Produits d’emballage</li>
                <li>✔ Produits de construction</li>
              </ul>

              <h3>Notre mission & valeurs</h3>
              <ul>
                <li>✔ Qualité et authenticité des produits</li>
                <li>✔ Service fiable et rapide</li>
                <li>✔ Satisfaction client</li>
                <li>✔ Innovation et amélioration continue</li>
              </ul>
            </div>

            {/* Carte / GPS Map */}
            <div className="about-map">
              <iframe
                title="TIGANA Trade Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3203.818608450334!2d3.574746384716215!3d36.58258877999396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDM0JzU3LjMiTiAzwrAzNCcyMS4yIkU!5e0!3m2!1sar!2sdz!4v1765556839487!5m2!1sar!2sdz"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
