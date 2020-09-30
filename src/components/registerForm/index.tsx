import React from "react";
import LoginContainer from "../loginContainer";
import NewAccount from "../newAccount";

// import { Container } from './styles';

const RegisterForm: React.FC = () => {
  return (
    <LoginContainer title="Criar conta">
      <NewAccount />
    </LoginContainer>
  );
};

export default RegisterForm;
