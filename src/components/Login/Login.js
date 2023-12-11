import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import config from "../../config.json";
import Cookies from "js-cookie";


const Login = ({ setIsAuthenticated }) => {


  const [username, setUsername ] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(`${config.url}/auth/login`, {
        username: username,
        password: password,
      });

      if (res.data) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem("is_authenticated", true);
            setIsAuthenticated(true);
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour in milliseconds

            Cookies.set("token", res.data.token, {
              expires: expirationDate,
            });
            Swal.fire({
              icon: "success",
              title: "Successfully logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } else {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Incorrect username or password.",
              showConfirmButton: true,
            });
          },
        });
      }
    } catch (error) {
      console.error("Login failed:", error);

      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Incorrect username or password.",
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className="small-container content">
      <form onSubmit={handleLogin}>
        <h1>Sign In</h1>
        <label htmlFor="email">Username</label>
        <input
          id="email"
          type="username"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input style={{ marginTop: "12px" }} type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default Login;
