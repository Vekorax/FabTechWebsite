import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BuildsPage() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = "/reviews";
        navigate(path);
    }
    return(
        <div>
            <div className="intro intro-other">
                <Container>
                    <h1>Inventaires</h1>
                    <p>Inventaire des ordinateurs en vente en ce moment.</p>
                    <Button onClick={changeRoute} className="btn-green padding-btn">Avis</Button>
                </Container>
            </div>
        </div>
    );
}

export default BuildsPage;