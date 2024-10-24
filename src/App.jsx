import imgPapel from "../src/assets/ggg.png";
import imgPerfil from "../src/assets/DD-removebg-preview.png";
import roda from "../src/assets/FFF.png";

import fundo from "../src/assets/11-removebg-preview.png";
import novaimg from "../src/assets/DD-preview.png";

import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="pagina1">
        <div className="titulo">
          <h3>Desenvolvedora de materiais paradidáticos</h3>
          <h2>JULIANA BARROS</h2>
        </div>
        <nav className="navegacao">
          <ul>
            <li>
              <Link className="para" to={"/paradidatico"}>
                <img className="imgLinks" src={imgPapel} />
                Paradidático
              </Link>
            </li>
            <li>
              <Link to={'/about'}>
                <img className="imgPerfil" src={novaimg} />

                <div className="aboutDiv">
                  <p className="about">ABOUT</p>
                  <div className="divLineMe">
                    <div className="line" />
                    <p className="me">Me</p>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/experiencia'}>
                <img className="imgLinks" src={roda} />
                Experiência profissional
              </Link>
            </li>
          </ul>
        </nav>
        <div className="desk" />
        <img className="fundo" src={fundo} />
      </div>
    </div>
  );
}

export default App;
