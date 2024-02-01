import Innovation from "../../images/artwork.png";
import icon from "../../images/Help.png";
import QRcode from "../../images/Clip path group.png";
import Carrinho from "../../images/carrinho frente.png";
import CarTras from "../../images/carrinho trás.png";

import { Filter, Help } from "@carbon/icons-react";

import "./style.scss";


export default function Texts() {
    return (
        <div id="headerInfo">
            <img id="InnovationWidth" src={Innovation} />
            <div className="headerPai">
                <div className="headerIrmã">
                    <div className="headerTexts">
                        <div id="headerText">Snack Recommendation</div>
                        <div id="headerTextsList">
                            1. Aponte a câmera do celular para o QR code e acesse a
                            aplicação.
                            <br />
                            2. Arraste quantos salgadinhos quiser para dentro do carrinho.
                            <br></br>
                            3. No chat, use a câmera do celular e tire uma foto da
                            prateleira.<br></br>
                            4. O Snack Recommendation irá contar quantos salgadinhos ainda
                            restaram.{" "}
                        </div>
                        <div className="headerIcon">
                            <Help />
                            <div id="headerTextIcon">
                                Toque duas vezes no salgadinho para saber mais sobre as
                                tecnologias IBM.
                            </div>
                        </div>
                    </div>
                    <div className="headerQrCode">
                        <img id="QRcodeWidth" src={QRcode} />
                    </div>
                </div>
                <div className="carrinho">
                    <div id="carrinhoFrente">
                        <img id="imgCarrinhoFrente" src={Carrinho} />{" "}
                    </div>
                    <div id="carrinhoTras">
                        <img id="imgCarrinhoTras" src={CarTras} />
                    </div>
                </div>
            </div>
        </div>
    );
}