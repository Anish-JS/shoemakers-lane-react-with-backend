import { createContext } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { useReducer } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) setIsLoggedIn(true);
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const loginHandler = async (email, password) => {
    // if (validateEmail(email)) {
    try {
      console.log(email, password);
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      // console.log(response);
      localStorage.setItem("token", response.data.encodedToken);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    // } else setError(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  const signupHandler = async (details) => {
    if (
      details.firstName !== "" &&
      details.lastName !== "" &&
      validateEmail(details.email) &&
      details.password !== ""
    ) {
      try {
        const response = await axios.post(
          "/api/auth/signup",
          JSON.stringify({
            firstName: details.firstName,
            lastName: details.lastName,
            email: details.email,
            password: details.password,
          }),
          { headers: { "Content-Type": "application/json" } }
        );

        localStorage.setItem("token", response.data.encodedToken);
        console.log(response);
        setIsLoggedIn(true);
        navigate("/");
      } catch (error) {
        console.log(error.response.data);
      }
    } else setError(true);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, loginHandler, logoutHandler, error, signupHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
