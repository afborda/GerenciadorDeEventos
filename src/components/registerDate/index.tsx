import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import LoginContainer from "../loginContainer";
import CustomSelect from "../../shared/form/select";
import SelectAvailableDay from "../SelectAvailableDay";
import SelectShift from "../SelectShift";
import CustomInput from "../../shared/form/Input";
import Buttom from "../../shared/buttom";
import { getDays, getCategory, getShift } from "../../service/userService";

import { useNewUser } from "../../hooks";
import "./style.scss";
interface Weekday {
  id: string;
  value: string;
}

interface Shift {
  id: string;
  value: string;
}

interface Category {
  id: string;
  value: string;
}

const RegisterDate: React.FC = () => {
  const { newUser, setNewUser } = useNewUser();
  const [weekDaysOptions, setWeekDaysOptions] = useState<Weekday[]>([]);
  const [shiftsOptions, setShiftsOptions] = useState<Shift[]>([]);
  const [categoryOptions, setCategogyOptions] = useState<Category[]>([]);
  const [weekDays, setWeekDays] = useState<Weekday[]>([]);
  const [category, setCategory] = useState<Category>({ id: "", value: "" });
  const [price, setPrice] = useState("");
  const [shifts, setShifts] = useState<Shift[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPrice(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setNewUser({
      ...newUser,
      category,
      day_shifts: shifts,
      price,
      week_days: weekDays,
    });

    console.log(newUser);
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
