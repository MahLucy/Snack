import {
  snacks
} from "../../helpers/Imports/imageImports";
import _ from 'lodash'
import "./style.scss";
import ImageList from "../../components/expand/index.js";

export default function Snacks() {
  return (
    <div className="segunda-metade">
      <div className="estante">
        {_.chunk(snacks, 4).map((fileira, i) =>  <div className={`fileira f${i+1}`}>
          {fileira.map(snack =>  <div className="coluna">
            <div className="conteudo">
              <img src={snack.frente} className="snack img-frente"></img>
              <img src={snack.meio} className="snack img-meio"></img>
              <img src={snack.tras} className="snack img-tras"></img>
            </div>
          </div>) }
        </div>)}
      </div>
    </div>
  );
}
