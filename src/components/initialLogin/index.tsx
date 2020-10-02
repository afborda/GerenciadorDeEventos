import React from "react";
import LoginContainer from "../loginContainer";
import Balloon from "../../assets/img/balloon.png";
import Feast from "../../assets/img/feast.png";

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
          <div className="spacer hide "></div>
          <div className="container-center-web">
            <div className="balloon  hide">
              <div>
                <img src={Balloon} alt="Balloon" />
              </div>
              <div>
                <p>Cadastre suas festas e organize sua agenda!</p>
              </div>
            </div>
            <div className="party-calendar  hide">
              <div>
                <img src={Feast} alt="Feast" />
              </div>
              <div>
                <p>Cadastre suas festas e organize sua agenda!</p>
              </div>
            </div>
          </div>
          <div className="test-triider hide">
            <p className="text-triider">Desafio Front end Triider</p>
          </div>
        </div>
      </LoginContainer>
    </div>
  );
};

export default InitialLogin;
