import React from "react";
import Login from "..";
import Buttom from "../../../shared/buttom";

import "./styled.scss";
const InitialLogin: React.FC = () => {
  return (
    <div>
      <Login>
        <div className="initiallogin-container">
          <div>
            <h1 className="title">
              Gerenciador de eventos para animadores de festas
            </h1>
          </div>
          <div>
            <Buttom typeButton="buttom--primary" textButton="Criar conta" />
            <Buttom
              to="login-form"
              typeButton="buttom--secundary"
              textButton="Entrar"
            />
            <p className="text-triider">Desafio Front end Triider</p>
          </div>
        </div>
      </Login>
    </div>
  );
};

export default InitialLogin;
