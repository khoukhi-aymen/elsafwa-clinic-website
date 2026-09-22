import { Component } from "react";
import { withTranslation } from "react-i18next";
import { Box, Star, Award, Package, Truck, Leaf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../../Agricole.css";

class Agricole extends Component {
    render() {
        const { t } = this.props;

        const galleryImages = [
            "NEXOVA-agricole-1.jpg",
            "NEXOVA-agricole-2.jpg",
            "NEXOVA-agricole-3.jpg",
            "NEXOVA-agricole-4.jpg",
            "NEXOVA-agricole-5.jpg",
            "NEXOVA-agricole-6.jpg"
        ];

        return (
            <div className="nx-product-page">

                {/* ==================== HERO ==================== */}
                <section className="nx-service-hero nx-agricole-hero">

                    <div className="nx-service-hero-content">
                        <h1>
                            {t("products.agricole.hero_title")}
                        </h1>

                        <p>
                            {t("products.agricole.hero_text")}
                        </p>
                    </div>

                </section>


                {/* ==================== À PROPOS ==================== */}
                <section className="nx-about-section">
                    <div className="container">

                        <h2 className="nx-section-title">
                            {t("products.agricole.about_title")}
                        </h2>

                        <p className="nx-section-subtitle">
                            {t("products.agricole.about_subtitle")}
                        </p>


                        <div className="nx-feature-grid">

                            <div className="nx-feature-card">
                                <Leaf
                                    className="nx-feature-card-icon"
                                    size={40}
                                    color="#4CAF50"
                                />

                                <h3>
                                    {t("products.agricole.card1_title")}
                                </h3>

                                <p>
                                    {t("products.agricole.card1_text")}
                                </p>
                            </div>


                            <div className="nx-feature-card">
                                <Star
                                    className="nx-feature-card-icon"
                                    size={40}
                                    color="#FFC107"
                                />

                                <h3>
                                    {t("products.agricole.card2_title")}
                                </h3>

                                <p>
                                    {t("products.agricole.card2_text")}
                                </p>
                            </div>


                            <div className="nx-feature-card">
                                <Award
                                    className="nx-feature-card-icon"
                                    size={40}
                                    color="#8BC34A"
                                />

                                <h3>
                                    {t("products.agricole.card3_title")}
                                </h3>

                                <p>
                                    {t("products.agricole.card3_text")}
                                </p>
                            </div>


                            <div className="nx-feature-card">
                                <Box
                                    className="nx-feature-card-icon"
                                    size={40}
                                    color="#3F51B5"
                                />

                                <h3>
                                    {t("products.agricole.card4_title")}
                                </h3>

                                <p>
                                    {t("products.agricole.card4_text")}
                                </p>
                            </div>


                            <div className="nx-feature-card">
                                <Package
                                    className="nx-feature-card-icon"
                                    size={40}
                                    color="#9C27B0"
                                />

                                <h3>
                                    {t("products.agricole.card5_title")}
                                </h3>

                                <p>
                                    {t("products.agricole.card5_text")}
                                </p>
                            </div>


                            <div className="nx-feature-card">
                                <Truck
                                    className="nx-feature-card-icon"
                                    size={40}
                                    color="#c96a3d"
                                />

                                <h3>
                                    {t("products.agricole.card6_title")}
                                </h3>

                                <p>
                                    {t("products.agricole.card6_text")}
                                </p>
                            </div>

                        </div>

                    </div>
                </section>


                {/* ==================== GALERIE ==================== */}
                <section className="nx-gallery-section">

                    <div className="container">

                        <h2 className="nx-section-title nx-text-center">
                            {t("products.agricole.gallery_title")}
                        </h2>

                        <p className="nx-section-subtitle nx-text-center">
                            {t("products.agricole.gallery_subtitle")}
                        </p>


                        <Swiper
                            dir="ltr"
                            spaceBetween={20}

                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}

                            pagination={{
                                clickable: true,
                            }}

                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },

                                640: {
                                    slidesPerView: 1,
                                },

                                768: {
                                    slidesPerView: 2,
                                },

                                1024: {
                                    slidesPerView: 3,
                                },

                                1400: {
                                    slidesPerView: 4,
                                },
                            }}

                            modules={[Autoplay, Pagination]}
                            className="nx-swiper"
                        >

                            {galleryImages.map((img, idx) => (

                                <SwiperSlide key={idx}>

                                    <div className="nx-gallery-card">

                                        <img
                                            src={`../../images/${img}`}
                                            alt={`${t(
                                                "products.agricole.hero_title"
                                            )} ${idx + 1}`}
                                            className="nx-gallery-img"
                                        />

                                    </div>

                                </SwiperSlide>

                            ))}

                        </Swiper>

                    </div>

                </section>

            </div>
        );
    }
}

export default withTranslation()(Agricole);