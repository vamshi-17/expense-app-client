import React from "react";

import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { red } from "@mui/material/colors";

const Header = ({ setIsAdding, title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <IconButton
          size="large"
          onClick={() => setIsAdding(true)}
          sx={{ color: red[500] }}
        >
          <AddCircleIcon sx={{ fontSize: 50 }} />
        </IconButton>
        {/* <button onClick={() => setIsAdding(true)}>Add {title}</button> */}
      </div>
    </header>
  );
};

export default Header;
