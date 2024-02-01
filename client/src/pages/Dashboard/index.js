import React from 'react';import Texts from "../../components/Texts/index.js";
import Snacks from "../../components/Snacks/index.js";

import "./style.scss";
import ReactDOM from 'react-dom';
import axios from "axios";
import CustomModal from '../../components/CustomModal/index.js';


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
      <Snacks />
        <CustomModal />
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

