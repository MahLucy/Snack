import Innovation from "../../images/artwork.png";
import icon from "../../images/Help.png";
import QRcode from "../../images/Clip path group.png";
import Carrinho from "../../images/carrinho frente.png";
import CarTras from "../../images/carrinho trás.png";
import { useGlobalState } from "../../hooks/globalState";
import { snacksDinamic } from "../expand/index.js";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { getItemStyle, getListStyle } from "../../helpers/dragAndDrop";

import { Filter, Help } from "@carbon/icons-react";

import "./style.scss";
import { snacks } from "../../helpers/Imports/imageImports.js";

export default function Texts() {
  const { snacksDinamic } = useGlobalState();

  return (
    <div id="headerInfo">
      <img id="InnovationWidth" src={Innovation} />
      <div className="headerPai">
        <div className="headerIrmã">
          <div className="headerTexts">
            <div id="headerText">Snack Recommendation</div>
            <div id="headerTextsList">
              1. Aponte a câmera do celular para o QR code e acesse a aplicação.
              <br />
              2. Arraste quantos salgadinhos quiser para dentro do carrinho.
              <br></br>
              3. No chat, use a câmera do celular e tire uma foto da prateleira.
              <br></br>
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
            <img id="imgCarrinhoFrente" src={Carrinho} />
          </div>
          <div className="carrinhoTras">
            <img id="imgCarrinhoTras" src={CarTras} />
          </div>
          {snacksDinamic.carrinho.map((carrinho, x) => (
            <Droppable key={`carrinho-${x}`} droppableId={`carrinho-${x}`}>
              {(provided, snapshot) => (
                <div
                  id="itensCarrinho"
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  {carrinho.map((snacks, x) => (
                    <Draggable
                      key={snacks.id}
                      draggableId={`${snacks.id}`}
                      index={x}
                    >
                      {(provided, snapshot) => (
                        <div
                          className="coluna"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="conteudo">
                            <img
                              src={snacks.frente}
                              className="snack img-frente"
                            ></img>
                            <img
                              src={snacks.meio}
                              className="snack img-meio"
                            ></img>
                            <img
                              src={snacks.tras}
                              className="snack img-tras"
                            ></img>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </div>
    </div>
  );
}
