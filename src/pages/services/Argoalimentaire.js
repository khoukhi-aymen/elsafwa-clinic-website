import { Component } from "react";
import { Box, Star, Heart, Award, Package, Truck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

class Agroalimentaire extends Component {
    render() {
        return (
            <div>
                {/* === HERO SECTION === */}
                <section className="service-hero">
                    <video autoPlay muted loop className="service-video">
                        <source src="/videos/AgricoAlimentaire.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="overlay"></div>

                    <div className="service-hero-content">
                        <h1>Agroalimentaire Algérien</h1>
                        <p>
                            Une large gamme de produits agroalimentaires fabriqués en Algérie.
                        </p>
                        <a
                            href="tel:+213779722300"
                            className="btn neon-btn px-4 py-2 fw-semibold"
                        >
                            Appeler maintenant
                        </a>
                    </div>
                </section>

                <br /><br /><br />

                {/* === ABOUT AGROALIMENTAIRE SECTION === */}
                <section className="about-emergency">
                    <div className="container">
                        <h2 className="about-title">À propos de nos produits</h2>
                        <p className="about-subtitle">
                            TIGANA Trade propose une large gamme de produits agroalimentaires de qualité, fabriqués en Algérie.
                        </p>

                        <div className="radiology-grid">
                            {/* Carte 1 : Origine */}
                            <div className="radiology-card">
                                <Award className="radiology-icon" size={48} color="#4CAF50" />
                                <h3>Origine</h3>
                                <p>Produits fabriqués dans les meilleures régions agricoles et industrielles d'Algérie.</p>
                            </div>

                            {/* Carte 2 : Qualité */}
                            <div className="radiology-card">
                                <Star className="radiology-icon" size={48} color="#FFC107" />
                                <h3>Qualité</h3>
                                <p>Produits répondant aux normes nationales et internationales.</p>
                            </div>

                            {/* Carte 3 : Gamme */}
                            <div className="radiology-card">
                                <Box className="radiology-icon" size={48} color="#3F51B5" />
                                <h3>Gamme Variée</h3>
                                <p>Une variété de produits frais, transformés et prêts à la consommation.</p>
                            </div>

                            {/* Carte 4 : Emballage */}
                            <div className="radiology-card">
                                <Package className="radiology-icon" size={48} color="#9C27B0" />
                                <h3>Emballage</h3>
                                <p>Emballage soigné pour garantir la sécurité et la fraîcheur des produits.</p>
                            </div>

                            {/* Carte 5 : Santé & Nutrition */}
                            <div className="radiology-card">
                                <Heart className="radiology-icon" size={48} color="#E91E63" />
                                <h3>Santé & Nutrition</h3>
                                <p>Produits nutritifs et sains, adaptés à toute la famille.</p>
                            </div>

                            {/* Carte 6 : Export & Logistique */}
                            <div className="radiology-card">
                                <Truck className="radiology-icon" size={48} color="#F44336" />
                                <h3>Export & Logistique</h3>
                                <p>Transport sécurisé et suivi pour garantir l’arrivée parfaite des produits.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <br /><br /><br /> <br />

                {/* === GALLERY SECTION === */}
                <section className="radiology-department py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="about-title text-center mb-6">Galerie de nos produits</h2>
                        <p className="about-subtitle text-center mb-10">
                            Découvrez notre gamme de produits agroalimentaires.
                        </p>

                        <Swiper
                            dir="ltr"
                            spaceBetween={20}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {["TIGANA12.jpg", "TIGANA13.jpg", "TIGANA14.jpg", "TIGANA15.jpg", "TIGANA27.jpg", "TIGANA28.jpg", "TIGANA30.jpg", "TIGANA36.jpg"].map(
                                (img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="card shadow-sm border-0 rounded-3">
                                            <img
                                                src={`/images/${img}`}
                                                alt={`Produit agroalimentaire ${idx + 1}`}
                                                className="card-img-top img-fluid w-100"
                                                style={{ height: "300px", objectFit: "cover" }}
                                            />
                                        </div>
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>
                </section>

                <br /><br /><br />
            </div>
        );
    }
}

export default Agroalimentaire;
