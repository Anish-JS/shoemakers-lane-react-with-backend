import NewArrivals from "./NewArrivals";
import "./NewArrival.css";
const NewArrivalComponent = () => {
  return (
    <>
      <div className="lower-section sm-padding">
        <NewArrivals></NewArrivals>
        <NewArrivals></NewArrivals>
      </div>
    </>
  );
};

export default NewArrivalComponent;
