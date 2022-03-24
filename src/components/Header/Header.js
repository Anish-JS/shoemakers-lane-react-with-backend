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
import { useAuth } from "../../store/auth-context";
import { useWishList } from "../../store/wishlist-context";
import { useState } from "react";
import { Search } from "../index";
import { useCart } from "../../store/cart-context";
const Header = (props) => {
  const { isLoggedIn } = useAuth();
  const { wishList } = useWishList();
  const [search, setSearch] = useState(false);
  const { cartState } = useCart();
  const { cartItems } = cartState;
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
          {!search ? (
            <>
              <div className="left-nav-item xs-gutter full-brr">
                <Link to="/" className="primary-btn sm-brr para-sm">
                  Home
                </Link>
              </div>
              <div className="left-nav-item xs-gutter full-brr">
                <Link
                  to="/product-listing"
                  className="primary-btn sm-brr para-sm"
                >
                  Catalogue
                </Link>
              </div>
              <div className="left-nav-item xs-gutter full-brr">
                <Link to="/new-arrival" className="primary-btn sm-brr para-sm">
                  New Arrivals
                </Link>
              </div>
            </>
          ) : (
            <Search />
          )}
        </div>

        <div className="brand-actions">
          <div className="left-nav-item xs-gutter xs-padding bold full-brr">
            <Link to="/product-listing">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="para-sm search"
                onClick={() => setSearch((search) => !search)}
              />
            </Link>
          </div>

          <div className="left-nav-item xs-gutter xs-padding bold full-brr wishlist-heart">
            <Link to="/wishlist">
              <FontAwesomeIcon icon={faHeart} className="para-sm " />
            </Link>
            <div className="wishlist-count full-brr para-xs">
              {wishList.length}
            </div>
          </div>
          <div className="left-nav-item xs-gutter xs-padding bold full-brr wishlist-heart">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} className="para-sm" />
            </Link>
            <div className="wishlist-count full-brr para-xs">
              {cartItems.length}
            </div>
          </div>
          <div className="left-nav-item xs-gutter full-brr">
            {!isLoggedIn && (
              <Link to="/login" className="primary-btn sm-brr para-sm">
                Login
              </Link>
            )}
            {isLoggedIn && (
              <Link to="/profile" className="primary-btn sm-brr para-sm">
                Profile
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
