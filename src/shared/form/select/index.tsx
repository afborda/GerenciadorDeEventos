import React from "react";
import { Option } from "../../../model/INewUser";
import { Iselect } from "../../../model/props/ISelect";

const CustomSelect: React.FC<Iselect> = ({
  options,
  value,
  setValue,
  id,
  label,
  ...props
}) => {
  return (
    <div className="select-container" style={{ display: "grid" }}>
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <select
        id={id}
        className="input-select"
        value={value.value}
        onChange={({ target: { id, value } }) => setValue({ id, value })}
        {...props}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map(({ id, value }: Option) => (
          <option key={id} id={id} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
