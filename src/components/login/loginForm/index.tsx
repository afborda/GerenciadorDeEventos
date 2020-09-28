import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "..";
import CustomInput from "../../../shared/form/input";
import Footer from "../../../shared/form/footer";
import "./style.scss";

const LoginForm: React.FC = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  return (
    <Login>
      <div className="title-login">
        <h1>Entrar</h1>
      </div>
      <div className="card-container">
        <div className="card">
          <form className="form-login--style">
            <CustomInput
              id="nome"
              label="Nome"
              value={name}
              setValue={setName}
              type="text"
              required
            />

            <CustomInput
              id="email"
              label="Password"
              value={mail}
              setValue={setMail}
              type="password"
              required
            />

            <div>
              <button className="buttom--internal space-buttom">Entrar</button>
              <div className="forgot-my-password">
                <Link to="/login">Esqueci minha senha</Link>
              </div>
            </div>
            <Footer
              titleOne="Não possui uma conta?"
              titleTwo="Criar conta"
              to="/register-form"
            />
          </form>
        </div>
      </div>
    </Login>
  );
};

export default LoginForm;
