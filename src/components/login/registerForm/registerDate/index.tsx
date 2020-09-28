import React from "react";
import Login from "../..";
import CustomSelect from "../../../../shared/form/select";

// import { Container } from './styles';

const RegisterDate: React.FC = () => {
  const [produto, setProduto] = React.useState("");

  return (
    <Login>
      <div>
        <CustomSelect
          options={["Notebook", "Smartphone", "Tablet"]}
          value={produto}
          setValue={setProduto}
        />
      </div>
    </Login>
  );
};

export default RegisterDate;