import { useEffect } from "react";
import { useAuth } from "../../store/auth-context";
import "./WishList.css";
import axios from "axios";
import { useWishList } from "../../store/wishlist-context";
import WishCard from "../Card/WishCard";
const WishList = () => {
  const { isLoggedIn } = useAuth();
  const { showWishListHandler, wishList } = useWishList();
  useEffect(() => {
    showWishListHandler();

    return () => {};
  }, []);

  const wishListMap = wishList.map((item) => <WishCard data={item}></WishCard>);

  return (
    <>
      <div class="section-wishlist sm-padding bg-dull">
        {!isLoggedIn ? (
          <h3 class="center wishlist">Please Login</h3>
        ) : wishList.length === 0 ? (
          <>
            <h2 class="center wishlist">Your Wishlist({wishListMap.length})</h2>
            <h3 className="center xs-gutter">There no items here</h3>
          </>
        ) : (
          <>
            <h2 class="center wishlist">Your Wishlist({wishListMap.length})</h2>
            <div class="responsive-grid-items">{wishListMap}</div>
          </>
        )}
      </div>
    </>
  );
};

export default WishList;
