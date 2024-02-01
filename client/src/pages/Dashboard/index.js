import React from 'react';
import Texts from "../../components/Texts/index.js";
import Snacks from "../../components/Snacks/index.js";
import "./style.scss";
import ReactDOM from 'react-dom';
import axios from "axios";
import CustomModal from '../../components/CustomModal/index.js';



export default function Cover() {
  return (
    <div id="background">
      <Texts />
      <Snacks />
        <CustomModal />
      </div>
  );
};

