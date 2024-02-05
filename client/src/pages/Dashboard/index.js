import Texts from "../../components/Header/index.js";
import Snacks from "../../components/Snacks/index.js";
import { useGlobalState } from "../../hooks/globalState";
import { DragDropContext } from "react-beautiful-dnd";
import { reorder, move } from "../../helpers/dragAndDrop.js";

import "./style.scss";
import axios from "axios";
import { useState } from "react";

export default function Cover() {
  const { snacksDinamic, setSnacksDinamic } = useGlobalState();
  function onDragEnd(result) {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = source.droppableId.split("-");
    const dInd = destination.droppableId.split("-");
    console.log(source, destination);

    let newState = [];

    console.log(onDragEnd);

    if (sInd[1] === dInd[1] && sInd[0] === dInd[0]) {
      const items = reorder(
        snacksDinamic[sInd[0]][sInd[1]],
        source.index,
        destination.index
      );
      newState = { ...snacksDinamic };
      newState[sInd[0]][sInd[1]] = items;
    } else {
      const res = move(
        snacksDinamic[sInd[0]][sInd[1]],
        snacksDinamic[dInd[0]][dInd[1]],
        source,
        destination
      );
      newState = { ...snacksDinamic };
      newState[sInd[0]][sInd[1]] = res[sInd[1]];
      newState[dInd[0]][dInd[1]] = res[dInd[1]];
    }
    setSnacksDinamic(newState);
    console.log(snacksDinamic, sInd, dInd);
  }

  return (
    <div id="background">
      <DragDropContext onDragEnd={onDragEnd}>
        <Texts />
        <Snacks />
      </DragDropContext>
    </div>
  );
}
