
import Texts from "../../components/Header/index.js";
import Snacks from "../../components/Snacks/index.js";

import "./style.scss";
import axios from "axios";

export default function Cover() {
  return (
    <div id="background">
      <Texts />
      <Snacks />
      {/* <div id="Snacks"> */}
      {/* <ImageList /> */}
    </div>
  );
}