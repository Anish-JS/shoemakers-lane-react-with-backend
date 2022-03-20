import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import rupeeIcon from "../../assets/rupee.svg";
import "./Card.css";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../utils/cartServices/index";

import { useWishList } from "../../store/wishlist-context";
import { useState } from "react";
import { useCart } from "../../store/cart-context";
const WishCard = (props) => {
  const { cartState, dispatchCartState } = useCart();
  const { cartItems } = cartState;
  const { addToWishListHandler, removeFromWishList } = useWishList();
  const indexOfAddedCartItem = cartItems.findIndex(
    (item) => item["_id"] === props.data["_id"]
  );

  return (
    <>
      <div className="card-container sm-gutter sm-brr">
        <div className="wish-list-position">
          <img className="img-full" src={props.data.image} alt="card-img" />

          <FontAwesomeIcon
            onClick={() => removeFromWishList(props.data["_id"])}
            icon={faTimesCircle}
            className="wish-icon xxs-padding xs-gutter full-brr"
          />
        </div>
        <div className="card__content sm-gutter">
          <Link
            className="card__heading para-md semibold-weight center"
            to={`/product/${props.data["_id"]}`}
          >
            {props.data.name}
          </Link>
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
        <div className="card__actions wishlist-btns">
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
          <button
            className="secondary-btn para-sm bold xs-gutter"
            onClick={() => removeFromWishList(props.data["_id"])}
          >
            Remove from Wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export default WishCard;
