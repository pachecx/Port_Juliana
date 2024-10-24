import React, { useState } from "react";
import { Link } from "react-router-dom";
import fundo from "../../assets/11-removebg-preview.png";
import "./styles.css";

import imagem1 from "../../assets/HJKH.png"; // Substitua pelos caminhos das suas imagens
import imagem2 from "../../assets/1111.png";
import imagem3 from "../../assets/EEEE.png";
import imagem4 from "../../assets/EEEEWW.png";
import imagem5 from "../../assets/EEEEE.png";
import imagem6 from "../../assets/EEEEEE.png";
import imagem7 from "../../assets/22.png";
import imagem8 from "../../assets/DDD.png";
import imagem9 from "../../assets/3333333333333333.png";
import imagem10 from "../../assets/DDGGGG.png";

const Paradidatico = () => {
  const [imagemModal, setImagemModal] = useState(null); // Armazena a imagem a ser exibida no modal
  const [pdfLink, setPdfLink] = useState(""); // Armazena o link do PDF

  const handleAbrir = (imagem, pdf) => {
    setImagemModal(imagem);
    setPdfLink(pdf); // Define o link do PDF correspondente
  };

  const handleFechar = () => {
    setImagemModal(null);
    setPdfLink(""); // Limpa o estado do PDF ao fechar o modal
  };

  return (
    <div className="geral">
      <div className={imagemModal ? "desfoqueOn" : "listaFoto"}>
        <div className="divTitulo">
          <h2>Paradidáticos</h2>
        </div>
        <div className="divListas">
          <ul>
            <li>
              <Link
                onClick={() =>
                  handleAbrir(
                    imagem1,
                    "https://drive.google.com/file/d/1R-dZmuiWVDDKdXUiWWAq99nn6SU_Dlm_/view?usp=sharing"
                  )
                }
              >
                <span>01.</span> Conhecendo o Maranhão – <span>Geografia.</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() =>
                  handleAbrir(
                    imagem2,
                    "https://drive.google.com/file/d/1R-dZmuiWVDDKdXUiWWAq99nn6SU_Dlm_/view?usp=sharing"
                  )
                }
              >
                <span>02.</span> Uno Mitológico –{" "}
                <span>Filosofia e História.</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() =>
                  handleAbrir(
                    imagem3,
                    "https://drive.google.com/file/d/1R-dZmuiWVDDKdXUiWWAq99nn6SU_Dlm_/view?usp=sharing"
                  )
                }
              >
                <span>03.</span> UNO - Sistema solar –{" "}
                <span>Ciências e Geografia.</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() =>
                  handleAbrir(
                    imagem4,
                    "https://drive.google.com/file/d/1R-dZmuiWVDDKdXUiWWAq99nn6SU_Dlm_/view?usp=sharing"
                  )
                }
              >
                <span>04.</span> Jogo da Memória: Filósofos –{" "}
                <span>Filosofia.</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() =>
                  handleAbrir(
                    imagem5,
                    "https://drive.google.com/file/d/1R-dZmuiWVDDKdXUiWWAq99nn6SU_Dlm_/view?usp=sharing"
                  )
                }
              >
                <span>05.</span> Jogo da Memória: Povos Indígenas do Brasil –{" "}
                <span>História.</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() =>
                  handleAbrir(
                    imagem6,
                    "https://drive.google.com/file/d/1R-dZmuiWVDDKdXUiWWAq99nn6SU_Dlm_/view?usp=sharing"
                  )
                }
              >
                <span>06.</span> Jogo de Trilha: Guerras mundiais –{" "}
                <span>História.</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() =>
                  handleAbrir(
                    imagem7,
                    "https://drive.google.com/file/d/1R-dZmuiWVDDKdXUiWWAq99nn6SU_Dlm_/view?usp=sharing"
                  )
                }
              >
                <span>07.</span> Uno República Velha (1889-1930) –{" "}
                <span>História.</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() =>
                  handleAbrir(
                    imagem8,
                    "https://drive.google.com/file/d/1k7_EkQTooBXLRBOIkcg6V_JwIYdDagzT/view?usp=sharing"
                  )
                }
              >
                <span>08.</span> Uno Brasil – <span>Geografia.</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() =>
                  handleAbrir(
                    imagem9,
                    "https://drive.google.com/file/d/1R-dZmuiWVDDKdXUiWWAq99nn6SU_Dlm_/view?usp=sharing"
                  )
                }
              >
                <span>09.</span> Uno América Latina – <span>Geografia.</span>
              </Link>
            </li>

            <li>
              <Link
                onClick={() =>
                  handleAbrir(
                    imagem10,
                    "https://drive.google.com/file/d/1qmikmKDkSJ_Ug3laEVj8ROOudNHa_FdY/view?usp=sharing"
                  )
                }
              >
                <span>10.</span> Jogos de investigação histórica –{" "}
                <span>História.</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="desk">{/* <img src={fundo} alt="" />  */}</div>
      <img className="fundo" src={fundo} />

      {/* Renderização condicional do modal baseado no estado imagemModal */}
      {imagemModal && (
        <div className="Modal" onClick={handleFechar}>
          <div className="cardModal">
            <button className="btnImg">
              <a
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="downloadLink"
              >
                <img src={imagemModal} alt="Conteúdo do Modal" />
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paradidatico;
