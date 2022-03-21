import React from "react";
import CardImg from "../../assets/images.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faT, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import rupeeIcon from "../../assets/rupee.svg";
import { useWishList } from "../../store/wishlist-context";
import "./Card.css";
import { useCart } from "../../store/cart-context";
import { addToCart, removeFromCart } from "../../utils/cartServices/index";

const Card = (props) => {
  const { cartState, dispatchCartState } = useCart();
  const { cartItems } = cartState;
  const { addToWishListHandler, wishList, removeFromWishList } = useWishList();
  const index = wishList.findIndex((item) => item["_id"] === props.data["_id"]);
  const indexOfAddedCartItem = cartItems.findIndex(
    (item) => item["_id"] === props.data["_id"]
  );

  return (
    <>
      <div className="card-container sm-gutter sm-brr">
        <div className="wish-list-position">
          <img className="img-full" src={props.data.image} alt="card-img" />

          {index === -1 ? (
            <FontAwesomeIcon
              onClick={() => addToWishListHandler(props.data)}
              icon={faHeart}
              className="wish-icon xxs-padding xs-gutter full-brr"
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimesCircle}
              onClick={() => removeFromWishList(props.data["_id"])}
              className="wish-icon xxs-padding xs-gutter full-brr"
            />
          )}
        </div>
        <div className="card__content sm-gutter">
          <div className="card__heading para-md semibold-weight center">
            {props.data.name}
          </div>
          <div className="card__author para-sm bold">
            <img src={rupeeIcon} alt="rupee" className="img-xxxs" />
            <div className="xxs-padding">{props.data.price}</div>
          </div>

          <div className="card__info para-sm xs-gutter bold">
            {props.data.categoryName}
          </div>
          <div className="card__info para-sm rating bold">
            {props.data.rating}
          </div>
        </div>
        <div className="card__actions">
          {indexOfAddedCartItem === -1 ? (
            <button
              className="secondary-btn para-sm bold xs-gutter"
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
        </div>
      </div>
    </>
  );
};

export default Card;
