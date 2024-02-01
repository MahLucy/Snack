import Texts from "../../components/Header/index.js";
import Snacks from "../../components/Snacks/index.js";
import { DragAndDropContext } from "react"

import "./style.scss";
import axios from "axios";
import { useState } from "react";

export default function Cover() {
  const [state, setState] = useState(snacksArray);

  const onDragEnd = (result) => {
    const { destination, source } = result;
  }
  return (
    <DragAndDropContext onDragEnd = {onDragEnd} > 

    <div id="background">
      <Texts />
      <Snacks/>

      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const snacks = column.snack_id.map(snack_id => state.snacks[snack_id]);
        return <Cover key={column.id} column={column} snacks={snacks}/>;
      })},

{state.rowOrder.map((rowId) => {
        const row = state.row[rowId];
        const snacks = column.snack_id.map(snack_id => state.snacks[snack_id]);
        return <Cover key={row.id} column={row} snacks={snacks}/>;
      })}


    </div>

    </DragAndDropContext>
    );
  }

  const snacksArray = {
    snacks:  {
    1: {id},
    2: {id},
    3: {id},
    },

    row: {
      "row-1": {
        id: "",
        title: "snack name",
        snack_position: "frente, meio, tras"
      },

      "row-2": {
        id: "",
        title: "snack name",
        snack_id: "frente, meio, tras",
      },

      "row-3": {
        id: "",
        title: "snack name",
        snack_id: "frente, meio, tras",
      }
    },

    columns: {
      "columns-1": {

      },

      "columns-2": {

      },

      "columns-3": {

      },

      "colums-4": {

      },
    },

    rowOrder: ["row-1", "row-2", "row-3"],
    columnOrder: ["columns-1", "columns-2", "columns-3", "columns-4"],


  }

