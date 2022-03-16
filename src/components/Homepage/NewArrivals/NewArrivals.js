import "./NewArrival.css";
import limitedEditionShoes from "../../../assets/limitedEdition.jpg";
const NewArrivals = () => {
  return (
    <div className="featured sm-gutter sm-brr">
      <div className="feat-img sm-gutter">
        <img
          className="img-full xs-brr"
          src={limitedEditionShoes}
          alt="shoe-img"
        />
      </div>
      <div className="feat-content sm-gutter xs-padding">
        <div className="feat-title bold">New Arrival</div>
        <div className="feat-info para-sm-xs">
          <p>Try out the latest fashion in store</p>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
