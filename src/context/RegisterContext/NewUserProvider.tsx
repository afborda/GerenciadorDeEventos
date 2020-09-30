import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

interface Option {
  id: string;
  value: string;
}

interface INewUser {
  name: string;
  email: string;
  password: string;
  category: Option;
  week_days: Option[];
  day_shifts: Option[];
  price: string;
}

const NewUserContext = createContext<{
  state: INewUser;
  dispatch: Dispatch<SetStateAction<INewUser>>;
}>({
  state: {
    name: "",
    email: "",
    password: "",
    category: {
      id: "",
      value: "",
    },
    week_days: [],
    day_shifts: [],
    price: "",
  },
  dispatch: () => {},
});

const NewUserProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useState<INewUser>({
    name: "",
    email: "",
    password: "",
    category: {
      id: "",
      value: "",
    },
    week_days: [],
    day_shifts: [],
    price: "",
  });

  return (
    <NewUserContext.Provider value={{ state, dispatch }}>
      {children}
    </NewUserContext.Provider>
  );
};

export { NewUserProvider, NewUserContext };
