import {
  SnackTur1, SnackTur2, SnackTur3,
  SnackIns1, SnackIns2, SnackIns3,
  SnackMax1, SnackMax2, SnackMax3,
  SnackWatson1, SnackWatson2, SnackWatson3,
  SnackOrchestrate1, SnackOrchestrate2, SnackOrchestrate3,
  SnackAssistant1, SnackAssistant2, SnackAssistant3,
  SnackIBM1, SnackIBM2, SnackIBM3,
  SnackIBMz1, SnackIBMz2, SnackIBMz3,
} from "../../helpers/Imports/imageImports";

import "./style.scss";


export default function Snacks() {
  return (
    <div className="segunda-metade">
      <div className="estante">
        <div className="fileira">
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackTur1} className="snack img-frente"></img>
              <img src={SnackTur2} className="snack img-meio"></img>
              <img src={SnackTur3} className="snack img-tras"></img>
            </div>
          </div>
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackIns1} className="snack img-frente"></img>
              <img src={SnackIns2} className="snack img-meio"></img>
              <img src={SnackIns3} className="snack img-tras"></img>
            </div>
          </div>
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackMax1} className="snack img-frente"></img>
              <img src={SnackMax2} className="snack img-meio"></img>
              <img src={SnackMax3} className="snack img-tras"></img>
            </div>
          </div>
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackTur1} className="snack img-frente"></img>
              <img src={SnackTur2} className="snack img-meio"></img>
              <img src={SnackTur3} className="snack img-tras"></img>
            </div>
          </div>
        </div>
        <div className="fileira f2">
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackWatson1} className="snack img-frente"></img>
              <img src={SnackWatson2} className="snack img-meio"></img>
              <img src={SnackWatson3} className="snack img-tras"></img>

            </div>
          </div>
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackOrchestrate1} className="snack img-frente"></img>
              <img src={SnackOrchestrate2} className="snack img-meio"></img>
              <img src={SnackOrchestrate3} className="snack img-tras"></img>

            </div>
          </div>
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackAssistant1} className="snack img-frente"></img>
              <img src={SnackAssistant2} className="snack img-meio"></img>
              <img src={SnackAssistant3} className="snack img-tras"></img>

            </div>
          </div>
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackWatson1} className="snack img-frente"></img>
              <img src={SnackWatson2} className="snack img-meio"></img>
              <img src={SnackWatson3} className="snack img-tras"></img>

            </div>
          </div>
        </div>
        <div className="fileira f3">
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackIBM1} className="snack img-frente"></img>
              <img src={SnackIBM2} className="snack img-meio"></img>
              <img src={SnackIBM3} className="snack img-tras"></img>
            </div>
          </div>
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackIBMz1} className="snack img-frente"></img>
              <img src={SnackIBMz2} className="snack img-meio"></img>
              <img src={SnackIBMz3} className="snack img-tras"></img>
            </div>
          </div>
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackIBM1} className="snack img-frente"></img>
              <img src={SnackIBM2} className="snack img-meio"></img>
              <img src={SnackIBM3} className="snack img-tras"></img>
            </div>
          </div>
          <div className="coluna">
            <div className="conteudo">
              <img src={SnackIBMz1} className="snack img-frente"></img>
              <img src={SnackIBMz2} className="snack img-meio"></img>
              <img src={SnackIBMz3} className="snack img-tras"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
