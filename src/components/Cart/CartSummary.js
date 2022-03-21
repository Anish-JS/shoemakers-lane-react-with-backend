import "../Card/CartCard.css";
import "./Cart.css";
import { cartDetails } from "../../utils/cartServices/cartDetails";
import rupeeIcon from "../../assets/rupee.svg";
const CartSummary = (props) => {
  const { cartDetailsObj, totalAmount } = cartDetails(props.details);
  const { totalPrice, discount, deliveryCharges } = cartDetailsObj;
  return (
    <>
      <div className="product-details sm-gutter">
        <div className="title para-sm xs-gutter bold">Price Details</div>
        <div className="price xs-gutter">
          <div>Price ({props.details.length})</div>
          <div>
            <img
              src={rupeeIcon}
              alt="rupee"
              className="img-xxxs xxxs-padding rupee-icon"
            />
            {totalPrice}
          </div>
        </div>
        <div className="price xs-gutter">
          <div>Discount</div>
          <div>
            <img
              src={rupeeIcon}
              alt="rupee"
              className="img-xxxs xxxs-padding rupee-icon"
            />
            {discount}
          </div>
        </div>
        <div className="price xs-gutter">
          <div>Delivery Charges</div>
          <div>
            <img
              src={rupeeIcon}
              alt="rupee"
              className="img-xxxs rupee-icon xxxs-padding"
            />
            {deliveryCharges}
          </div>
        </div>
        <div className="price xs-gutter top-padding">
          <div className="bold">Total Amount</div>
          <div className="bold">
            <img
              src={rupeeIcon}
              alt="rupee"
              className="img-xxxs xxxs-padding rupee-icon"
            />
            {totalAmount}
          </div>
        </div>
        <div className="xs-gutter">
          You will save
          <img
            src={rupeeIcon}
            alt="rupee"
            className="img-xxxs xxxs-padding discount rupee-icon"
          />
          {discount} on this order
        </div>

        <button className="secondary-btn para-sm bold xs-gutter center">
          Place Order
        </button>
      </div>
    </>
  );
};

export default CartSummary;
