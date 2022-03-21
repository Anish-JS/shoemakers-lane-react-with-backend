import axios from "axios";

const removeFromCart = async (id, dispatchCartState) => {
  if (localStorage.getItem("token")) {
    try {
      const {
        data: { cart },
      } = await axios.delete(`/api/user/cart/${id}`, {
        headers: { authorization: localStorage.getItem("token") },
      });

      dispatchCartState({ type: "REMOVE", payload: { updatedCart: cart } });
    } catch (error) {
      console.log(error);
    }
  }
};

export { removeFromCart };
