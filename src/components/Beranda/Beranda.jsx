import { Carousel, Container, Button } from 'react-bootstrap';
import PromoSpesial from '../PromoSpesial/PromoSpesial';
import TipsBerkendara from '../TipsBerkendara/TipsBerkendara';
import DpKendaraan from '../DpKendaraan/DpKendaraan';
import EmbedMaps from '../EmbedMaps/EmbedMaps';
import './Beranda.css';

const Beranda = () => {
    return (
        <>
            {/* Carousel */}
            <Container fluid className="p-0">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/ayla-by-kedai-website-1-600x400 (1).jpg"
                            alt="First slide"
                        />
                        <div className="carousel-overlay" />
                        <Carousel.Caption>
                            <h3>Daihatsu All New Ayla</h3>
                            <p>Mobil LCGC terbaik dengan harga terjangkau. Dapatkan sekarang!</p>
                            <Button href="https://api.whatsapp.com/send/?phone=6288210047775&text=Halo%20Automotive%20Service%20Sales%20*DAIHATSU*%20Saya%20tertarik%20dengan%20*DAIHATSU%20ALL%20NEW%20AYLA*" variant="danger">Hubungi</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/terios-by-kedai-website-1.jpg"
                            alt="Second slide"
                        />
                        <div className="carousel-overlay" />
                        <Carousel.Caption>
                            <h3>Daihatsu New Terios</h3>
                            <p>Jelajahi petualangan baru bersama Daihatsu Terios.</p>
                            <Button href="https://api.whatsapp.com/send/?phone=6288210047775&text=Halo%20Automotive%20Service%20Sales%20*DAIHATSU*%20Saya%20tertarik%20dengan%20*DAIHATSU%20NEW%20TERIOS*" variant="danger">Hubungi</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/rocky-by-kedai-website-1-600x400.jpg"
                            alt="Third slide"
                        />
                        <div className="carousel-overlay" />
                        <Carousel.Caption>
                            <h3>Daihatsu Rocky</h3>
                            <p>Mobil SUV Compact dengan desain modern dan teknologi canggih.</p>
                            <Button href="https://api.whatsapp.com/send/?phone=6288210047775&text=Halo%20Automotive%20Service%20Sales%20*DAIHATSU*%20Saya%20tertarik%20dengan%20*DAIHATSU%20ROCKY*" variant="danger">Hubungi</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/sirion-by-kedai-website-1-600x400.jpg"
                            alt="Fourth slide"
                        />
                        <div className="carousel-overlay" />
                        <Carousel.Caption>
                            <h3>Daihatsu All New Sirion</h3>
                            <p>Kendaraan hatchback stylish yang cocok untuk perkotaan.</p>
                            <Button href="https://api.whatsapp.com/send/?phone=6288210047775&text=Halo%20Automotive%20Service%20Sales%20*DAIHATSU*%20Saya%20tertarik%20dengan%20*DAIHATSU%20ALL%20NEW%20SIRION*" variant="danger">Hubungi</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/luxio-by-kedai-website-1-600x400.jpg"
                            alt="Fifth slide"
                        />
                        <div className="carousel-overlay" />
                        <Carousel.Caption>
                            <h3>Daihatsu New Luxio</h3>
                            <p>MPV yang cocok untuk keluarga besar, dengan kabin yang luas dan nyaman.</p>
                            <Button href="https://api.whatsapp.com/send/?phone=6288210047775&text=Halo%20Automotive%20Service%20Sales%20*DAIHATSU*%20Saya%20tertarik%20dengan%20*DAIHATSU%20NEW%20LUXIO*" variant="danger">Hubungi</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/granmax-pu-by-kedai-website-600x400.jpg"
                            alt="Sixth slide"
                        />
                        <div className="carousel-overlay" />
                        <Carousel.Caption>
                            <h3>Daihatsu Granmax Pick Up</h3>
                            <p>Solusi kendaraan niaga yang tangguh dan efisien.</p>
                            <Button href="https://api.whatsapp.com/send/?phone=6288210047775&text=Halo%20Automotive%20Service%20Sales%20*DAIHATSU*%20Saya%20tertarik%20dengan%20*DAIHATSU%20GRANMAX%20PICK%20UP*" variant="danger">Hubungi</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/granmax-mb-by-kedai-website-600x400.jpg"
                            alt="Seventh slide"
                        />
                        <div className="carousel-overlay" />
                        <Carousel.Caption>
                            <h3>Daihatsu Granmax Mini Bus</h3>
                            <p>MPV yang multifungsi untuk keperluan bisnis maupun keluarga.</p>
                            <Button href="https://api.whatsapp.com/send/?phone=6288210047775&text=Halo%20Automotive%20Service%20Sales%20*DAIHATSU*%20Saya%20tertarik%20dengan%20*DAIHATSU%20GRANMAX%20MINI%20BUS*" variant="danger">Hubungi</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/xenia-by-kedai-website-1-600x400.jpg"
                            alt="Eighth slide"
                        />
                        <div className="carousel-overlay" />
                        <Carousel.Caption>
                            <h3>Daihatsu All New Xenia</h3>
                            <p>MPV favorit keluarga Indonesia dengan teknologi terbaru.</p>
                            <Button href="https://api.whatsapp.com/send/?phone=6288210047775&text=Halo%20Automotive%20Service%20Sales%20*DAIHATSU*%20Saya%20tertarik%20dengan%20*DAIHATSU%20ALL%20NEW%20XENIA*" variant="danger">Hubungi</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/sigra-by-kedai-website-1-600x400.jpg"
                            alt="Ninth slide"
                        />
                        <div className="carousel-overlay" />
                        <Carousel.Caption>
                            <h3>Daihatsu New Astra Daihatsu Sigra</h3>
                            <p>Mobil keluarga murah dengan kapasitas besar dan irit bahan bakar.</p>
                            <Button href="https://api.whatsapp.com/send/?phone=6288210047775&text=Halo%20Automotive%20Service%20Sales%20*DAIHATSU*%20Saya%20tertarik%20dengan%20*DAIHATSU%20NEW%20ASTRA%20DAIHATSU%20SIGRA*" variant="danger">Hubungi</Button>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/img/promo/2.png"
                            alt="Tenth slide"
                        />
                        <div className="carousel-overlay" />
                        <Carousel.Caption>
                            <h3>Daihatsu Granmax Blindvan</h3>
                            <p>Kendaraan niaga yang ideal untuk pengiriman barang dan logistik.</p>
                            <Button href="https://api.whatsapp.com/send/?phone=6288210047775&text=Halo%20Automotive%20Service%20Sales%20*DAIHATSU*%20Saya%20tertarik%20dengan%20*DAIHATSU%20GRANMAX%20BLINDVAN*" variant="danger">Hubungi</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <PromoSpesial />
            <TipsBerkendara />
            <DpKendaraan />
            <EmbedMaps />
        </>
    );
};

export default Beranda;