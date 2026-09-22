import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "../About.css";

class About extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="nx-about-page">

                {/* Bannière de titre */}
                <section className="nx-about-hero">
                    <p className="nx-about-hero-eyebrow">{t("about_page.hero_eyebrow")}</p>
                    <h1>EURL Nexova Trade</h1>
                    <p className="nx-about-hero-text">
                        {t("about_page.hero_text")}
                    </p>
                </section>

                {/* Présentation */}
                <section className="nx-about-intro">
                    <div className="nx-about-intro-text">
                        <h2>{t("about_page.intro_heading")}</h2>
                        <p>{t("about_page.intro_text1")}</p>
                        <p>{t("about_page.intro_text2")}</p>
                    </div>
                    <div className="nx-about-intro-img">
                        <img src="/images/NEXOVA-about.jpg" alt="Équipe Nexova Trade" />
                    </div>
                </section>

                {/* Vision / Mission / Valeurs */}
                <section className="nx-about-pillars">
                    <div className="nx-pillar">
                        <span className="nx-pillar-icon">◎</span>
                        <h3>{t("home.about.vision_title")}</h3>
                        <p>{t("home.about.vision_text")}</p>
                    </div>

                    <div className="nx-pillar">
                        <span className="nx-pillar-icon">⚙</span>
                        <h3>{t("home.about.mission_title")}</h3>
                        <p>{t("home.about.mission_text")}</p>
                    </div>

                    <div className="nx-pillar">
                        <span className="nx-pillar-icon">♦</span>
                        <h3>{t("home.about.values_title")}</h3>
                        <p>{t("home.about.values_text")}</p>
                    </div>
                </section>

                {/* Chiffres clés */}
                <section className="nx-about-stats">
                    <div className="nx-about-stat">
                        <strong>{t("home.stats.clients_value")}</strong>
                        <p>{t("home.stats.clients_label")}</p>
                    </div>
                    <div className="nx-about-stat">
                        <strong>{t("home.stats.countries_value")}</strong>
                        <p>{t("home.stats.countries_label")}</p>
                    </div>
                    <div className="nx-about-stat">
                        <strong>{t("home.stats.shipments_value")}</strong>
                        <p>{t("home.stats.shipments_label")}</p>
                    </div>
                </section>

            </div>
        );
    }
}

export default withTranslation()(About);