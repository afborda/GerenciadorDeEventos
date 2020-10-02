import { useContext } from "react";

import { NewUserContext } from "../context/RegisterContext";

const useNewUser = () => {
  const context = useContext(NewUserContext);
  const { state: newUser, dispatch: setNewUser } = context;
  return { newUser, setNewUser };
};

export default useNewUser;
