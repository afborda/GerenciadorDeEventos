import React from "react";

interface Iselect {
  options: any;
  value: string;
  setValue: any;
}

const CustomSelect: React.FC<Iselect> = ({
  options,
  value,
  setValue,
  ...props
}) => {
  return (
    <select
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
  );
};

export default CustomSelect;
