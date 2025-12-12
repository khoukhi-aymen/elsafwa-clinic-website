import { Component } from "react";
import { Star, Box ,Truck, Award, Sun, CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

class Huile extends Component {
    render() {
        return (
            <div>
                {/* === HERO SECTION === */}
                <section className="service-hero">
                    <video autoPlay muted loop className="service-video">
                        <source src="/videos/Huile_oil.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="overlay"></div>

                    <div className="service-hero-content">
                        <h1>Huile d’Olive</h1>
                        <p>
                            Huile d’olive extra-vierge 100% algérienne, contrôlée et conditionnée pour l’exportation.
                        </p>
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

                {/* === ABOUT HUILE SECTION === */}
                <section className="about-emergency">
                    <div className="container">
                        <h2 className="about-title">Pourquoi notre Huile d’Olive ?</h2>
                        <p className="about-subtitle">
                            Huile d’olive extra-vierge 100% algérienne, naturelle et de qualité.
                        </p>
                        <div className="radiology-grid">
                            <div className="radiology-card">
                                <Star className="radiology-icon" size={48} color="#FFD700" />
                                <h3>Qualité Premium</h3>
                                <p>Extra-vierge, pressée à froid, goût riche et fruité.</p>
                            </div>

                            <div className="radiology-card">
                                <Sun className="radiology-icon" size={48} color="#228B22" />
                                <h3>Naturelle</h3>
                                <p>Huile pure, sans additifs, conservant toutes les propriétés des olives.</p>
                            </div>

                            <div className="radiology-card">
                                <CheckCircle className="radiology-icon" size={48} color="#1E90FF" />
                                <h3>Riche en Nutriments</h3>
                                <p>Source naturelle d'antioxydants et d'acides gras bons pour la santé.</p>
                            </div>

                            <div className="radiology-card">
                                <Box className="radiology-icon" size={48} color="#FF4500" />
                                <h3>Conditionnement</h3>
                                <p>Flacons et bouteilles soigneusement fermés pour préserver la qualité.</p>
                            </div>

                            <div className="radiology-card">
                                <Truck className="radiology-icon" size={48} color="#8A2BE2" />
                                <h3>Livraison Sécurisée</h3>
                                <p>Transport fiable pour garantir une huile intacte jusqu’à votre porte.</p>
                            </div>

                            <div className="radiology-card">
                                <Award className="radiology-icon" size={48} color="#FF8C00" />
                                <h3>Certification</h3>
                                <p>Huile contrôlée et certifiée pour l’exportation internationale.</p>
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
                        <h2 className="about-title text-center mb-6">Galerie de notre huile</h2>
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
                            {["TIGANA17.jpg", "TIGANA20.jpg", "TIAGANA41.jpg", "TIAGANA44.jpg"].map(
                                (img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="card shadow-sm border-0 rounded-3">
                                            <img
                                                src={`/images/${img}`}
                                                alt={`Huile d’Olive ${idx + 1}`}
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

export default Huile;
