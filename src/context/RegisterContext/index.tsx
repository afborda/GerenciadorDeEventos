import React from "react";

import { NewUserProvider, NewUserContext } from "./NewUserProvider";

const RegisterProvider: React.FC = ({ children }) => (
  <NewUserProvider>{children}</NewUserProvider>
);

export { NewUserProvider, NewUserContext };
