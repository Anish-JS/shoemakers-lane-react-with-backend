import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <div className="brand">
        <div className="brand-items">
          <div className="navbar_header xs-gutter xs-padding">
            <Link to="/">
              <FontAwesomeIcon icon={faBars} className="para-md dull-color" />
            </Link>
          </div>
          <div className="brand-name xs-gutter para-md semibold-weight">
            The Shoemakers' Lane
          </div>
        </div>
        <div className="brand-nav">
          <div className="left-nav-item xs-gutter full-brr">
            <Link to="/" className="primary-btn sm-brr para-sm">
              Home
            </Link>
          </div>
          <div className="left-nav-item xs-gutter full-brr">
            <Link to="/product-listing" className="primary-btn sm-brr para-sm">
              Catalogue
            </Link>
            {/* <button
              href="./pages/Product page/product_listing.html"
              className="primary-btn sm-brr para-sm"
              onClick={props.onShowCatalogue}
            >
              Catalogue
            </button> */}
          </div>
          <div className="left-nav-item xs-gutter full-brr">
            <Link to="/new-arrival" className="primary-btn sm-brr para-sm">
              New Arrivals
            </Link>
          </div>
        </div>

        <div className="brand-actions">
          <div className="left-nav-item xs-gutter xs-padding bold full-brr">
            <a href="" className="x">
              {" "}
              <FontAwesomeIcon icon={faMagnifyingGlass} className="para-sm" />
            </a>
          </div>

          <div className="left-nav-item xs-gutter xs-padding bold full-brr">
            <a href="./pages/wishlist/wishlist.html">
              <FontAwesomeIcon icon={faHeart} className="para-sm" />
            </a>
          </div>
          <div className="left-nav-item xs-gutter xs-padding bold full-brr">
            <a href="./pages/cart page/Cart.html">
              <FontAwesomeIcon icon={faCartShopping} className="para-sm" />
            </a>
          </div>
          <div className="left-nav-item xs-gutter full-brr">
            <Link to="/login" className="primary-btn sm-brr para-sm">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
