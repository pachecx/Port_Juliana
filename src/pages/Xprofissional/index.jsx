import React, { useState } from "react";
import "./styles.css";
import img from "../../assets/FFF.png";
import livro from "../../assets/livro.png";
import { Link } from "react-router-dom";
import imgCine from "../../assets/CRONOGRAMA.jpg";
import imgClube from "../../assets/WhatsApp.jpeg";

const Experiencia = () => {
  const [abrirImg, setAbrirImg] = useState();

  const handleAbrir = (Img) => {
    setAbrirImg(Img);
  };

  const handleFechar = () => {
    setAbrirImg(null); // Fecha o modal ao definir a imagem como null
  };

  return (
    <div className="DivExp">
      <div className="divTextExp">
        <div className="tituloImg">
          <h3>Experiência profissional</h3>
          <img src={img} />
        </div>
        <ul>
          <li>
            <p>
              <strong>Professora de Ciências Humanas</strong> • CE. Educabem
              (jan./2024)
            </p>
          </li>
          <li>
            <p>
              <strong>Professora de História — Realidade Brasileira</strong> •
              Curso Letrados — curso online (2024)
            </p>
          </li>
          <li>
            <p>
              <strong>Assistente de secretaria escolar</strong> • CE. Padre
              Rogério (2023)
            </p>
          </li>
          <li>
            <p>
              <strong>Professora de Ciências Humanas</strong> • CE. Padre
              Rogério (2021-2024)
            </p>
          </li>
          <li>
            <p>
              <strong>Conteudista</strong> • Niduu Education (2019-2021).
            </p>
          </li>
        </ul>
      </div>

      <div className="projetoEducacional">
        <h3>Projetos educacionais</h3>
        <ul>
          <li>
            <Link onClick={() => handleAbrir(imgClube)}>
              <strong>Clube do Livro</strong> — 2022 • CE. Padre Rogério
              (organizadora e mediadora)
            </Link>
          </li>
          <li>
            <Link onClick={() => handleAbrir(imgCine)}>
              <strong>Cineclube</strong> — 2023 • CE. Padre Rogério
              (organizadora e mediadora)
            </Link>
          </li>
        </ul>
      </div>
      <img src={livro} alt="" className="livro" />

      {/* Modal */}
      {abrirImg && (
        <div className="modalContainer" onClick={handleFechar}>
          <div className="modalContent">
            <img
              src={abrirImg}
              alt="Imagem do projeto"
              className="modalImage"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiencia;
