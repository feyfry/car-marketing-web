import { Container, Row, Col } from 'react-bootstrap';
import './TipsBerkendara.css';

const TipsBerkendara = () => {
    const tips = [
        "Selalu gunakan sabuk pengaman saat berkendara.",
        "Periksa tekanan ban dan kondisi rem secara berkala.",
        "Hindari mengemudi dalam keadaan lelah.",
        "Jaga jarak aman dengan kendaraan di depan.",
        "Patuhi rambu lalu lintas dan kecepatan yang ditetapkan."
    ];

    return (
        <section id='tips'>
            <Container className="my-5">
                <Row className="text-center">
                    <Col>
                        <h2>Tips Berkendara Aman</h2>
                        <p>Beberapa tips untuk memastikan perjalanan Anda aman dan nyaman.</p>
                    </Col>
                </Row>
                <Row>
                    {tips.map((tip, index) => (
                        <Col md={4} key={index} className="my-2">
                            <div className="tip-item">
                                <p>{tip}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default TipsBerkendara;