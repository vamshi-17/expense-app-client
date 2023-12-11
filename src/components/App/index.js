import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Login from "../Login/Login";
import CrudTable from "../Table";
import Tabs from "../Tabs";
import Register from "../Register/Register.js";
import config from "../../config.json";
import LoginRegister from "./LoginRegisterTab";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "@sweetalert2/themes/borderless/borderless.css";
import "./index.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let fun = async () => {
    let res = await axios.get(`${config.url}/auth/verifyToken`);
    setIsAuthenticated(res?.data?.isValidToken);
  };
  useEffect(() => {
    fun();
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: ['"Courier New"', "Arial", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {isAuthenticated ? (
        <Tabs />
      ) : (
        <LoginRegister setIsAuthenticated={setIsAuthenticated} />
      )}
    </ThemeProvider>
  );
};

export default App;
