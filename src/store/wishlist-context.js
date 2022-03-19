import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const wishListContext = createContext();
const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const showWishListHandler = async () => {
    try {
      const response = await axios
        .get("/api/user/wishlist", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => setWishList(res.data.wishlist));
    } catch (error) {
      console.log(error);
    }
  };
  const addToWishListHandler = async (product) => {
    // console.log(wishList);

    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      setWishList(response.data.wishlist);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishList = async (id) => {
    try {
      const response = await axios
        .delete(`/api/user/wishlist/${id}`, {
          headers: { authorization: localStorage.getItem("token") },
        })
        .then((res) => setWishList(res.data.wishlist));
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <wishListContext.Provider
      value={{
        wishList,
        showWishListHandler,
        addToWishListHandler,
        removeFromWishList,
      }}
    >
      {children}
    </wishListContext.Provider>
  );
};
const useWishList = () => useContext(wishListContext);

export { WishListProvider, useWishList };
