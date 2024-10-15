import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaMailBulk } from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 justify-content-center text-center align-items-center d-flex flex-column flex-wrap">
            <div className="container">
                <div className="row">
                    {/* Company Info */}
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5 className="mb-3">Deskripsi</h5>
                        <p className="text-white">Temukan penawaran terbaik untuk mobil Daihatsu di Jakarta! Daihatsu Citra Jakarta menawarkan berbagai model, promo menarik, dan layanan terbaik untuk memenuhi kebutuhan kendaraan Anda.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5 className="mb-3">Tautan Cepat</h5>
                        <ul className="list-unstyled">
                            <Nav.Link as={NavLink} to="/" exact>Beranda</Nav.Link>
                            <Nav.Link as={NavLink} to="/brosur" exact>Brosur</Nav.Link>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-3 mb-4 mb-md-0">
                        <h5 className="mb-3">Kontak Kami</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <FaMapMarkerAlt /> Business St, City, Country
                            </li>
                            <li className="mb-2">
                                <FaPhone /> +62 882-1004-7775
                            </li>
                            <li className="mb-2">
                                <FaMailBulk /> info@daihatsucitrajakarta.com
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3">
                        <h5 className="mb-3">Ikuti Kami</h5>
                        <div className="social-icons">
                            <a href="#" target='_blank' className="text-white me-3"><FaFacebook size={24} /></a>
                            <a href="#" target='_blank' className="text-white me-3"><FaInstagram size={24} /></a>
                            <a href="https://wa.me/6288210047775" target='_blank' className="text-white"><FaWhatsapp size={24} /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-top border-secondary pt-4 mt-4 text-center foo">
                    <p className="text-white">&copy; {new Date().getFullYear()} Daihatsu Citra Jakarta. All rights reserved <a href="https://www.facebook.com/feyfry35">@feyDev</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;