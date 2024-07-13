import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReviewList from "../components/ReviewList";

function ReviewsPage() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = "/services";
        navigate(path);
    }
    return(
        <div>
            <div className="intro intro-other">
                <Container>
                    <h1>Avis</h1>
                    <p>Avis de clients qui ont utilisé mes services.</p>
                    <Button onClick={changeRoute} className="btn-green padding-btn">Services</Button>
                </Container>
            </div>

            <div>
                <ReviewList className="reviewHome"/>
            </div>
        </div>
    );
}

export default ReviewsPage;