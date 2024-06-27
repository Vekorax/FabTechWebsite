
import Intro from '../components/Intro';
import { Button, Container } from 'react-bootstrap';

function HomePage(){
    const gaming =  require('../_misc/images/gaming.jpg');
    const job =  require('../_misc/images/job.jpg');
    const editing =  require('../_misc/images/editing.jpg');
    const program =  require('../_misc/images/program.jpg');
    const siteweb =  require('../_misc/images/website.png');
    return(
        <div>
            <Intro></Intro>
                <div className='intro-block'>
                <Container>
                <h1>Vos besoin en terme d'ordinateur</h1>
                    <p id="intro-block-first">Peux importe vos besoin ou vos désirs, vous pourez toujours trouver un ordinateurs qui représente ce que vous chercher.</p>
                    <Button className='btn-green padding-btn'>Me Contacter</Button>
                    <div id="pc-use-representation">
                        <img src={gaming} alt='img-job'/>
                        <img src={job} alt='img-job'/>
                        <img src={editing} alt='img-job'/>
                        <img src={program} alt='img-job'/>
                    </div>
                </Container>
                </div>
                <div className='bg-dif'>
                   <Container className="block">
                    <img src={siteweb} alt='img-job'/>
                    <div>
                        <h1>Conception web</h1>
                        <p>Un site web est un outils maintenant essentiels pour une entreprise de nos jours. Il est important de bien se représenter en ligne afin de pouvoir croitre sur le marché et ainsi que se mettre en avant. Un site web vous permet de mieux vous faire connaitre et amener une clientèle nouvelle.</p>
                        <Button className='btn-green padding-btn'>Services</Button>
                    </div>
                    </Container>
                </div>

                <div>
                   <Container className="block" id="block-pc">
                    <div>
                        <h1>Ordinateur</h1>
                        <p>Un ordinateur est unu outils de nos jours essentiels que ce sois pour l’école, le travail ouu autre. C’est pour cela qu’il est primordial d’’en avoir un de performant pour ce que vouus avez besoin de faire, mais il n’est pas essentiel de se ruiner pour atteindre cet objectif.</p>
                        <Button className='btn-green padding-btn'>Inventaire</Button>
                    </div>
                    <img src={siteweb} alt='img-job'/>
                    </Container>
                </div>
        </div>
    );
}

export default HomePage;