import '../Contato/Contato.css';
import React, { useState } from "react";
import localizacao from '../../assets/img/case/location.png';
import telefone from '../../assets/img/case/telefone.png';
import email from '../../assets/img/case/mail.png';
import atendimento from '../../assets/img/case/atendimento.png';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Salvar os dados no localStorage
    localStorage.setItem('contato', JSON.stringify(formData));

    // Limpar os campos do formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: ""
    });

    console.log(formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <section className="container-fluid bg-red-2 mt-5" id="contato">
      <div className="container py-5">
        <h4 className="sub-title">Contato</h4>
        <h3 className="text-center my-title mb-4">Veja Como Você Pode Falar Conosco</h3>
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 my-4 text-center">
                <p>
                  <i className="icon-contato">
                    <img src={localizacao} alt="location" />
                  </i>
                </p>
                <h3>Endereço</h3>
                <p>Av. Paulista, 1000 <br /> São Paulo - SP</p>
              </div>
              <div className="col-lg-6 my-4 text-center">
                <p>
                  <i className="icon-contato">
                    <img src={telefone} alt="telefone" />
                  </i>
                </p>
                <h3>Telefone</h3>
                <p>(11)93252-9009 <br /> (11)95341-2083</p>
              </div>
              <div className="col-lg-6 my-4 text-center">
                <i className="icon-contato">
                  <img src={email} alt="email" />
                </i>
                <h3>Email</h3>
                <p>codetech.dev@gmail.com</p>
              </div>
              <div className="col-lg-6 my-4 text-center">
                <i className="icon-contato">
                  <img src={atendimento} alt="atendimento-sac" />
                </i>
                <h3>Atendimento</h3>
                <p>Segunda-Sexta <br /> 8:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="row text-start">
                <div className="col-lg-6 my-2">
                  <label htmlFor="nome" className="form-label">Seu Nome:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu Nome"
                    required
                  />
                </div>
                <div className="col-lg-6 my-2">
                  <label htmlFor="email" className="form-label">Seu E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div className="col-lg-6 my-2">
                  <label htmlFor="telefone" className="form-label">Telefone:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="Seu Telefone"
                    required
                  />
                </div>
                <div className="col-lg-6 my-2">
                  <label htmlFor="assunto" className="form-label">Assunto:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    placeholder="Assunto"
                    required
                  />
                </div>
                <div className="col-lg-12 my-2">
                  <label htmlFor="mensagem" className="form-label">Mensagem:</label>
                  <textarea
                    name="mensagem"
                    id="mensagem"
                    className="form-control"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Sua mensagem"
                    required
                  ></textarea>
                </div>
                <div className="col-lg-12 my-2 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
