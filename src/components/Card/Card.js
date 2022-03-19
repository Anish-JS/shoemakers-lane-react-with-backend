import React from "react";
import CardImg from "../../assets/images.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faT, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import rupeeIcon from "../../assets/rupee.svg";
import { useWishList } from "../../store/wishlist-context";
import "./Card.css";

const Card = (props) => {
  const { addToWishListHandler, wishList, removeFromWishList } = useWishList();
  const index = wishList.findIndex((item) => item["_id"] === props.data["_id"]);

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
          <button className="secondary-btn para-sm bold xs-gutter">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
