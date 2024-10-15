import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './PromoSpesial.css';
import promoData from './promoData.json';

const PromoSpesial = () => {
    const [promos, setPromos] = useState([]);

    useEffect(() => {
        setPromos(promoData.promos);
    }, []);

    const CustomPrevIcon = <ChevronLeft size={40} className="carousel-arrow" />;
    const CustomNextIcon = <ChevronRight size={40} className="carousel-arrow" />;

    return (
        <Container className="my-5 promo-container">
            <Row className="text-center mb-4">
                <Col>
                    <h2>Temukan Mobil Impianmu di Daihatsu Jakarta</h2>
                    <p>Dapatkan penawaran terbaik untuk mobil Daihatsu favorit Anda!</p>
                </Col>
            </Row>
            <Carousel
                prevIcon={CustomPrevIcon}
                nextIcon={CustomNextIcon}
                interval={3000}
            >
                {[...Array(Math.ceil(promos.length / 3))].map((_, index) => (
                    <Carousel.Item key={index}>
                        <Row>
                            {promos.slice(index * 3, (index + 1) * 3).map((promo, idx) => (
                                <Col key={idx} lg={4} md={6} sm={12} className="mb-4">
                                    <Card className="promo-card h-100">
                                        <div className="card-img-wrapper">
                                            <Card.Img variant="top" src={promo.image} />
                                        </div>
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title>{promo.title}</Card.Title>
                                            <Card.Text>{promo.description}</Card.Text>
                                            <Card.Text className="mt-auto">
                                                <strong>{promo.price}</strong>
                                            </Card.Text>
                                            <Card.Text className="specs">
                                                {promo.specs}
                                            </Card.Text>
                                            <Button href={promo.link} variant="danger" className="mt-2">Dapatkan Penawaran</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default PromoSpesial;