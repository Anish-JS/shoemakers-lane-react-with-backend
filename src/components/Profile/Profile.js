import { useAuth } from "../../store/auth-context";
import "../Login/Login.css";
import "./profile.css";
import { Link } from "react-router-dom";
const Profile = () => {
  const { logoutHandler } = useAuth();
  return (
    <>
      <div className="center-div bg-dull">
        <div className="card-container login-container sm-gutter sm-padding sm-brr">
          <div className="profile_categories">
            <Link to="/about" className="secondary-btn  para-sm bold xs-gutter">
              About
            </Link>
            <button className="secondary-btn  para-sm bold xs-gutter">
              Manage Address
            </button>
            <button
              className="secondary-btn  para-sm bold xs-gutter"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
