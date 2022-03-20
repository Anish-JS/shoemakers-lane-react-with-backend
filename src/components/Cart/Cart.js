import { useEffect } from "react";
import { useAuth } from "../../store/auth-context";
import { useCart } from "../../store/cart-context";
import CartCard from "../Card/CartCard";
import "./Cart.css";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { isLoggedIn } = useAuth();
  const { cartState } = useCart();

  const { cartItems } = cartState;
  console.log(cartItems);

  const cartItemList = cartItems.map((item) => (
    <CartCard data={item} key={item["_id"]} />
  ));

  return (
    <>
      {!isLoggedIn ? (
        <h3 className="center sm-gutter">Please Login</h3>
      ) : cartItems.length === 0 ? (
        <>
          <h2 class="center xs-gutter">My Cart({cartItems.length})</h2>
          <h3 className="center xs-gutter">There no items here</h3>
        </>
      ) : (
        <>
          <h2 class="center xs-gutter">My Cart({cartItems.length})</h2>
          <div class="section-cart sm-gutter">
            <div className="cartItem-section">{cartItemList}</div>
            {
              <div class="right-section-cart xs-padding">
                <CartSummary details={cartItems}></CartSummary>
              </div>
            }
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
