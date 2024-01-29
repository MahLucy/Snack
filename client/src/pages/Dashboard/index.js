import Innovation from "../../images/artwork.png";
import icon from "../../images/Help.png";
import QRcode from "../../images/Clip path group.png";
import Carrinho from "../../images/carrinho frente.png";
import CarTras from "../../images/carrinho trás.png";
import rack from "../../images/estante.png";
import ImageList from "../../components/snacks.js";

import SnackTur1 from "../../images/Turbonomic/turbonomic 1.png"
import SnackTur2 from "../../images/Turbonomic/turbonomic 2.png";
import SnackTur3 from "../../images/Turbonomic/turbonomic 3.png";

import SnackIns1 from "../../images/Instana/instana 1.png";
import SnackIns2 from "../../images/Instana/instana 2.png";
import SnackIns3 from "../../images/Instana/instana 3.png";

import SnackMax1 from "../../images/Maximo/maximo 1.png";
import SnackMax2 from "../../images/Maximo/maximo 2.png";
import SnackMax3 from "../../images/Maximo/maximo 3.png";

import SnackTurFinal1 from "../../images/Turbonomic/turbonomic 1.png";
import SnackTurFinal2 from "../../images/Turbonomic/turbonomic 2.png";
import SnackTurFinal3 from "../../images/Turbonomic/turbonomic 3.png";


import {
  Filter,
  Help
} from "@carbon/icons-react";

import "./style.scss";
import axios from "axios";

export default function Cover() {

  return (
    <div id="background">
      <div id="headerInfo">
        <img src={Innovation} style={{ width: '10%' }} />
        <div className="headerPai">
          <div className="headerIrmã">
            <div className="headerTexts">
              <div id="headerText" style={{ zIndex: 2 }}>
                Snack Recommendation
              </div>
              <div id="headerTextsList">
                1. Aponte a câmera do celular para o QR code e acesse a aplicação.<br />
                2. Arraste quantos salgadinhos quiser para dentro do carrinho.<br></br>
                3. No chat, use a câmera do celular e tire uma foto da prateleira.<br></br>
                4. O Snack Recommendation irá contar quantos salgadinhos ainda restaram.{" "}
              </div>
              <div className="headerIcon">
                <Help />
                <div id="headerTextIcon">
                  Toque duas vezes no salgadinho para saber mais sobre as tecnologias IBM.
                </div>
              </div>
            </div>
            <div className="headerQrCode">
              <img src={QRcode} style={{ width: '100%' }} />
            </div>
          </div>
          <div className="carrinho">
            <div id="carrinhoFrente">
              <img id="imgCarrinhoFrente" src={Carrinho} /> </div>
            <div id="carrinhoTras">
              <img id="imgCarrinhoTras" src={CarTras} />
            </div>
          </div>
        </div>
      </div>
      <div className="BackImg">
        <img id="estante" src={rack} alt="Background"></img>
      </div>
      <div className="fileira" style={{ width: "50%", position: "absolute" }}>
        <div id="Snacks1" style={{ width: "50%", position: "absolute" }}>
          <img src={SnackTur1} style={{ width: "10%" }}></img>
          <img src={SnackTur2} style={{ width: "10%" }}></img>
          <img src={SnackTur3} style={{ width: "10%" }}></img>
        </div>
        <div id="Snacks2" style={{ width: "50%", position: "absolute" }}>
          <img src={SnackIns1} style={{ width: "10%" }} ></img>
          <img src={SnackIns2} style={{ width: "10%" }} ></img>
          <img src={SnackIns3} style={{ width: "10%" }} ></img>
        </div>
        <div id="Snacks3" style={{ width: "50%", position: "absolute" }}>
          <img src={SnackMax1} style={{ width: "10%" }} ></img>
          <img src={SnackMax2} style={{ width: "10%" }} ></img>
          <img src={SnackMax3} style={{ width: "10%" }} ></img>
        </div>
        <div id="Snacks4" style={{ width: "50%", position: "absolute" }}>
          <img src={SnackTurFinal1} style={{ width: "10%" }} ></img>
          <img src={SnackTurFinal2} style={{ width: "10%" }} ></img>
          <img src={SnackTurFinal3} style={{ width: "10%" }} ></img>

        </div>


      </div>
      {/* <div id="Snacks"> */}
      {/* <ImageList /> */}
    </div>
  )
};