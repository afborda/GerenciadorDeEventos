import React from "react";

interface Iselect {
  options: any;
  value: string;
  setValue: any;
  id: string;
  label: string;
}

const CustomSelect: React.FC<Iselect> = ({
  options,
  value,
  setValue,
  id,
  label,

  ...props
}) => {
  return (
    <div style={{ display: "grid" }}>
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <select
        id={id}
        className="input-select"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option: any) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
