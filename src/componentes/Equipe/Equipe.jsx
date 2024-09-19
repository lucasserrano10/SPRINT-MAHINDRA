import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pilotoUm from '../../assets/img/equipe/corredor1-mahindra.png';
import pilotoDois from '../../assets/img/equipe/corredor2-mahindra.png';
import instagram from '../../assets/img/case/instagram-3.png';
import facebook from '../../assets/img/case/facebook.png';
import '../Equipe/Equipe.css';

function Equipe() {
const pilotos = [
    {
    nome: "NYCK DE VRIES",
    imagem: pilotoUm,
    descricao: "A promessa de Nyck ficou evidente desde cedo, com uma série de campeonatos nacionais, continentais e internacionais de kart – incluindo dois títulos mundiais de kart – antes de se graduar para monolugares em 2012.",
      instagram: "https://www.instagram.com/nyckdevries", // Adiciona o link para o Instagram
      facebook: "https://www.facebook.com/nyckdevries",   // Adiciona o link para o Facebook
    },
    {
    nome: "EDOARDO MORTARA",
    imagem: pilotoDois,
    descricao: "A carreira de Edoardo nos monolugares começou em 2006, com uma campanha dupla na Itália e na Europa na Fórmula Renault, conquistando o título de Rookie na primeira...",
      instagram: "https://www.instagram.com/edomortara", // Link para Instagram
      facebook: "https://www.facebook.com/edomortara",   // Link para Facebook
    },
];

return (
    <>
    <div className='div-subtitle'>
        <p className='fs-2 text-center text-black mt-5 mb-5 p-4 bold'><strong>Esse é a Equipe Mahindra Race !</strong></p>
    </div>
      <Row xs={1} md={2} className="g-4 card-div">
        {pilotos.map((piloto, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={piloto.imagem} alt={piloto.nome} />
              <Card.Body>
                <Card.Title>{piloto.nome}</Card.Title>
                <Card.Text>{piloto.descricao}</Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                {}
                <a href={piloto.instagram} target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" className="social-icon" />
                </a>
                {}
                <a href={piloto.facebook} target="_blank" rel="noopener noreferrer" className="ml-3">
                  <img src={facebook} alt="Facebook" className="social-icon" />
                </a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Equipe;
