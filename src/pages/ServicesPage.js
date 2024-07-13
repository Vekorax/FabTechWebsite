import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

function ServicesPage() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = "/contactme";
        navigate(path);
    }
    return(
        <div>
            <div className="intro intro-other">
                <Container>
                    <h1>Services</h1>
                    <p>Mes services et mes prix. Si cela vous interesse, veuillez me contacter.</p>
                    <Button onClick={changeRoute} className="btn-green padding-btn">Me Contacter</Button>
                </Container>
            </div>
            <Container className="services">
                <div>
                    <div className="service-block">
                        <h1>Montage d'ordinateur</h1>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Montage d'ordinateur <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Montage d'ordinateur <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Installation et activation de windows <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Aide choix de pièce <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Configuation sur mesure <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Optimisation d'ordinateur <br/></li>
                        </ul>
                        <p>50 - 80$</p>
                    </div>
                    <div className="service-block">
                        <h1>Optimisation d'ordinateur</h1>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Installation nouveau disque dur <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Clonage de disque dur <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Paramètre Windows plus optimiser <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Vider le cache des logiciel <br/></li>
                        </ul>
                        <p>35$ - 100$</p>
                    </div>
                </div>
                <div>
                    <div className="service-block">
                        <h1>Conception de site web basique</h1>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Site web fonctionnel <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Jusqu'à 5 pages <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Liaison avec base de donnée <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Installation sur serveur <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Design fait sur mesure <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Système de mail / communication simple <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Système de sécutiré <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Configuration en HTTPS <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> support de 6 mois inclus <br/></li>
                        </ul>
                        <p>150$ - 200$</p>
                    </div>
                    <div className="service-block">
                        <h1>Conception de site web avancer</h1>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Site web fonctionnel <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> nombre de pages illimité <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Liaison avec base de donnée <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Installation sur serveur <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Design fait sur mesure <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Système de mail / communication simple <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Système de sécutiré <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Configuration en HTTPS <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Page administrateur <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Système d'authentification <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Page utilisateur <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> Système de rang par utilisateur <br/></li>
                            <li> <FontAwesomeIcon icon={faCircleCheck} /> support de 1 ans inclus <br/></li>
                        </ul>
                        <p>250$ - 350$</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ServicesPage;