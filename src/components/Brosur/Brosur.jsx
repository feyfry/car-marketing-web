import { Container, Card, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import './Brosur.css';
import Cardimg from '/assets/img/steptodown.com951290.jpg'; // Pastikan path ini benar

const Brosur = () => {
    return (
        <Container>
            <h2>Brosur</h2>
            <Card className="my-3 rounded-5">
                <Card.Img
                    variant="top"
                    src={Cardimg}
                    alt="Daihatsu Ayla"
                    className="card-img-top rounded-5"
                />
                <Card.Body className='text-center justify-content-center d-flex flex-column align-items-center card-overlay rounded-5'>
                    <Card.Title className="card-title">Daihatsu Citra Jakarta</Card.Title>
                    <Card.Text className="card-text">Download brosur terkait informasi mobil.</Card.Text>
                    <Button className='btn btn-danger' href="/brosur/ayla.pdf" download>
                        <FaDownload /> Download Brosur
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Brosur;