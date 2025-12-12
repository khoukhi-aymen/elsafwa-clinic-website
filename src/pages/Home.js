import React, { Component } from "react";



class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      // Ajout pour Contact
      firstName: "",
      lastName: "",
      message: "",
      showModal: false,
      alertMessage: "",
      alertType: "", // success | error
    };
  }


    //Pour Contact : gestion des inputs
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // For Contact: form submission
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const { firstName, lastName, message } = this.state;

    //     axios
    //         .post("http://localhost:5000/api/contact", { firstName, lastName, message })
    //         .then((res) => {
    //             this.setState({
    //                 alertMessage: res.data.message || "Message sent successfully",
    //                 alertType: "success",
    //                 firstName: "",
    //                 lastName: "",
    //                 message: "",
    //             });
    //         })
    //         .catch(() => {
    //             this.setState({
    //                 alertMessage: "Failed to send, please try again",
    //                 alertType: "error",
    //             });
    //         });
    // };

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
        const { firstName, lastName, message } = this.state;

        return (
            <div>
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-slider">
                        <div
                            className="slide"
                            style={{
                                backgroundImage: "url('/images/TIGANA34.jpg')",
                            }}
                        ></div>
                        <div
                            className="slide"
                            style={{
                                backgroundImage: "url('/images/TIGANA50.jpg')",
                            }}
                        ></div>
                        <div
                            className="slide"
                            style={{
                                backgroundImage: "url('/images/TIGANA36.jpg')",
                            }}
                        ></div>
                    </div>

                    <div className="hero-content">
                        <h1>
                            Bienvenue chez <span>Tigana</span>
                        </h1>
                        <p>Qualité • Authenticité • Excellence à l’international</p>
                    </div>
            
                </section>

                {/* Services Section */}
                <section className="services" id="services">
                    <div className="container">
                        <h2 className="services-title">Nos Services</h2>
                        <div className="services-grid">
                            <div className="service-card">
                                <img src="/images/TIGANA33.jpg" alt="Dattes" />
                                <h3>Exportation de Dattes</h3>
                                <p>Dattes algériennes premium, dont la célèbre Deglet Nour, sélectionnées pour les marchés internationaux.</p>
                            </div>

                            <div className="service-card">
                                <img src="/images/TIGANA34.jpg" alt="Huile d'olive" />
                                <h3>Huile d’Olive</h3>
                                <p>Huile d’olive extra-vierge 100% algérienne, contrôlée et conditionnée pour l’exportation.</p>
                            </div>

                            <div className="service-card">
                                <img src="/images/TIGANA35.jpg" alt="Produits agricoles" />
                                <h3>Produits Agricoles</h3>
                                <p>Exportation de produits agricoles frais ou transformés répondant aux normes internationales.</p>
                            </div>

                            <div className="service-card">
                                <img src="/images/TIGANA36.jpg" alt="Agroalimentaire" />
                                <h3>Produits Agroalimentaires</h3>
                                <p>Une large gamme de produits agroalimentaires fabriqués en Algérie avec un haut niveau de qualité.</p>
                            </div>

                            <div className="service-card">
                                <img src="/images/TIGANA37.avif" alt="Emballage" />
                                <h3>Produits d’Emballage</h3>
                                <p>Solutions d’emballage modernes et fiables adaptées aux besoins industriels et commerciaux.</p>
                            </div>

                            <div className="service-card">
                                <img src="/images/TIGANA38.jpg" alt="Construction" />
                                <h3>Matériaux de Construction</h3>
                                <p>Produits de construction algériens certifiés, prêts pour les projets internationaux.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section">
                    <div className="stats-overlay">
                        <div className="container stats-container">
                            <div className="stat-item">
                                <h3>10K+</h3>
                                <p>Produits exportés</p>
                            </div>

                            <div className="stat-item">
                                <h3>15+</h3>
                                <p>Partenaires internationaux</p>
                            </div>

                            <div className="stat-item">
                                <h3>12+</h3>
                                <p>Années d’expérience</p>
                            </div>

                            <div className="stat-item">
                                <h3>6+</h3>
                                <p>Catégories de produits</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="contact-section" id="contact">
                    {/* Formulaire gauche */}
                    <div className="contact-left">
                        <h2> Contactez-nous</h2>
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Prénom"
                                value={firstName}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Nom"
                                value={lastName}
                                onChange={this.handleChange}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Votre message ici....."
                                value={message}
                                onChange={this.handleChange}
                                required
                            ></textarea>
                            <button type="submit">Envoyer</button>
                        </form>


                        {/* Alert */}
                        {this.state.alertMessage && (
                            <div className={`advanced-alert ${this.state.alertType}`}>
                                <div className="alert-content">
                                    <span className="alert-icon">
                                        {this.state.alertType === "success" ? "✅" : "❌"}
                                    </span>
                                    <p>{this.state.alertMessage}</p>
                                </div>
                                <button
                                    className="alert-btn"
                                    onClick={() => this.setState({ alertMessage: "" })}
                                >
                                    OK
                                </button>
                            </div>
                        )}

                        {/* Modal d'alerte contact*/}
                        {this.state.showModal && (
                            <div className="custom-modal-overlay">
                                <div className="custom-modal">
                                    <h3>Information</h3>
                                    <p>Ce service n'est pas encore disponible</p>
                                    <button className="modal-btn" onClick={this.closeModal}>
                                        OK
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Image droite */}
                    <div className="contact-right">
                        <img src="/images/TIGANA21.jpg" alt="Contact illustration" />
                    </div>
                </section>
            </div>
        );
    }
}


export default Home;