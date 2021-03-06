import React, { FormEvent, useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../shared/buttom";
import Footer from "../../shared/form/footer";
import CustomInput from "../../shared/form/Input";

import { INewUser } from "../../model/INewUser";
import { useNewUser } from "../../hooks";

import "./style.scss";

const NewAccount: React.FC = () => {
  const history = useHistory();
  const { newUser, setNewUser } = useNewUser();
  const [newUserFormData, setNewUserFormData] = useState<INewUser>({
    name: "",
    email: "",
    password: "",
    category: {
      id: "",
      value: "",
    },
    week_days: [],
    day_shifts: [],
    price: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUserFormData({ ...newUserFormData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { name, email, password } = newUserFormData;

    setNewUser({
      ...newUser,
      name,
      email,
      password,
    });

    history.push("/register-form-date");
  };

  return (
    <div className="container-web">
      <div>
        <h1 className="title">Login</h1>
      </div>
      <form onSubmit={handleSubmit} className="form-login">
        <CustomInput
          id="name"
          label="Qual seu nome?"
          setValue={handleInputChange}
          type="text"
          required
        />

        <CustomInput
          id="email"
          label="Qual seu email?"
          setValue={handleInputChange}
          type="email"
          required
        />
        <CustomInput
          id="password"
          label="Crie uma senha?"
          setValue={handleInputChange}
          type="password"
          required
        />

        <Button
          type="submit"
          textButton="Avançar"
          typeButton="buttom--internal space-buttom"
        />
      </form>
      <Footer titleOne="Já possui uma conta?" titleTwo="Entrar" to="/login" />
    </div>
  );
};

export default NewAccount;
