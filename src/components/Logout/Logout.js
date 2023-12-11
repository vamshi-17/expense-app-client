import React from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

// ICONS
import LockIcon from "@mui/icons-material/Lock";

const Logout = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    Swal.fire({
      icon: "question",
      title: "Logging Out",
      text: "Are you sure you want to log out?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        Cookies.set("token", "");
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },

          willClose: () => {
            localStorage.setItem("is_authenticated", false);
            window.location.reload(false);
            setIsAuthenticated(false);
          },
        });
      }
    });
  };

  return (
    <Box
      sx={{ position: "absolute", top: "1rem", right: "2rem", zIndex: 1000 }}
    >
      <IconButton onClick={handleLogout} aria-label="logout">
        <LockIcon />
      </IconButton>
    </Box>
  );
};

export default Logout;
