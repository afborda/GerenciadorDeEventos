import React from "react";
import LoginContainer from "../loginContainer";
import Buttom from "../../shared/buttom";

import "./styled.scss";
import { Link } from "react-router-dom";
const InitialLogin: React.FC = () => {
  return (
    <div>
      <LoginContainer card={true}>
        <div className="initiallogin-container">
          <div>
            <h1 className="title">
              Gerenciador de eventos para animadores de festas
            </h1>
          </div>
          <div className="pre-buttom">
            <Link to="/register-form" className="buttom--primary">
              Criar conta
            </Link>
            <Link to="/login" className="buttom--secundary">
              Entrar
            </Link>

            <p className="text-triider">Desafio Front end Triider</p>
          </div>
        </div>
      </LoginContainer>
    </div>
  );
};

export default InitialLogin;
