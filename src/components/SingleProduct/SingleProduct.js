import { useEffect } from "react";
import SingleProductCard from "../Card/SingleProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SingleProducts.css";
import { useState } from "react";
const SingleProduct = (props) => {
  const [productData, setProductData] = useState([]);
  let { productId } = useParams();

  useEffect(() => {
    (async () => {
      if (localStorage.getItem(`single_product/${productId}`))
        setProductData(
          JSON.parse(localStorage.getItem(`single_product/${productId}`))
        );
      else {
        try {
          const {
            data: { product },
          } = await axios.get(`/api/products/${productId}`);
          setProductData(product);
          localStorage.setItem(
            `single_product/${productId}`,
            JSON.stringify(product)
          );
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [localStorage.getItem(`single_product/${productId}`)]);

  return (
    <>
      <div class="section-cart single-product sm-gutter">
        <div className="cartItem-section">
          {<SingleProductCard data={productData} />}
        </div>
        <div class="right-section-cart sm-brr product-info center sm-padding para-sm xs-gutter">
          <div className="center xs-gutter para-md bold">
            Product Description
          </div>
          {productData.productInfo}
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
