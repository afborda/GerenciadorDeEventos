import React, { useEffect, useState } from "react";
import { IInputForm } from "../../../model/props/IInputForm";
import "./style.scss";
const CustomInput: React.FC<IInputForm> = ({
  label,
  id,
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
            className="input"
            type={type}
            name={id}
            id={id}
            onChange={(event) => setValue(event)}
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
            onChange={(event) => setValue(event)}
            {...props}
          />
        </div>
      )}
    </>
  );
};

export default CustomInput;
