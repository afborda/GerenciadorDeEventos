import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import LoginContainer from "../loginContainer";
import CustomSelect from "../../shared/form/select";
import SelectAvailableDay from "../SelectAvailableDay";
import SelectShift from "../SelectShift";
import CustomInput from "../../shared/form/Input";
import Buttom from "../../shared/buttom";
import {
  getDays,
  getCategory,
  getShift,
  registerUser,
} from "../../service/userService";

import { useNewUser } from "../../hooks";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { INewUser } from "../../model/INewUser";
interface Weekday {
  id: string;
  value: string;
}

interface Shift {
  id: string;
  value: string;
}

interface Option {
  id: string;
  value: string;
}

const RegisterDate: React.FC = () => {
  const history = useHistory();
  const { newUser, setNewUser } = useNewUser();
  const [weekDaysOptions, setWeekDaysOptions] = useState<Weekday[]>([]);
  const [shiftsOptions, setShiftsOptions] = useState<Shift[]>([]);
  const [categoryOptions, setCategogyOptions] = useState<Option[]>([]);
  const [weekDays, setWeekDays] = useState<Weekday[]>([{ id: "", value: "" }]);
  const [category, setCategory] = useState<Option>({ id: "", value: "" });
  const [price, setPrice] = useState("");
  const [shifts, setShifts] = useState<Shift[]>([{ id: "", value: "" }]);
  console.log(category);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPrice(value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await registerUser(newUser);
      alert("Salvou no banco de dados.");
      history.push("/register-form-date");
    } catch (error) {
      alert("Erro ao cadastrar usuario.");
    }
  };

  useEffect(() => {
    const loadWeekDays = async () => {
      const response = await getDays();
      setWeekDaysOptions(response);
    };

    const loadCategories = async () => {
      const response = await getCategory();
      setCategogyOptions(response);
    };

    const loadShift = async () => {
      const response = await getShift();
      setShiftsOptions(response);
    };

    loadWeekDays();
    loadCategories();
    loadShift();
  }, []);

  useEffect(() => {
    setNewUser({
      ...newUser,
      category,
      day_shifts: shifts,
      week_days: weekDays,
      price,
    });
  }, [category, shifts, weekDays, price]);

  return (
    <LoginContainer title="Criar conta">
      <form onSubmit={handleSubmit} className="select-container">
        <CustomSelect
          id="service"
          label="Selecione sua categoria"
          options={categoryOptions}
          value={category}
          setValue={setCategory}
        />
        <SelectAvailableDay
          label="Selecione os dias que trabalhará?"
          options={weekDaysOptions}
          setValue={setWeekDays}
          className="circle"
        />
        <SelectShift
          label="Selecione os turnos que trabalhará?"
          options={shiftsOptions}
          setValue={setShifts}
          className="rectangle"
        />

        <CustomInput
          label="Informe o preço do seu serviço"
          id="value"
          type="text"
          setValue={handleInputChange}
          required
        />
        <Buttom
          type="submit"
          textButton="Criar conta"
          typeButton="buttom--internal"
          to=""
        />
      </form>
    </LoginContainer>
  );
};

export default RegisterDate;
