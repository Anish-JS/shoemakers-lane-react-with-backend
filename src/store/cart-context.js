import { createContext } from "react";
import axios from "axios";
import { useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_CART":
      return { ...state, cartItems: action.payload.cart };

    case "ADD":
      return { ...state, cartItems: action.payload.updatedCart };

    case "REMOVE":
      return { ...state, cartItems: action.payload.updatedCart };
    case "CHANGE_QTY":
      return { ...state, cartItems: action.payload.updatedQtyCart };
    default:
      return {};
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, {
    cartItems: [],
  });
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("token")) {
        try {
          const {
            data: { cart },
          } = await axios.get("/api/user/cart", {
            headers: { authorization: localStorage.getItem("token") },
          });
          // console.log(cart);
          dispatchCartState({ type: "SHOW_CART", payload: { cart } });
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [localStorage.getItem("token")]);

  return (
    <CartContext.Provider value={{ cartState, dispatchCartState }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
