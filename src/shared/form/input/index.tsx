import { type } from "os";
import React, { useEffect, useState } from "react";
import { IInputForm } from "../../../model/props/IInputForm";
import "./style.scss";
const Input: React.FC<IInputForm> = ({
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
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default Input;
