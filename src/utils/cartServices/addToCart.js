import axios from "axios";

const addToCart = async (product, dispatchCartState) => {
  if (localStorage.getItem("token")) {
    try {
      const {
        data: { cart },
      } = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: localStorage.getItem("token") } }
      );

      dispatchCartState({ type: "ADD", payload: { updatedCart: cart } });
    } catch (error) {
      console.log(error);
    }
  }
};

export { addToCart };
