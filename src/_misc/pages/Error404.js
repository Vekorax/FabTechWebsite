import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Error404() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = "/";
        navigate(path);
    }
    return(
        <div className="intro">
            <Container>
                <h1>ERROR 404</h1>
                <p>La page que vous essayer d'acceder n'existe pas.</p>
                <Button onClick={changeRoute} className="btn-green padding-btn">Accueil</Button>
            </Container>
        </div>
    );
}

export default Error404;