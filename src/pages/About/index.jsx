import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import iconeGmail from "../../assets/gmail.png";

import img from "../../assets/vvvvv.png";
import "./styles.css";

import { SiGmail, SiWhatsapp, SiInstagram } from "react-icons/si";
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="geralAbout">
      <div className="divImg">
        <img src={img} />
      </div>
      <div className="text">
        <p className="textP">
          Professora de <strong> História </strong>da Educação básica.
        </p>

        <ul>
          <li>
            <p>
              Especialista em{" "}
              <span>História das loterias no Maranhão do século XIX</span>.
            </p>
          </li>
          <li>
            <p>
              Pós-graduada em Docência e Gestão no ensino superior - Uninassau.
            </p>
          </li>
          <li>
            <p>Pós-graduada em educação de jovens e adultos - Uniasselvi.</p>
          </li>
          <li>
            <p>
              Desenvolvedora de <strong>jogos educativos</strong> abordando
              diversas temáticas.
            </p>
          </li>
        </ul>
      </div>
      <div className="divContatos">
        <h3>Contatos</h3>
        <div className="divContatosIcons">
          <Link to={'mailto:julianasbarrs@gmail.com'} target="_blank">
            <SiGmail className="icon" />
          </Link>

          <Link to={'https://api.whatsapp.com/send?phone=5598982283717'} target="_blank">
            <SiWhatsapp className="icon" />
          </Link>
          <Link to={'https://ig.me/m/julianasbarrs'} target="_blank">
            <SiInstagram className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
