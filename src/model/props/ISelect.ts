import { SetStateAction } from "react";
import { Dispatch } from "react";
import { Option } from "./../INewUser";
export interface Iselect {
  options: Option[];
  value: Option;
  setValue: Dispatch<SetStateAction<Option>>;
  id: string;
  label: string;
}

export interface ISelectShift {
  options: Option[];
  setValue: Dispatch<SetStateAction<Option[]>>;
  label: string;
  className?: string;
}

export interface ISelectAvailableDay {
  options: Option[];
  setValue: Dispatch<SetStateAction<Option[]>>;
  label: string;
  className?: string;
}
