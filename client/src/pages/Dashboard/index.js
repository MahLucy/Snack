import imageBack from "../../images/image19.png";
import Innovation from "../../images/artwork.png";
import icon from "../../images/Help.png";
import QRcode from "../../images/Clip path group.png";

import {
  Help
} from "@carbon/icons-react";

import "./style.scss";
import axios from "axios";

export default function Cover() {

  return (
    <div id="background">
      <img src={imageBack} alt="Background"></img>
      <div id="headerInfo">
        <img src={Innovation} />
          {/* <div className="headerQrCode"> */}
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
                {/* <img src={QRcode} /> */}
              </div>
            </div>
          </div>
        </div>

      // </div>

  )
};