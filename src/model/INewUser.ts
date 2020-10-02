export interface Option {
  id: string;
  value: string;
}

export interface INewUser {
  name: string;
  email: string;
  password: string;
  category: Option;
  week_days: Option[];
  day_shifts: Option[];
  price: string;
}
