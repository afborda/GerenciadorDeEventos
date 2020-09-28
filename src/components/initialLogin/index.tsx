import React from "react";
import Login from "../login";
import Buttom from "../../shared/buttom";

import "./styled.scss";
const InitialLogin: React.FC = () => {
  return (
    <div>
      <Login card={true}>
        <div className="initiallogin-container">
          <div>
            <h1 className="title">
              Gerenciador de eventos para animadores de festas
            </h1>
          </div>
          <div>
            <Buttom
              to="/register-form"
              typeButton="buttom--primary"
              textButton="Criar conta"
            />
            <Buttom
              to="/login"
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
