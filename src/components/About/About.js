import { Link } from "react-router-dom";
const About = () => {
  const { firstName, lastName, email } = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      <div className="card-container sm-gutter sm-brr">
        <div className="card__content sm-gutter">
          <div className="card__info para-sm xs-gutter bold">{`${firstName} ${lastName}`}</div>

          <div className="card__info para-sm rating bold">{email}</div>
        </div>
        <div className="card__actions">
          <Link to="/profile" className="secondary-btn para-sm bold xs-gutter">
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
