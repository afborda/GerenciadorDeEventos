import React, { useState } from "react";
import { Option } from "../../model/INewUser";
import { ISelectShift } from "../../model/props/ISelect";

import "./index.scss";

const SelectShift: React.FC<ISelectShift> = ({
  setValue,
  options,
  label,
  className,
  ...props
}) => {
  const [selectedItems, setSelectedItems] = useState<Option[]>([]);

  const HandleSelectedItems = (option: Option) => {
    const alreadySelected = selectedItems.findIndex(
      (weekDay) => weekDay.id === option.id
    );
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(
        (weekDay) => weekDay.id !== option.id
      );
      setSelectedItems(filteredItems);
      setValue(filteredItems);
    } else {
      setSelectedItems([...selectedItems, option]);
      setValue([...selectedItems, option]);
    }
  };

  return (
    <div>
      <p className="label">{label}</p>
      <ul className="list-item">
        {options?.map((option) => {
          return (
            <li
              key={option.id}
              id={option.id}
              className={
                selectedItems.includes(option)
                  ? `${className} status-active`
                  : className
              }
              onClick={() => HandleSelectedItems(option)}
            >
              <p>{option.value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectShift;
