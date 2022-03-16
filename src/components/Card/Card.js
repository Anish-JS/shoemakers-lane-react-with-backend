import React from "react";
import CardImg from "../../assets/images.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import rupeeIcon from "../../assets/rupee.svg";
import "./Card.css";
// import { useCart } from "../../store/cart-context";
const Card = (props) => {
  // const { dispatch } = useCart();
  // console.log(props);

  return (
    <>
      <div className="card-container sm-gutter sm-brr" key={props.data["_id"]}>
        <div className="wish-list-position">
          <img className="img-full" src={props.data.image} alt="card-img" />

          <FontAwesomeIcon
            icon={faHeart}
            className="wish-icon xxs-padding xs-gutter full-brr"
          />
        </div>
        <div className="card__content sm-gutter">
          <div className="card__heading para-md semibold-weight center">
            {props.data.name}
          </div>
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
