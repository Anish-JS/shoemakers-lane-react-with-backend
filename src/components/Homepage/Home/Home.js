import HomeSummary from "../HomeSummary/HomeSummary";
import "./Home.css";
import Deals from "../Deals/Deals";
import NewArrivalComponent from "../NewArrivals/NewArrivalComponent";
const Home = (props) => {
  // console.log(props.products);
  return (
    <>
      <div className="homepage bg-dull">
        <HomeSummary></HomeSummary>
      </div>

      <div className="deals">
        <Deals productData={props.products}></Deals>
      </div>
      <NewArrivalComponent></NewArrivalComponent>
    </>
  );
};

export default Home;
