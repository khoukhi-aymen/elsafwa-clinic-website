import { Component } from "react";
import { Box, HardHat, Home, Hammer, Truck, Layers } from "lucide-react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

class Construction extends Component {
    render() {
        return (
            <div>
                {/* === HERO SECTION === */}
                <section className="service-hero">
                    <video autoPlay muted loop className="service-video">
                        <source src="/videos/Construction.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="overlay"></div>

                    <div className="service-hero-content">
                        <h1>Techniques Construction</h1>
                        <p>
                            Matériaux et équipements fiables pour tous vos projets de construction.
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

                {/* === ABOUT CONSTRUCTION SECTION === */}
                <section className="about-emergency">
                    <div className="container">
                        <h2 className="about-title">À propos de nos produits</h2>
                        <p className="about-subtitle">
                            TIGANA Trade fournit des matériaux de construction durables et adaptés à tous types de chantiers.
                        </p>

                        <div className="radiology-grid">
                            {/* Carte 1 : Solidité */}
                            <div className="radiology-card">
                                <HardHat className="radiology-icon" size={48} color="#F44336" />
                                <h3>Solidité</h3>
                                <p>Matériaux robustes garantissant la durabilité et la sécurité des constructions.</p>
                            </div>

                            {/* Carte 2 : Diversité */}
                            <div className="radiology-card">
                                <Layers className="radiology-icon" size={48} color="#2196F3" />
                                <h3>Diversité</h3>
                                <p>Large gamme de matériaux : béton, briques, fer, bois, et bien plus.</p>
                            </div>

                            {/* Carte 3 : Qualité */}
                            <div className="radiology-card">
                                <Hammer className="radiology-icon" size={48} color="#FF9800" />
                                <h3>Qualité</h3>
                                <p>Produits conformes aux normes nationales et internationales de construction.</p>
                            </div>

                            {/* Carte 4 : Innovation */}
                            <div className="radiology-card">
                                <Box className="radiology-icon" size={48} color="#9C27B0" />
                                <h3>Innovation</h3>
                                <p>Solutions modernes pour améliorer l’efficacité et la durabilité des chantiers.</p>
                            </div>

                            {/* Carte 5 : Logistique */}
                            <div className="radiology-card">
                                <Truck className="radiology-icon" size={48} color="#4CAF50" />
                                <h3>Logistique</h3>
                                <p>Livraison sécurisée et rapide de vos matériaux sur le chantier.</p>
                            </div>

                            {/* Carte 6 : Adaptabilité */}
                            <div className="radiology-card">
                                <Home className="radiology-icon" size={48} color="#FFC107" />
                                <h3>Adaptabilité</h3>
                                <p>Produits adaptés à tous types de constructions, résidentielles ou industrielles.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <br /><br /><br /><br />

                {/* === GALLERY SECTION === */}
                <section className="radiology-department py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="about-title text-center mb-6">Galerie de nos matériaux</h2>
                        <p className="about-subtitle text-center mb-10">
                            Découvrez nos solutions et matériaux pour la construction.
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
                            {["TIGANA38.jpg", "TIGANA45.jpg", "TIGANA47.jpg", "TIGANA48.jpg"].map(
                                (img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="card shadow-sm border-0 rounded-3">
                                            <img
                                                src={`/images/${img}`}
                                                alt={`Matériau ${idx + 1}`}
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

export default Construction;
