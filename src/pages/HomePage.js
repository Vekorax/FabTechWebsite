
import Intro from '../components/Intro';
import { Button, Container } from 'react-bootstrap';
import ReviewItem from '../components/ReviewItem';
import reviewsServices from '../services/reviewsService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

function HomePage({ t }){
    const gaming =  require('../_misc/images/gaming.jpg');
    const job =  require('../_misc/images/job.jpg');
    const editing =  require('../_misc/images/editing.jpg');
    const program =  require('../_misc/images/program.jpg');
    const siteweb =  require('../_misc/images/website.png');
    const computer =  require('../_misc/images/computer.jpg');
    const fabrice =  require('../_misc/images/fabrice.jpg');

    const [review, setReview] = useState([]);
    const [nbOfReviews, setNbOfReviews] = useState([]);
    
    useEffect(()=>{
        reviewsServices.getReviewsById(1).then(
            (data) => setReview(data)
        );
        reviewsServices.getNumberOfReviews().then(
            (data) => setNbOfReviews(data)
        );
    }, []);

    let navigate = useNavigate();
    const routeChange = (path) =>{ 
        navigate(path);
    }

    let reviewItem = 
        <ReviewItem review={review} className="reviewHome"></ReviewItem>

    const nextReview = () => {
        let futureId = review.id;
        if(nbOfReviews === review.id) {
            futureId = 1;
        } else {
            futureId++;
        } 
        reviewItem = setReviewItem(futureId);
    }

    const previousReview = () => {
        let futureId = review.id;
        if(review.id === 1) {
            futureId = nbOfReviews;
        } else {
            futureId--;
        }
        reviewItem = setReviewItem(futureId);
    }

    function setReviewItem(id) {
        reviewsServices.getReviewsById(id).then(
            (data) => setReview(data)
        );
        return <ReviewItem review={review} className="reviewHome"></ReviewItem>
    }

    return(
        <div>
            <Intro></Intro>
                <div className='intro-block'>
                <Container>
                <h1>{t('title-first-block-home')}</h1>
                    <p id="intro-block-first">{t('desc-first-block-home')}</p>
                    <Button onClick={() => routeChange("/contactme")} className='btn-green padding-btn'>{t('contactme')}</Button>
                    <div id="pc-use-representation">
                        <img src={gaming} alt='img-job'/>
                        <img src={job} alt='img-job'/>
                        <img src={editing} alt='img-job'/>
                        <img src={program} alt='img-job'/>
                    </div>
                </Container>
                </div>
                <div className='bg-dif' id="afterIntro">
                   <Container className="block">
                    <img src={siteweb} alt='img-job'/>
                    <div>
                        <h1>{t('title-sec-block-home')}</h1>
                        <p>Un site web est un outils maintenant essentiels pour une entreprise de nos jours. Il est important de bien se représenter en ligne afin de pouvoir croitre sur le marché et ainsi que se mettre en avant. Un site web vous permet de mieux vous faire connaitre et amener une clientèle nouvelle.</p>
                        <Button onClick={() => routeChange("/services")} className='btn-green padding-btn'>Services</Button>
                    </div>
                    </Container>
                </div>

                <div>
                   <Container className="block block-pc">
                    <div>
                        <h1>Ordinateur</h1>
                        <p>Un ordinateur est unu outils de nos jours essentiels que ce sois pour l’école, le travail ouu autre. C’est pour cela qu’il est primordial d’’en avoir un de performant pour ce que vouus avez besoin de faire, mais il n’est pas essentiel de se ruiner pour atteindre cet objectif.</p>
                        <Button onClick={() => routeChange("/builds")} className='btn-green padding-btn'>Inventaire</Button>
                    </div>
                    <img src={computer} alt='img-job'/>
                    </Container>
                </div>
                <div className='bg-dif' id="block-review">
                    <Container>
                        <h1>Avis</h1>
                        <div id="btnAndReview">
                            <Button onClick={previousReview} className='btn-green padding-btn btn-review'>←</Button>
                            {reviewItem}
                            <Button onClick={nextReview} className='btn-green padding-btn btn-review'>→</Button>
                        </div>
                        <Button onClick={() => routeChange("/reviews")} className='btn-green padding-btn'>Voir Plus</Button>
                    </Container>
                </div>

                <div>
                   <Container className="block block-pc" id="blockPres">
                    <div>
                        <h1>Fabrice Morin</h1>
                        <h2>Fondateur de Fab's PC</h2>
                        <p id="presentationText">
                            Bonjours / Bonsoir,<br/>
                            Je m’appel Fabrice Morin, j’ai 21 ans et je suis le fondateur de Fab’s PC. Je suis uun passioné d’informatique ainsi quue de lla programmation. J’ai commencer à jouer dans des ordinateurs vers l’age de 12 ans et ça en est devenu unue passion. <br/>
                            <br/>
                            Je voulais toujours améliorer les performance, découvrir de nouvel horizon et essayer des nouveau produits. J’ai eu plusieurs ordinateurs auu fils du temps, et cela m’as permis de découvrir plusieurs astuces pour améliorer et assemblé ett même réparer des ordinateur. <br/>
                            <br/>
                            Vers mes 14 ans, j’avais un ordinateurs assez puissants pour jouuer au jeux que je voulais et utiliser des logiciels plus gourmands comme phootoshop et sony vegas. J’ai appris à utiliser ses logiciels, car j’ai toujoours voulu touut apprendre au niveau de l’informatique. C’est aussi à cet age la quue j’ai commencer la programation. <br/>
                            <br/>
                            J’ai commencer sur minecraft pour faire des plugins pour ajouuter de nouvelle fonctionalité  au jeux. Par la suiute j’ai voulu explorer ce domaine et j’ai commencer à faire des petits logiciels, des site web, des jeux vidéos, etc. Ce que j’ai préféré par dessus tout, c’est la programation web, car ça réunie plusieurs domaine de la programmation en un seul. J’ai la possibilité de tout faire avec un site web et ce qui me passionne le plus.<br/>
                            <br/>
                            Grace a mes années d’expérience, je peux fournir un résultat à vos attente. Je ne veux pas tourner les coins rond comme le font pluusieurs, je veux fournir de la qualité, car c’est un domaine quui me passionne.
                        </p>
                    </div>
                    <img src={fabrice} alt='img-job'/>
                    </Container>
                </div>

        </div>
    );
}

export default withNamespaces()(HomePage);