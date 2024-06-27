import { Button, Container } from "react-bootstrap";


function Intro() {
    return (
        <div id="intro">
            <Container>
                <div>
                    <h1>Fab Tech</h1>
                    <p>Assemblement / optimisation d’ordinateur et conception de site web</p>
                    <Button className="btn-green padding-btn">Fiveer</Button>
                </div>
            </Container>
        </div>
    );
}

export default Intro;
