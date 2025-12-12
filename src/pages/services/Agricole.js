import { Component } from "react";
import { Box, Star, Award, Package, Truck, Leaf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

class Agricole extends Component {
    render() {
        return (
            <div>
                {/* === HERO SECTION === */}
                <section className="service-hero">
                    <video autoPlay muted loop className="service-video">
                        <source src="/videos/Agricole.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="overlay"></div>

                    <div className="service-hero-content">
                        <h1>Produits Agricoles</h1>
                        <p>
                            Exportation de produits agricoles frais ou transformés.
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

                {/* === ABOUT AGRICOLE SECTION === */}
                <section className="about-emergency">
                    <div className="container">
                        <h2 className="about-title">À propos de nos produits</h2>
                        <p className="about-subtitle">
                            TIGANA Trade propose des produits agricoles frais et de qualité, cultivés et transformés en Algérie.
                        </p>

                        <div className="radiology-grid">
                            {/* Carte 1 : Origine */}
                            <div className="radiology-card">
                                <Leaf className="radiology-icon" size={48} color="#4CAF50" />
                                <h3>Origine</h3>
                                <p>Nos produits proviennent des meilleures fermes et régions agricoles d'Algérie.</p>
                            </div>

                            {/* Carte 2 : Qualité */}
                            <div className="radiology-card">
                                <Star className="radiology-icon" size={48} color="#FFC107" />
                                <h3>Qualité</h3>
                                <p>Chaque produit est sélectionné pour sa fraîcheur et sa saveur exceptionnelle.</p>
                            </div>

                            {/* Carte 3 : Bio & Naturel */}
                            <div className="radiology-card">
                                <Award className="radiology-icon" size={48} color="#8BC34A" />
                                <h3>Bio & Naturel</h3>
                                <p>Produits cultivés naturellement, sans pesticides ni additifs chimiques.</p>
                            </div>

                            {/* Carte 4 : Transformation */}
                            <div className="radiology-card">
                                <Box className="radiology-icon" size={48} color="#3F51B5" />
                                <h3>Transformation</h3>
                                <p>Produits transformés et conditionnés selon les normes internationales.</p>
                            </div>

                            {/* Carte 5 : Emballage */}
                            <div className="radiology-card">
                                <Package className="radiology-icon" size={48} color="#9C27B0" />
                                <h3>Emballage</h3>
                                <p>Conditionné soigneusement pour conserver la fraîcheur et la qualité.</p>
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
                            Découvrez nos produits agricoles.
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
                            {["TIGANA8.jpg", "TIGANA9.jpg", "TIGANA10.jpg", "TIGANA11.jpg"].map(
                                (img, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="card shadow-sm border-0 rounded-3">
                                            <img
                                                src={`/images/${img}`}
                                                alt={`Produit agricole ${idx + 1}`}
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

export default Agricole;
