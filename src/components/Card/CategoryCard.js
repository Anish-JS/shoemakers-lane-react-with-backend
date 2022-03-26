import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartRate } from "@fortawesome/free-solid-svg-icons";
import rupeeIcon from "../../assets/rupee.svg";
import "./Card.css";
import { Link } from "react-router-dom";
import { useFilters } from "../../store/filter-context";

const CategoryImg = {
  running:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  sneakers:
    "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

  training:
    "https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
};
const CategoryCard = (props) => {
  const { dispatchFilter } = useFilters();
  useEffect(() => {
    dispatchFilter({ type: "RESET" });
  }, [props.data.categoryName.toLowerCase()]);

  return (
    <>
      <div
        className="card-container sm-brr"
        onClick={() =>
          dispatchFilter({
            type: "CATEGORY",
            payload: props.data.categoryName.toLowerCase(),
          })
        }
        key={props.data["_id"]}
      >
        <div className="wish-list-position">
          <img
            className="img-full"
            src={CategoryImg[props.data.categoryName.toLowerCase()]}
            alt="card-img"
          />
        </div>
        <div className="card__content sm-gutter">
          <div className="card__heading para-md sm-gutter semibold-weight center">
            {props.data.categoryName} Shoes
          </div>

          <div className="card__info para-sm-xs">{props.data.description}</div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
