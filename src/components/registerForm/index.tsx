import React from "react";
import Login from "../login";
import NewAccount from "../newAccount";

// import { Container } from './styles';

const RegisterForm: React.FC = () => {
  return (
    <Login>
      <NewAccount />
    </Login>
  );
};

export default RegisterForm;
