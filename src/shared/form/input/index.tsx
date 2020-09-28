import React, { useEffect, useState } from "react";
import { IInputForm } from "../../../model/props/IInputForm";
import "./style.scss";
const CustomInput: React.FC<IInputForm> = ({
  label,
  id,
  value,
  setValue,
  type,
  ...props
}) => {
  const [password, setPassword] = useState(false);

  useEffect(() => {
    if (type === "password") setPassword(true);
  }, []);

  return (
    <>
      {password ? (
        <div className="input--style input-space--style">
          <label className="label" htmlFor={id}>
            {label}
          </label>
          <input
            className="input "
            type={type}
            name={id}
            id={id}
            value={value}
            onChange={({ target }: any) => setValue(target.value)}
            {...props}
          />
        </div>
      ) : (
        <div className="input--style  input-space--style">
          <label className="label" htmlFor={id}>
            {label}
          </label>
          <input
            className="input"
            type={type}
            name={id}
            id={id}
            value={value}
            onChange={({ target }: any) => setValue(target.value)}
            {...props}
          />
        </div>
      )}
    </>
  );
};

export default CustomInput;
