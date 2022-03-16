import Filters from "./Filters";
import Products from "./Products";
import "./ProductListing.css";
const ProductListing = (props) => {
  return (
    <>
      <div className="section-div bg-dull">
        <Filters></Filters>
        <Products products={props.products}></Products>
      </div>
    </>
  );
};

export default ProductListing;
