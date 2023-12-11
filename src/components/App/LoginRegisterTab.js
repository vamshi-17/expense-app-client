import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Login from "../Login/Login";
import Register from "../Register/Register.js";

//ICONS
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoginIcon from "@mui/icons-material/Login";

export default function Tabs({ setIsAuthenticated }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            textColor="secondary"
            indicatorColor="secondary"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab icon={<PersonAddIcon />} label="Sign up" value="2" />
            <Tab icon={<LoginIcon />} label="Sign in" value="1" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </TabPanel>
        <TabPanel value="2">
          <Register setIsAuthenticated={setIsAuthenticated} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
