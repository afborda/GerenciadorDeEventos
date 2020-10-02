import React from "react";
import { ILoginContainer } from "../../model/props/ILoginContainer";
import "./style.scss";

const LoginContainer: React.FC<ILoginContainer> = ({
  children,
  card,
  title,
}) => {
  return (
    <div className="background-web">
      <div className="nav-bar"></div>
      <div className="background-login-image  ">
        <div className="title-login  ">
          <h1 className="title-web hide-web ">{title}</h1>
        </div>
        <div className="card-container">
          <div className={!card ? "card card--background " : "card"}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
