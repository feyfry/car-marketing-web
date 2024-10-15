
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <img src="/assets/img/daihatsu-logo-by-kedai-website.webp" alt="Daihatsu Logo" width="150" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-auto m-3 pe-4 nav-menu">
                        <Nav.Link as={NavLink} to="/" exact>Beranda</Nav.Link>
                        <Nav.Link as={NavLink} to="/brosur">Brosur</Nav.Link>
                        <NavDropdown title={
                            <span className="dropdown-title">
                                Model Daihatsu
                                <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">Promo</span>
                            </span>} id="daihatsu-dropdown">
                            <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=6288210047775&text=Hai%20Automotive%20Service!%20Saya%20ingin%20tahu%20info%20tentang%20PAKET%20PROMO%20*DAIHATSU%20AYLA*%20bulan%20ini.%20Bisa%20dibantu%20dengan%20detailnya?">
                                Daihatsu Ayla
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=6288210047775&text=Hai%20Automotive%20Service!%20Saya%20ingin%20tahu%20info%20tentang%20PAKET%20PROMO%20*DAIHATSU%20SIGRA*%20bulan%20ini.%20Bisa%20dibantu%20dengan%20detailnya?">
                                Daihatsu Sigra
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=6288210047775&text=Hai%20Automotive%20Service!%20Saya%20ingin%20tahu%20info%20tentang%20PAKET%20PROMO%20*DAIHATSU%20XENIA*%20bulan%20ini.%20Bisa%20dibantu%20dengan%20detailnya?">
                                Daihatsu Xenia
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=6288210047775&text=Hai%20Automotive%20Service!%20Saya%20ingin%20tahu%20info%20tentang%20PAKET%20PROMO%20*DAIHATSU%20TERIOS*%20bulan%20ini.%20Bisa%20dibantu%20dengan%20detailnya?">
                                Daihatsu Terios
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=6288210047775&text=Hai%20Automotive%20Service!%20Saya%20ingin%20tahu%20info%20tentang%20PAKET%20PROMO%20*DAIHATSU%20ROCKY*%20bulan%20ini.%20Bisa%20dibantu%20dengan%20detailnya?">
                                Daihatsu Rocky
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=6288210047775&text=Hai%20Automotive%20Service!%20Saya%20ingin%20tahu%20info%20tentang%20PAKET%20PROMO%20*DAIHATSU%20SIRION*%20bulan%20ini.%20Bisa%20dibantu%20dengan%20detailnya?">
                                Daihatsu Sirion
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=6288210047775&text=Hai%20Automotive%20Service!%20Saya%20ingin%20tahu%20info%20tentang%20PAKET%20PROMO%20*DAIHATSU%20LUXIO*%20bulan%20ini.%20Bisa%20dibantu%20dengan%20detailnya?">
                                Daihatsu Luxio
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=6288210047775&text=Hai%20Automotive%20Service!%20Saya%20ingin%20tahu%20info%20tentang%20PAKET%20PROMO%20*DAIHATSU%20GRAN%20MAX%20BV*%20bulan%20ini.%20Bisa%20dibantu%20dengan%20detailnya?">
                                Daihatsu Gran Max BV
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=6288210047775&text=Hai%20Automotive%20Service!%20Saya%20ingin%20tahu%20info%20tentang%20PAKET%20PROMO%20*DAIHATSU%20GRAN%20MAX%20MB*%20bulan%20ini.%20Bisa%20dibantu%20dengan%20detailnya?">
                                Daihatsu Gran Max MB
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://api.whatsapp.com/send/?phone=6288210047775&text=Hai%20Automotive%20Service!%20Saya%20ingin%20tahu%20info%20tentang%20PAKET%20PROMO%20*DAIHATSU%20GRAN%20MAX%20PU*%20bulan%20ini.%20Bisa%20dibantu%20dengan%20detailnya?">
                                Daihatsu Gran Max PU
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button href="https://wa.me/6288210047775" variant="outline-danger">Hubungi</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;