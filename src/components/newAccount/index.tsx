import React, { useState } from "react";
import Footer from "../../shared/form/footer";
import CustomInput from "../../shared/form/input";

import "./style.scss";

const NewAccount: React.FC = () => {
  const [user, setUser] = useState({
    name: "",
    mail: "",
    password: "",
  });

  return (
    <form className="form-login">
      <CustomInput
        id="name"
        label="Qual seu nome?"
        value={user.name}
        setValue={setUser}
        type="text"
        required
      />

      <CustomInput
        id="mail"
        label="Qual seu email?"
        value={user.mail}
        setValue={setUser}
        type="mail"
        required
      />
      <CustomInput
        id="password"
        label="Crie uma senha?"
        value={user.password}
        setValue={setUser}
        type="password"
        required
      />

      <div>
        <button className="buttom--internal space-buttom">Avançar</button>
      </div>
      <Footer titleOne="Já possui uma conta?" titleTwo="Entrar" to="/login" />
    </form>
  );
};

export default NewAccount;
