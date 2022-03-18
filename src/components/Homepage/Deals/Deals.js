import Card from "../../Card/Card";
import "./Deals.css";

const Deals = (props) => {
  // console.log(props.productData);
  const productList = props.productData.map((item) => (
    <Card data={item} key={item["_id"]}></Card>
  ));
  // console.log(productList);
  return (
    <div className="deals-bg">
      <h2 className="sm-gutter bold dull-color">Deals of the day</h2>
      <div className="responsive-grid-items sm-padding">
        {/* <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}
        {productList}
      </div>
    </div>
  );
};

export default Deals;
