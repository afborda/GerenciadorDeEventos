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

export interface Weekday {
  id: string;
  value: string;
}

export interface Shift {
  id: string;
  value: string;
}
