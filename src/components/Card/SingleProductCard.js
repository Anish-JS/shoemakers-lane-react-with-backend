import "./CartCard.css";
import rupeeIcon from "../../assets/rupee.svg";
import { addToCart, removeFromCart } from "../../utils/cartServices/index";
import { useCart } from "../../store/cart-context";
import { useWishList } from "../../store/wishlist-context";
import { useNavigate } from "react-router-dom";
const SingleProductCard = (props) => {
  const { cartState, dispatchCartState } = useCart();
  const { cartItems } = cartState;
  const { addToWishListHandler, wishList, removeFromWishList } = useWishList();
  const indexOfAddedCartItem = cartItems.findIndex(
    (item) => item["_id"] === props.data["_id"]
  );
  const index = wishList.findIndex((item) => item["_id"] === props.data["_id"]);
  const navigate = useNavigate();
  const goToProductPage = () => {
    localStorage.removeItem(`single_product/${props.data["_id"]}`);
    navigate("/product-listing");
  };

  return (
    <>
      <div class="left-section-cart xs-padding xs-gutter sm-brr">
        <img
          src={props.data.image}
          class="img-height-cart xs-padding"
          alt="shoe-img"
        />

        <div class="product-details sm-gutter">
          <div class="title para-md xs-gutter bold">{props.data.name}</div>
          <div class="xs-gutter price-card">
            <img src={rupeeIcon} alt="rupee" className="rupee-icon img-xxxs" />
            <span className="para-md xs-gutter">{props.data.price}</span>
          </div>
          <div class="discount xs-gutter">
            {parseFloat(props.data.discount) * 100 + "% discount"}
          </div>

          {indexOfAddedCartItem === -1 ? (
            <button
              className="primary-btn btn-style para-sm bold xs-gutter"
              onClick={() => addToCart(props.data, dispatchCartState)}
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="secondary-btn para-sm bold xs-gutter"
              onClick={() =>
                removeFromCart(props.data["_id"], dispatchCartState)
              }
            >
              Remove from Cart
            </button>
          )}
          {index === -1 ? (
            <button
              class="secondary-btn  para-sm bold xs-gutter center"
              onClick={() => addToWishListHandler(props.data)}
            >
              Add to wishlist
            </button>
          ) : (
            <button
              class="secondary-btn  para-sm bold xs-gutter center"
              onClick={() => removeFromWishList(props.data["_id"])}
            >
              Remove From WishList
            </button>
          )}
          <button
            className="secondary-btn  para-sm bold xs-gutter center"
            onClick={() => goToProductPage()}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProductCard;
