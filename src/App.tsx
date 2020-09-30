import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NewUserProvider } from "./context/RegisterContext";
import Routes from "./routes/routes";

import "./style/global.scss";

const App: React.FC = () => (
  <NewUserProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </NewUserProvider>
);

export default App;
