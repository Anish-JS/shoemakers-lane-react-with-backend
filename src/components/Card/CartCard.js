import "./CartCard.css";
import rupeeIcon from "../../assets/rupee.svg";
import { removeFromCart, changeQty } from "../../utils/cartServices/index";
import { useCart } from "../../store/cart-context";
import { useWishList } from "../../store/wishlist-context";
const CartCard = (props) => {
  const { cartState, dispatchCartState } = useCart();
  const { addToWishListHandler, wishList } = useWishList();
  const index = wishList.findIndex((item) => item["_id"] === props.data["_id"]);
  const changeQtyHandler = (e) => {
    let changeType;
    const existingCartItem = cartState.cartItems.filter(
      (item) => item["_id"] === props.data["_id"]
    );

    if (parseInt(existingCartItem[0].qty) > parseInt(e.target.value)) {
      changeType = "decrement";
    } else {
      changeType = "increment";
    }
    changeQty(props.data["_id"], dispatchCartState, changeType);
  };

  return (
    <>
      <div className="left-section-cart xs-padding xs-gutter sm-brr">
        <img
          src={props.data.image}
          className="img-height-cart xs-padding"
          alt="shoe-img"
        />

        <div className="product-details sm-gutter">
          <div className="title para-md xs-gutter bold">{props.data.name}</div>
          <div className="xs-gutter price-card">
            <img src={rupeeIcon} alt="rupee" className="rupee-icon img-xxxs" />
            <span className="para-md xs-gutter">{props.data.price}</span>
          </div>
          <div className="discount xs-gutter">
            {parseFloat(props.data.discount) * 100 + "% discount"}
          </div>
          <div className="quant xs-gutter">
            Quantity
            <input
              type="number"
              value={props.data.qty}
              className="xs-brr xs-gutter xs-padding quantity-input center"
              onChange={(e) => changeQtyHandler(e)}
              min="1"
              max="5"
            />
          </div>
          <button
            className="secondary-btn para-sm bold xs-gutter center"
            onClick={() => removeFromCart(props.data["_id"], dispatchCartState)}
          >
            Remove from cart
          </button>
          {index === -1 ? (
            <button
              className="primary-btn btn-style para-sm bold xs-gutter center"
              onClick={() => addToWishListHandler(props.data)}
            >
              Add to wishlist
            </button>
          ) : (
            <button className="primary-btn btn-style para-sm bold xs-gutter center">
              Product In WishList
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CartCard;
