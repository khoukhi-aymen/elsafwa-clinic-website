import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "../Home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            message: "",
            showModal: false,
            alertMessage: "",
            alertType: "",
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    closeAlert = () => {
        this.setState({ alertMessage: "", alertType: "" });
    };

    render() {
        const { t } = this.props;
        const { firstName, lastName, message } = this.state;

        return (
            <div className="nx-page">

                {/* ===== HERO ===== */}
                <section className="nx-hero">
                    <div className="nx-hero-left">
                        <p className="nx-hero-eyebrow">
                            {t("home.hero.eyebrow_line1")} <br /> {t("home.hero.eyebrow_line2")}
                        </p>
                        <h1 className="nx-hero-title">
                            {t("home.hero.title_line1")}<br />{t("home.hero.title_line2")}
                        </h1>
                        <p className="nx-hero-text">
                            {t("home.hero.text")}
                        </p>
                        <div className="nx-hero-actions">
                            <a href="#produits" className="nx-btn nx-btn-primary">
                                {t("home.hero.cta_products")}
                            </a>
                            <a href="#contact" className="nx-btn nx-btn-outline">
                                {t("home.hero.cta_contact")}
                            </a>
                        </div>
                    </div>

                    <div className="nx-hero-right">
                        <img
                            src="/images/NEXOVA-hero.jpg"
                            alt="Port et export international"
                            className="nx-hero-img"
                        />
                        <div className="nx-hero-badge">
                            <span>{t("home.hero.badge_label")}</span>
                            <strong>{t("home.hero.badge_value")}</strong>
                        </div>
                        <div className="nx-hero-caption">
                            {t("home.hero.caption_line1")}<br />{t("home.hero.caption_line2")}
                        </div>
                    </div>
                </section>

                {/* ===== ATOUTS ===== */}
                <section className="nx-features">
                    <div className="nx-feature">
                        <span className="nx-feature-icon">
                            <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <div>
                            <h3>{t("home.features.reliability_title")}</h3>
                            <p>{t("home.features.reliability_text")}</p>
                        </div>
                    </div>

                    <div className="nx-feature">
                        <span className="nx-feature-icon">
                            <svg viewBox="0 0 24 24"><path d="M12 3c-4 0-7 3-7 7 0 5 4 8 7 11 3-3 7-6 7-11 0-4-3-7-7-7z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <div>
                            <h3>{t("home.features.quality_title")}</h3>
                            <p>{t("home.features.quality_text")}</p>
                        </div>
                    </div>

                    <div className="nx-feature">
                        <span className="nx-feature-icon">
                            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
                        </span>
                        <div>
                            <h3>{t("home.features.presence_title")}</h3>
                            <p>{t("home.features.presence_text")}</p>
                        </div>
                    </div>

                    <div className="nx-feature">
                        <span className="nx-feature-icon">
                            <svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="7" cy="18" r="1.6" fill="currentColor" /><circle cx="17" cy="18" r="1.6" fill="currentColor" /></svg>
                        </span>
                        <div>
                            <h3>{t("home.features.logistics_title")}</h3>
                            <p>{t("home.features.logistics_text")}</p>
                        </div>
                    </div>

                    <div className="nx-feature">
                        <span className="nx-feature-icon">
                            <svg viewBox="0 0 24 24"><path d="M8 12l2.5 2.5L16 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
                        </span>
                        <div>
                            <h3>{t("home.features.partner_title")}</h3>
                            <p>{t("home.features.partner_text")}</p>
                        </div>
                    </div>
                </section>

                {/* ===== PRODUITS ===== */}
                <section className="nx-products" id="produits">
                    <div className="nx-products-head">
                        <h2>{t("home.products.heading")}</h2>
                        <a href="#produits">{t("home.products.see_all")}</a>
                    </div>

                    <div className="nx-products-grid">
                        <div className="nx-product-card">
                            <img src="/images/NEXOVA-agricole.jpg" alt={t("home.products.agricole_title")} />
                            <h3>{t("home.products.agricole_title")}</h3>
                            <p>{t("home.products.agricole_text")}</p>
                        </div>

                        <div className="nx-product-card">
                            <img src="/images/NEXOVA-huiles.jpg" alt={t("home.products.huiles_title")} />
                            <h3>{t("home.products.huiles_title")}</h3>
                            <p>{t("home.products.huiles_text")}</p>
                        </div>

                        <div className="nx-product-card">
                            <img src="/images/NEXOVA-terroir.jpg" alt={t("home.products.terroir_title")} />
                            <h3>{t("home.products.terroir_title")}</h3>
                            <p>{t("home.products.terroir_text")}</p>
                        </div>

                        <div className="nx-product-card">
                            <img src="/images/NEXOVA-matieres.jpg" alt={t("home.products.matieres_title")} />
                            <h3>{t("home.products.matieres_title")}</h3>
                            <p>{t("home.products.matieres_text")}</p>
                        </div>

                        <div className="nx-product-card">
                            <img src="/images/NEXOVA-manufactures.jpg" alt={t("home.products.manufactures_title")} />
                            <h3>{t("home.products.manufactures_title")}</h3>
                            <p>{t("home.products.manufactures_text")}</p>
                        </div>
                    </div>
                </section>

                {/* ===== STATISTIQUES ===== */}
                <section className="nx-stats">
                    <div className="nx-stats-grid">
                        <div className="nx-stat">
                            <span className="nx-stat-icon">📈</span>
                            <div>
                                <strong>{t("home.stats.clients_value")}</strong>
                                <p>{t("home.stats.clients_label")}</p>
                            </div>
                        </div>
                        <div className="nx-stat">
                            <span className="nx-stat-icon">🌍</span>
                            <div>
                                <strong>{t("home.stats.countries_value")}</strong>
                                <p>{t("home.stats.countries_label")}</p>
                            </div>
                        </div>
                        <div className="nx-stat">
                            <span className="nx-stat-icon">🚢</span>
                            <div>
                                <strong>{t("home.stats.shipments_value")}</strong>
                                <p>{t("home.stats.shipments_label")}</p>
                            </div>
                        </div>
                        <div className="nx-stat">
                            <span className="nx-stat-icon">🤝</span>
                            <div>
                                <strong>{t("home.stats.network_value")}</strong>
                                <p>{t("home.stats.network_label")}</p>
                            </div>
                        </div>
                    </div>
                    <p className="nx-stats-caption">
                        {t("home.stats.caption_line1")}<br />{t("home.stats.caption_line2")}
                    </p>
                </section>

                {/* ===== À PROPOS ===== */}
                <section className="nx-about" id="a-propos">
                    <div className="nx-about-text">
                        <p className="nx-about-eyebrow">{t("home.about.eyebrow")}</p>
                        <h2>{t("home.about.title")}</h2>
                        <p>{t("home.about.text")}</p>

                        <div className="nx-about-item">
                            <span>◎</span>
                            <div>
                                <h4>{t("home.about.vision_title")}</h4>
                                <p>{t("home.about.vision_text")}</p>
                            </div>
                        </div>

                        <div className="nx-about-item">
                            <span>⚙</span>
                            <div>
                                <h4>{t("home.about.mission_title")}</h4>
                                <p>{t("home.about.mission_text")}</p>
                            </div>
                        </div>

                        <div className="nx-about-item">
                            <span>♦</span>
                            <div>
                                <h4>{t("home.about.values_title")}</h4>
                                <p>{t("home.about.values_text")}</p>
                            </div>
                        </div>

                        <a href="#a-propos" className="nx-btn nx-btn-dark">{t("home.about.cta_more")}</a>
                    </div>

                    <div className="nx-about-map">
                        <img src="/images/NEXOVA-map.png" alt="L'Algérie vers le monde" />
                        <p>{t("home.about.map_caption_line1")}<br />{t("home.about.map_caption_line2")}</p>
                    </div>
                </section>

                {/* ===== CONTACT ===== */}
                <section className="nx-contact" id="contact">
                    <div className="nx-contact-left">
                        <h2>{t("home.contact.title")}</h2>
                        <form className="nx-contact-form" onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder={t("home.contact.first_name_placeholder")}
                                value={firstName}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder={t("home.contact.last_name_placeholder")}
                                value={lastName}
                                onChange={this.handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder={t("home.contact.message_placeholder")}
                                value={message}
                                onChange={this.handleChange}
                                required
                            ></textarea>
                            <button type="submit">{t("home.contact.submit")}</button>
                        </form>

                        {this.state.alertMessage && (
                            <div className={`nx-alert ${this.state.alertType}`}>
                                <p>{this.state.alertMessage}</p>
                                <button onClick={this.closeAlert}>OK</button>
                            </div>
                        )}

                        {this.state.showModal && (
                            <div className="nx-modal-overlay">
                                <div className="nx-modal">
                                    <h3>{t("home.contact.modal_title")}</h3>
                                    <p>{t("home.contact.modal_text")}</p>
                                    <button onClick={this.closeModal}>{t("home.contact.modal_ok")}</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="nx-contact-right">
                        <img src="/images/NEXOVA21.jpg" alt="Contact illustration" />
                    </div>
                </section>
            </div>
        );
    }
}

export default withTranslation()(Home);