import React from "react";
import "./Login.css";
import bcyrpt from "bcryptjs";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth-context";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginHandler, error } = useAuth();
  return (
    <>
      <div className="center-div bg-dull">
        <div className="card-container login-container sm-gutter sm-padding sm-brr">
          <div className="card__content xs-gutter">
            <div className="card__heading para-md semibold-weight">Login</div>
          </div>

          <div className="card__info xs-gutter para-sm-xs">
            <label for="textbox" className="xxs-padding">
              Email address
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className={`textbox img-xxxl xxs-padding bottom-gutter ${
                error ? `error` : ``
              }`}
            />

            <label for="textbox" className="xxs-padding">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
              className={`textbox img-xxxl xxs-padding bottom-gutter ${
                error ? `error` : ``
              }`}
            />
          </div>
          <div className="card__actions xs-gutter">
            <div className="checkbox-container">
              <input type="checkbox" name="input1" className="checkbox-input" />

              <label
                for="checkbox"
                className="checkbox para-sm-xs xxs-padding semibold-weight"
              >
                <a href="">Remember me</a>
              </label>
            </div>

            <div className="para-sm-xs semibold-weight">
              <a href="">Forgot you passowrd?</a>
            </div>
          </div>
          {error && (
            <div className="para-sm-xs red xs-gutter">
              Invalid email or password, please check
            </div>
          )}

          <button
            href=""
            className="secondary-btn login-btn para-sm bold xs-gutter"
            onClick={() => loginHandler(email, password)}
          >
            Login
          </button>

          <div className="card__actions xs-gutter">
            <div className="card__bookmark para-sm-xs semibold-weight">
              <Link to="/signup">Create New Account</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
