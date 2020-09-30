import { SetStateAction, ChangeEvent } from "react";
import { Dispatch } from "react";
export interface IInputForm {
  label: string;
  id: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: any;
  type: string;
}
