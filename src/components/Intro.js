import { Button, Container } from "react-bootstrap";
import { withNamespaces } from 'react-i18next';


function Intro({t}) {
    return (
        <div className="intro">
            <Container>
                <div>
                    <h1>Fab's PC</h1>
                    <p>{t('desc-header-home')}</p>
                    <Button className="btn-green padding-btn">Fiveer</Button>
                </div>
            </Container>
        </div>
    );
}

export default withNamespaces()(Intro);
