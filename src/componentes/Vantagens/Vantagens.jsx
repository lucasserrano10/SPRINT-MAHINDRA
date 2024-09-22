import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import velocidade from '../../assets/img/case/velocidade.png'
import sustentabilidade from '../../assets/img/case/sustentabilidade.jpg'
import tech from '../../assets/img/case/tecnologia.png'
import desempenho from '../../assets/img/case/desempenho.webp'
import futuro from '../../assets/img/case/futuro.jpg'
import inovacao from '../../assets/img/case/inovação.png'

const CarCard = ({ title, text, imgSrc }) => {
  return (
    <Col lg={4} md={6} sm={12} className="my-5">
      <Card className="text-center p-4">
        <Card.Img variant="top" src={imgSrc} alt={title} className="icon" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">Saber Mais</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Vantagens = () => {

const cardsData = [
    { title: "Velocidade dos Carros", text: "Os carros de Fórmula E são capazes de atingir velocidades impressionantes, proporcionando corridas emocionantes e desafiadoras.", imgSrc: velocidade},
    { title: "Tecnologia Avançada", text: "A Fórmula E é uma competição que testa o limite da tecnologia com veículos movidos a energia elétrica.", imgSrc: tech  },
    { title: "Sustentabilidade", text: "As corridas são realizadas em locais urbanos e promovem a sustentabilidade, além de mostrar inovações no uso de energia limpa.", imgSrc: sustentabilidade },
    { title: "Desempenho Elétrico", text: "Os carros elétricos da Fórmula E têm uma alta eficiência de desempenho, com baterias potentes.", imgSrc:  desempenho},
    { title: "Inovação em Pista Igualitária", text: "As pistas da Fórmula E são montadas em ruas de cidades, desafiando a engenharia e a inovação.", imgSrc: inovacao},
    { title: "Futuro da Mobilidade", text: "A Fórmula E aponta para o futuro da mobilidade elétrica, promovendo veículos ecológicos para as cidades.", imgSrc: futuro },
];

  return (
    <Container>
    <div className='div-subtitle'>
        <p className='fs-2 text-center text-black mt-5 mb-0 p-4 bold'><strong>Conheça mais sobre a Formula E</strong></p>
        <p className='fs-2 text-center text-black pb-5'>Explore os principais aspectos dessa categoria inovadora do automobilismo.</p>
    </div>
      <Row>
        {cardsData.map((card, index) => (
          <CarCard key={index} title={card.title} text={card.text} imgSrc={card.imgSrc} />
        ))}
      </Row>
    </Container>
  );
};

export default Vantagens;
