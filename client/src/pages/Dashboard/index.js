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

import SnackWatson1 from "../../images/watsonx/watsonx 1.png";
import SnackWatson2 from "../../images/watsonx/watsonx 2.png";
import SnackWatson3 from "../../images/watsonx/watsonx 3.png";

import SnackOrchestrate1 from "../../images/Orchestrate/orchestrate 1.png";
import SnackOrchestrate2 from "../../images/Orchestrate/orchestrate 2.png";
import SnackOrchestrate3 from "../../images/Orchestrate/orchestrate 3.png";

import SnackAssistant1 from "../../images/Assistant/assistant 1.png";
import SnackAssistant2 from "../../images/Assistant/assistant 2.png";
import SnackAssistant3 from "../../images/Assistant/assistant 3.png";

import SnackIBM1 from "../../images/IBM Z/ibm z 1.png";
import SnackIBM2 from "../../images/IBM Z/ibm z 2.png";
import SnackIBM3 from "../../images/IBM Z/ibm z 3.png";

import SnackIBMz1 from "../../images/IBM Z16/ibm z16 1.png";
import SnackIBMz2 from "../../images/IBM Z16/ibm z16 2.png";
import SnackIBMz3 from "../../images/IBM Z16/ibm z16 3.png";

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
        <img id="InnovationWidth" src={Innovation} />
        <div className="headerPai">
          <div className="headerIrmã">
            <div className="headerTexts">
              <div id="headerText">
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
              <img id="QRcodeWidth" src={QRcode}/>
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
        <div className="fileira">
        <div id="Snacks1">
          <img src={SnackTur1} className="img1"></img>
          <img src={SnackTur2} className="img2"></img>
          <img src={SnackTur3} className="img3"></img>
        </div>
        <div id="Snacks2">
          <img src={SnackIns1} className="img4" ></img>
          <img src={SnackIns2} className="img5"></img>
          <img src={SnackIns3} className="img6"></img>
        </div>
        <div id="Snacks3">
          <img src={SnackMax1} className="img7" ></img>
          <img src={SnackMax2} className="img8" ></img>
          <img src={SnackMax3} className="img9" ></img>
        </div>
        <div id="Snacks4" >
          <img src={SnackTur1} className="img10" ></img>
          <img src={SnackTur2} className="img11" ></img>
          <img src={SnackTur3} className="img12" ></img>
        </div>
        <div id="Snacks5" >
          <img src={SnackWatson1} className="img13" ></img>
          <img src={SnackWatson2} className="img14" ></img>
          <img src={SnackWatson3} className="img15" ></img>
      </div>
      <div id="Snacks6" >
          <img src={SnackOrchestrate1} className="img16" ></img>
          <img src={SnackOrchestrate2} className="img17" ></img>
          <img src={SnackOrchestrate3} className="img18" ></img>
      </div>
      <div id="Snacks7" >
          <img src={SnackAssistant1} className="img19" ></img>
          <img src={SnackAssistant2} className="img20" ></img>
          <img src={SnackAssistant3} className="img21" ></img>
      </div>
      <div id="Snacks8" >
          <img src={SnackWatson1} className="img22" ></img>
          <img src={SnackWatson2} className="img23" ></img>
          <img src={SnackWatson3} className="img24" ></img>
      </div>
      <div id="Snacks9" >
          <img src={SnackIBM1} className="img25" ></img>
          <img src={SnackIBM2} className="img26" ></img>
          <img src={SnackIBM3} className="img27" ></img>
      </div>
      <div id="Snacks10" >
          <img src={SnackIBMz1} className="img28" ></img>
          <img src={SnackIBMz2} className="img29" ></img>
          <img src={SnackIBMz3} className="img30" ></img>
      </div>
      <div id="Snacks11" >
          <img src={SnackIBMz1} className="img31" ></img>
          <img src={SnackIBMz2} className="img32" ></img>
          <img src={SnackIBMz3} className="img33" ></img>
      </div>
      <div id="Snacks12" >
          <img src={SnackIBM1} className="img34" ></img>
          <img src={SnackIBM2} className="img35" ></img>
          <img src={SnackIBM3} className="img36" ></img>
      </div>
      </div>
      </div>
      {/* <div id="Snacks"> */}
      {/* <ImageList /> */}
    </div>
  )
};