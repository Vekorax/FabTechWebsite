import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ContactMe() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = "/services";
        navigate(path);
    }
    return(
        <div>
            <div className="intro intro-other">
                <Container>
                    <h1>Me Contacter</h1>
                    <p>Les différentes manière de me contacter.</p>
                    <Button onClick={changeRoute} className="btn-green padding-btn">Services</Button>
                </Container>
            </div>

            
        </div>
    );
}

export default ContactMe;