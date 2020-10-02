import React from "react";

import { NewUserProvider, NewUserContext } from "./NewUserProvider";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RegisterProvider: React.FC = ({ children }) => (
  <NewUserProvider>{children}</NewUserProvider>
);

export { NewUserProvider, NewUserContext };
