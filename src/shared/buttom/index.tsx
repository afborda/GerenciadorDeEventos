import React from "react";
import { IbuttonTypes } from "../../model/props/IButton";

import "../../style/global.scss";
import "./style.scss";

const Buttom: React.FC<IbuttonTypes> = ({ textButton, typeButton, type }) => {
  return (
    <div className="button-container">
      <button type={type} className={typeButton}>
        {textButton}
      </button>
    </div>
  );
};

export default Buttom;
