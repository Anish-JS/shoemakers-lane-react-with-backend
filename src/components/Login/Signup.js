import "./Login.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="center-div">
        <div className="card-container login-container sm-gutter sm-padding sm-brr">
          <div className="card__content xs-gutter">
            <div className="card__heading para-md semibold-weight">SignUp</div>
          </div>

          <div className="card__info xs-gutter para-sm-xs">
            <label for="textbox" class="xxs-padding">
              First Name
            </label>
            <input
              type="text"
              className="textbox img-xxxl xxs-padding bottom-gutter"
            />
            <label for="textbox" className="xxs-padding">
              Last Name
            </label>
            <input
              type="text"
              className="textbox img-xxxl xxs-padding bottom-gutter"
            />
            <label htmlFor="textbox" className="xxs-padding">
              Email address
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="textbox img-xxxl xxs-padding bottom-gutter"
            />

            <label for="textbox" className="xxs-padding">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              className="textbox img-xxxl xxs-padding"
            />
          </div>

          <div className="card__actions xs-gutter">
            <div className="checkbox-container">
              <input type="checkbox" name="input1" className="checkbox-input" />

              <label
                htmlFor="checkbox"
                className="checkbox para-sm-xs xxs-padding semibold-weight"
              >
                <a href="">I accept all Terms and Conditions </a>
              </label>
            </div>
          </div>
          <Link
            to="/signup"
            className="secondary-btn login-btn para-sm bold xs-gutter"
          >
            Create New Account
          </Link>

          <div className="card__actions xs-gutter">
            <div className="card__bookmark para-sm-xs semibold-weight">
              <Link to="/login">Already have an account</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
