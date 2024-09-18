import Carousel from 'react-bootstrap/Carousel';
import ImagemUm from '../../assets/img/carrousel/formulae-ia.png';
import ImagemDois from '../../assets/img/carrousel/formulae-ia2.png';
import ImagemTres from '../../assets/img/carrousel/formulae-ia3.png';
import '../Home/Home.css'

function Home() {
    return (
        <>
        <div className='home'>
        <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ImagemUm}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text'>Fórmula E: A Revolução Elétrica Começa</h3>
                        <p className='text'>A Fórmula E está transformando as corridas com tecnologia elétrica de ponta, oferecendo velocidade e sustentabilidade em cada corrida. Descubra como o futuro do automobilismo está aqui!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ImagemDois}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text'> Velocidade e Sustentabilidade em Cada Volta</h3>
                        <p className='text'>Com carros elétricos de alta performance, a Fórmula E combina velocidade e responsabilidade ambiental, mostrando que o futuro do automobilismo é verde e rápido.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ImagemTres}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text'>Impacto Global: A Fórmula E em Ação</h3>
                        <p className='text'>
                        Com corridas em cidades icônicas, a Fórmula E não só acelera em velocidade, mas também promove um futuro mais limpo e sustentável para o automobilismo global.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    );
}

export default Home;
