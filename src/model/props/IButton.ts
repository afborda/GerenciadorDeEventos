type ButtonTypes = "button" | "submit" | "reset";
export interface IbuttonTypes {
  typeButton: string;
  textButton: string;
  to?: string;
  type?: ButtonTypes;
}
