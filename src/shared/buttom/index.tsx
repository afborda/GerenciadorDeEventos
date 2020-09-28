import React from "react";
import { Link } from "react-router-dom";
import { IbuttonTypes } from "../../model/props/IButton";

import "../../style/global.scss";
import "./style.scss";

const Buttom: React.FC<IbuttonTypes> = ({ textButton, typeButton, to }) => {
  return (
    <div className="button-container">
      <Link to={to || ""}>
        <button className={typeButton}>{textButton}</button>
      </Link>
    </div>
  );
};

export default Buttom;
