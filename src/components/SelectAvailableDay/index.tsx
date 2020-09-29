import React, { Dispatch, SetStateAction, useRef } from "react";
import "./style.scss";

interface Options {
  id: string;
  day: string;
}

interface ISelectAvailableDay {
  options: Options[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label: string;
  className?: string;
}

interface ListRef {
  id: string;
  value: string;
}

const SelectAvailableDay: React.FC<ISelectAvailableDay> = ({
  options,
  value,
  setValue,
  label,
  className,
  ...props
}) => {
  const listRef = useRef<HTMLLIElement | undefined | null | any>();

  const HandleSelectAvailableDay = (event: any) => {
    console.log("Id ->", event.target.id, "Value ->", event.target.value);
  };

  return (
    <div>
      <p className="label">{label}</p>
      <ul className="list-item">
        {options?.map(({ id, day }) => (
          <li
            ref={listRef}
            id={id}
            className={className}
            onClick={HandleSelectAvailableDay}
            key={id}
            value={day}
          >
            <p>{day}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectAvailableDay;
