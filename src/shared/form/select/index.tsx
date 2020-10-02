import React, { Dispatch, SelectHTMLAttributes, SetStateAction } from "react";

interface Option {
  id: string;
  value: string;
}

interface Iselect {
  options: Option[];
  value: Option;
  setValue: Dispatch<SetStateAction<Option>>;
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
