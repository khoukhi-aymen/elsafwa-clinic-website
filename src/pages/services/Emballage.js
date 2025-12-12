import { Component } from "react";
import { Box, Package, Archive, Truck, Shield, Layers } from "lucide-react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

class Emballage extends Component {
    render() {
        return (
            <div>
                {/* === HERO SECTION === */}
                <section className="service-hero">
                    <video autoPlay muted loop className="service-video">
                        <source src="/videos/Emballage.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="overlay"></div>

                    <div className="service-hero-content">
                        <h1>Solutions d’Emballage</h1>
                        <p>
                            Solutions d’emballage modernes et fiables pour industries et commerces.
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

                {/* === ABOUT EMBALLAGE SECTION === */}
                <section className="about-emergency">
                    <div className="container">
                        <h2 className="about-title">À propos de nos solutions d’emballage</h2>
                        <p className="about-subtitle">
                            TIGANA Trade propose des solutions fiables et personnalisées pour tous types de produits.
                        </p>

                        <div className="radiology-grid">
                            {/* Carte 1 : Protection */}
                            <div className="radiology-card">
                                <Shield className="radiology-icon" size={48} color="#4CAF50" />
                                <h3>Protection</h3>
                                <p>Emballages conçus pour protéger vos produits pendant le transport et le stockage.</p>
                            </div>

                            {/* Carte 2 : Polyvalence */}
                            <div className="radiology-card">
                                <Layers className="radiology-icon" size={48} color="#2196F3" />
                                <h3>Polyvalence</h3>
                                <p>Adaptés à tous types de produits, du solide au liquide, petit ou grand format.</p>
                            </div>

                            {/* Carte 3 : Personnalisation */}
                            <div className="radiology-card">
                                <Box className="radiology-icon" size={48} color="#FF9800" />
                                <h3>Personnalisation</h3>
                                <p>Possibilité de personnaliser l’emballage selon votre marque et vos besoins spécifiques.</p>
                            </div>

                            {/* Carte 4 : Durabilité */}
                            <div className="radiology-card">
                                <Archive className="radiology-icon" size={48} color="#9C27B0" />
                                <h3>Durabilité</h3>
                                <p>Matériaux de haute qualité, résistants et respectueux de l’environnement.</p>
                            </div>

                            {/* Carte 5 : Logistique */}
                            <div className="radiology-card">
                                <Truck className="radiology-icon" size={48} color="#F44336" />
                                <h3>Logistique</h3>
                                <p>Emballages optimisés pour le transport, la manutention et le stockage.</p>
                            </div>

                            {/* Carte 6 : Facilité d’usage */}
                            <div className="radiology-card">
                                <Package className="radiology-icon" size={48} color="#FFC107" />
                                <h3>Facilité d’usage</h3>
                                <p>Conçus pour simplifier l’emballage, le déballage et l’utilisation finale.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <br /><br /><br /><br />

                {/* === GALLERY SECTION === */}
                <section className="radiology-department py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="about-title text-center mb-6">Galerie de nos emballages</h2>
                        <p className="about-subtitle text-center mb-10">
                            Découvrez nos solutions d’emballage pour tous secteurs.
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
                            {["TIGANA39.jpg", "TIGANA40.png", "TIGANA41.jpeg", "TIGANA43.jpeg"].map(
                                (img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="card shadow-sm border-0 rounded-3">
                                            <img
                                                src={`/images/${img}`}
                                                alt={`Emballage ${idx + 1}`}
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

export default Emballage;
