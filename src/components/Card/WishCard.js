import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartRate } from "@fortawesome/free-solid-svg-icons";
import rupeeIcon from "../../assets/rupee.svg";
import "./Card.css";
import { Link } from "react-router-dom";

import { useWishList } from "../../store/wishlist-context";
import { useState } from "react";
// import { useCart } from "../../store/cart-context";
const WishCard = (props) => {
  const { addToWishListHandler, removeFromWishList } = useWishList();

  return (
    <>
      <div className="card-container sm-gutter sm-brr" key={props.data["_id"]}>
        <div className="wish-list-position">
          <img className="img-full" src={props.data.image} alt="card-img" />

          <FontAwesomeIcon
            onClick={() => addToWishListHandler(props.data)}
            icon={faHeart}
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
          {/* <div className="card__info para-sm-xs">{props.data.productInfo}</div> */}
          <div className="card__info para-sm xs-gutter bold">
            {props.data.categoryName}
          </div>
          <div className="card__info para-sm rating bold">
            {props.data.rating}
          </div>
        </div>
        <div className="card__actions wishlist-btns">
          <button className="primary-btn para-sm bold xs-gutter">
            Add to Cart
          </button>
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
