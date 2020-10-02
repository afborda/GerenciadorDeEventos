import { ChangeEvent } from "react";
export interface IInputForm {
  label: string;
  id: string;
  setValue: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: any;
  type: string;
}
