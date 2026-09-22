import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "../services.css";

class Services extends Component {
    render() {
        const { t } = this.props;

        const services = [
            { key: "sourcing", icon: (
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M21 21l-4.3-4.3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            )},
            { key: "quality", icon: (
                <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )},
            { key: "logistics", icon: (
                <svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="7" cy="18" r="1.6" fill="currentColor" /><circle cx="17" cy="18" r="1.6" fill="currentColor" /></svg>
            )},
            { key: "customs", icon: (
                <svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            )},
            { key: "partnership", icon: (
                <svg viewBox="0 0 24 24"><path d="M8 12l2.5 2.5L16 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
            )},
            { key: "support", icon: (
                <svg viewBox="0 0 24 24"><path d="M12 3c-4 0-7 3-7 7 0 5 4 8 7 11 3-3 7-6 7-11 0-4-3-7-7-7z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )},
        ];

        const whyItems = [
            { key: "why1", icon: "◎" },
            { key: "why2", icon: "⚙" },
            { key: "why3", icon: "◈" },
            { key: "why4", icon: "♦" },
        ];

        const sectors = [
            { key: "agricole", img: "/images/NEXOVA-agricole.jpg" },
            { key: "huiles", img: "/images/NEXOVA-huiles.jpg" },
            { key: "terroir", img: "/images/NEXOVA-terroir.jpg" },
            { key: "matieres", img: "/images/NEXOVA-matieres.jpg" },
            { key: "manufactures", img: "/images/NEXOVA-manufactures.jpg" },
        ];

        const steps = ["step1", "step2", "step3", "step4"];
        const faqs = ["faq1", "faq2", "faq3", "faq4"];

        return (
            <div className="nx-services-page">

                {/* ===== HERO avec image de fond ===== */}
                <section
                    className="nx-services-hero"
                    style={{ backgroundImage: "url(/images/NEXOVA-services-hero.svg)" }}
                >
                    <div className="nx-services-hero-overlay"></div>
                    <div className="nx-services-hero-content">
                        <p className="nx-services-hero-eyebrow">{t("services_page.hero_eyebrow")}</p>
                        <h1>{t("services_page.hero_title")}</h1>
                        <p className="nx-services-hero-text">{t("services_page.hero_text")}</p>
                    </div>
                </section>

                {/* ===== Notre approche ===== */}
                <section className="nx-services-approach">
                    <h2>{t("services_page.approach_heading")}</h2>
                    <p>{t("services_page.approach_text1")}</p>
                    <p>{t("services_page.approach_text2")}</p>
                </section>

                {/* ===== Grille des services détaillée ===== */}
                <section className="nx-services-grid-section">
                    <h2>{t("services_page.services_heading")}</h2>
                    <div className="nx-services-grid">
                        {services.map((s) => (
                            <div className="nx-service-card" key={s.key}>
                                <span className="nx-service-icon">{s.icon}</span>
                                <h3>{t(`services_page.${s.key}_title`)}</h3>
                                <p>{t(`services_page.${s.key}_text`)}</p>
                                <ul className="nx-service-points">
                                    <li>{t(`services_page.${s.key}_point1`)}</li>
                                    <li>{t(`services_page.${s.key}_point2`)}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== Pourquoi nous choisir ===== */}
                <section className="nx-services-why">
                    <h2>{t("services_page.why_heading")}</h2>
                    <div className="nx-why-grid">
                        {whyItems.map((w) => (
                            <div className="nx-why-item" key={w.key}>
                                <span className="nx-why-icon">{w.icon}</span>
                                <h4>{t(`services_page.${w.key}_title`)}</h4>
                                <p>{t(`services_page.${w.key}_text`)}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== Secteurs desservis ===== */}
                <section className="nx-services-sectors">
                    <h2>{t("services_page.sectors_heading")}</h2>
                    <p className="nx-services-sectors-text">{t("services_page.sectors_text")}</p>
                    <div className="nx-sectors-grid">
                        {sectors.map((s) => (
                            <div
                                className="nx-sector-chip"
                                key={s.key}
                                style={{ backgroundImage: `url(${s.img})` }}
                            >
                                <span>{t(`navbar.${s.key}`)}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== Notre méthode ===== */}
                <section className="nx-services-process">
                    <h2>{t("services_page.process_heading")}</h2>
                    <div className="nx-process-steps">
                        {steps.map((s, i) => (
                            <div className="nx-process-step" key={s}>
                                <span className="nx-process-number">{String(i + 1).padStart(2, "0")}</span>
                                <div>
                                    <h4>{t(`services_page.${s}_title`)}</h4>
                                    <p>{t(`services_page.${s}_text`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== FAQ ===== */}
                <section className="nx-services-faq">
                    <h2>{t("services_page.faq_heading")}</h2>
                    <div className="nx-faq-list">
                        {faqs.map((f) => (
                            <details className="nx-faq-item" key={f}>
                                <summary>{t(`services_page.${f}_q`)}</summary>
                                <p>{t(`services_page.${f}_a`)}</p>
                            </details>
                        ))}
                    </div>
                </section>

            </div>
        );
    }
}

export default withTranslation()(Services);