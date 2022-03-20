import "../Card/CartCard.css";
import "./Cart.css";
import { cartDetails } from "../../utils/cartServices/cartDetails";
import rupeeIcon from "../../assets/rupee.svg";
const CartSummary = (props) => {
  const { totalAmount, totalPrice, discount, deliveryCharges } = cartDetails(
    props.details
  );
  return (
    <>
      <div class="product-details sm-gutter">
        <div class="title para-sm xs-gutter bold">Price Details</div>
        <div class="price xs-gutter">
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
        <div class="price xs-gutter">
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
        <div class="price xs-gutter">
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
        <div class="price xs-gutter top-padding">
          <div class="bold">Total Amount</div>
          <div class="bold">
            <img
              src={rupeeIcon}
              alt="rupee"
              className="img-xxxs xxxs-padding rupee-icon"
            />
            {totalAmount}
          </div>
        </div>
        <div class="xs-gutter">
          You will save
          <img
            src={rupeeIcon}
            alt="rupee"
            className="img-xxxs xxxs-padding discount rupee-icon"
          />
          {discount} on this order
        </div>

        <a href="" class="secondary-btn para-sm bold xs-gutter center">
          Place Order
        </a>
      </div>
    </>
  );
};

export default CartSummary;
