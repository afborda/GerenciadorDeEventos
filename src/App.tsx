import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/Auth/auth";
import Routes from "./routes/routes";

import "./style/global.scss";

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AuthProvider>
);

export default App;
