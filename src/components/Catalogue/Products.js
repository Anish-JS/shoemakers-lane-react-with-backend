import Card from "../Card/Card";
import "./ProductListing.css";
const Products = (props) => {
  const productList = props.products.map((item) => (
    <Card data={item} key={item.id}></Card>
  ));
  return (
    <>
      <div className="right-section sm-padding bg-dull">
        <h3 className="xs-gutter">Showing all results</h3>

        <div className="responsive-grid-items">{productList}</div>
      </div>
    </>
  );
};

export default Products;
