import {
  snacks
} from "../../helpers/Imports/imageImports";
import _ from 'lodash'
import "./style.scss";
import CustomModal from "../CustomModal";
import React, { useState, } from 'react';


const Snacks = () => {
  const [selectedSnack, setSelectedSnack] = useState(null);
  const [isOpen, setIsOpen] = useState(!!selectedSnack);


  const handleSnackClick = (snack) => {
    setSelectedSnack(snack);
    setIsOpen(true);
  };

  return (
    <div className="segunda-metade">
      <div className="estante">
        {_.chunk(snacks, 4).map((fileira, i) => <div className={`fileira f${i + 1}`} key={1}>
          {fileira.map(snack => <div className="coluna" key={snack.id} onClick={() => handleSnackClick(snack)}>
            <div className="conteudo">
              <img src={snack.frente} className="snack img-frente" alt={`Snack ${snack.id} - Frente`}></img>
              <img src={snack.meio} className="snack img-meio" alt={`Snack ${snack.id} - Meio`}></img>
              <img src={snack.tras} className="snack img-tras" alt={`Snack ${snack.id} - Trás`}></img>
            </div>
            <CustomModal selectedSnack={selectedSnack} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>)}
        </div>)}
      </div>
    </div>
  );
}

export default Snacks;
