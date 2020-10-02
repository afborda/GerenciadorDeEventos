import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { INewUser } from "../../model/INewUser";

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
