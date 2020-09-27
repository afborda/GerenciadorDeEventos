import React, { useState } from "react";
import Login from "..";
import Input from "../../../shared/form/input";
import "./style.scss";

const LoginForm: React.FC = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  return (
    <Login>
      <div className="card-container">
        <div className="card">
          <form className="form-login">
            <Input
              id="nome"
              label="Nome"
              value={name}
              setValue={setName}
              type="text"
              required
            />
            <Input
              id="email"
              label="Password"
              value={mail}
              setValue={setMail}
              type="password"
              required
            />
          </form>
        </div>
      </div>
    </Login>
  );
};

export default LoginForm;
