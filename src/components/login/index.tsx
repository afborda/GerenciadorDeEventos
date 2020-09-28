import React from "react";
import "./style.scss";

interface ILogin {
  card?: boolean;
}

const Login: React.FC<ILogin> = ({ children, card }) => {
  return (
    <div className="background-login-image">
      <div className="title-login">
        <h1>Entrar</h1>
      </div>
      <div className="card-container">
        <div className={!card ? "card card--background " : "card"}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Login;
