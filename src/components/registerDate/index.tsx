import React, { useState } from "react";
import Login from "../login";
import CustomSelect from "../../shared/form/select";
import SelectAvailableDay from "../SelectAvailableDay";
import CustomInput from "../../shared/form/input";
import Buttom from "../../shared/buttom";

import "./style.scss";

const RegisterDate: React.FC = () => {
  const [weekDay, setWeekDay] = useState("");
  const [day, setDay] = useState(false);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [shift, setShift] = useState("");

  return (
    <Login title="Criar conta">
      <form className="select-container">
        <CustomSelect
          id="service"
          label="Selecione sua categoria"
          options={["Notebook", "Smartphone", "Tablet"]}
          value={category}
          setValue={setCategory}
        />
        <SelectAvailableDay
          label="Selecione os dias que trabalhará?"
          options={[
            {
              day: "S",
              id: "1",
            },
            { day: "T", id: "2" },
            { day: "Q", id: "3" },
            { day: "Q", id: "4" },
            { day: "S", id: "5" },
            { day: "S", id: "6" },
            { day: "D", id: "7" },
          ]}
          value={weekDay}
          setValue={setWeekDay}
          className="circle"
        />
        {/* <SelectAvailableDay
          label="Selecione os turnos que trabalhará?"
          options={["Manha", "Tarde", "Noite"]}
          value={shift}
          setValue={setShift}
          className="rectangle"
        /> */}

        <CustomInput
          label="Informe o preço do seu serviço"
          id="value"
          type="text"
          setValue={setPrice}
          value={price}
          required
        />
        <Buttom textButton="Criar conta" typeButton="buttom--internal" to="" />
      </form>
    </Login>
  );
};

export default RegisterDate;
