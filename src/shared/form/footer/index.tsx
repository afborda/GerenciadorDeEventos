import React from "react";
import { Link } from "react-router-dom";
import { IFooter } from "../../../model/props/IFooter";

import "./style.scss";

const Footer: React.FC<IFooter> = ({ titleOne, titleTwo, to }) => {
  return (
    <div className="login-options">
      <div className="spacer"></div>
      <Link className="not-account" to={to}>
        {titleOne}
      </Link>
      <Link className="new-account" to={to}>
        {titleTwo}
      </Link>
    </div>
  );
};

export default Footer;
