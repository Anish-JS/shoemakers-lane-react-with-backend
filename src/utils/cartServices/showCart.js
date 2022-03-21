import axios from "axios";

const showCart = async () => {
  try {
    const {
      data: { cart },
    } = await axios.get("/api/user/cart", {
      headers: { authorization: localStorage.getItem("token") },
    });
  } catch (error) {
    console.log(error);
  }
};

export { showCart };
