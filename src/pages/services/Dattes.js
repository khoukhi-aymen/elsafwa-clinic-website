import { Component } from "react";
import { Box, Star, Heart, Award, Package, Coffee } from "lucide-react";
// On utilise 6 icônes différentes : Award, Star, Box, Heart, Package, Coffee

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

class Dattes extends Component {
    render() {
        return (
            <div>
                {/* === HERO SECTION === */}
                <section className="service-hero">
                    <video autoPlay muted loop className="service-video">
                        <source src="/videos/Dattes.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="overlay"></div>

                    <div className="service-hero-content">
                       <h1>Dattes Algériennes</h1>
                        <p>
                            Dattes algériennes de qualité, soigneusement sélectionnées pour l’exportation.
                        </p>
                        {/* Bouton d'appel en français avec dropdown */}
                        <a
                            href="tel:+213779722300"
                            className="btn neon-btn px-4 py-2 fw-semibold"
                        >
                            Appeler maintenant
                        </a>
                    </div>
                </section>

                <br />
                <br />
                <br />

                {/* === ABOUT DATTES SECTION === */}
                <section className="about-emergency">
                    <div className="container">
                        <h2 className="about-title">À propos de nos produits</h2>
                        <p className="about-subtitle">
                            TIGANA Trade garantit la meilleure qualité pour ses dattes algériennes.
                        </p>

                        <div className="radiology-grid">
                            <div className="radiology-card">
                                <Award className="radiology-icon" size={48} color="#4CAF50"/>
                                <h3>Origine</h3>
                                <p>Nos dattes proviennent des meilleures palmeraies d'Algérie.</p>
                            </div>

                            <div className="radiology-card">
                                <Star className="radiology-icon" size={48} color="#FF8C00"/>
                                <h3>Qualité</h3>
                                <p>Chaque datte est soigneusement sélectionnée pour son goût et sa fraîcheur.</p>
                            </div>

                            <div className="radiology-card">
                                <Box className="radiology-icon" size={48}  color="#FFC107"/>
                                <h3>Utilisation</h3>
                                <p>Idéales pour la consommation directe, la pâtisserie ou l’exportation.</p>
                            </div>

                            <div className="radiology-card">
                                <Heart className="radiology-icon" size={48} color="#2196F3"/>
                                <h3>Avantages</h3>
                                <p>Riches en fibres et en nutriments, saines et délicieuses.</p>
                            </div>

                            <div className="radiology-card">
                                <Package className="radiology-icon" size={48} color="#9C27B0"/>
                                <h3>Emballage</h3>
                                <p>Nos dattes sont soigneusement emballées pour garantir leur fraîcheur.</p>
                            </div>

                            <div className="radiology-card">
                                <Coffee className="radiology-icon" size={48} color="#F44336"/>
                                <h3>Logistique & Export</h3>
                                <p>Suivi complet du transport pour que nos produits arrivent en parfait état.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <br />
                <br />
                <br />
                <br />

                {/* === GALLERY SECTION === */}
                <section className="radiology-department py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="about-title text-center mb-6">Galerie de nos dattes</h2>
                        <p className="about-subtitle text-center mb-10">
                            Découvrez nos produits et leur qualité exceptionnelle.
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
                            {["TIGANA3.jpg", "TIGANA4.jpg", "TIGANA5.jpg", "TIGANA6.jpg", "TIGANA7.jpg"].map(
                                (img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="card shadow-sm border-0 rounded-3">
                                            <img
                                                src={`/images/${img}`}
                                                alt={`Dattes ${idx + 1}`}
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

                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Dattes;
