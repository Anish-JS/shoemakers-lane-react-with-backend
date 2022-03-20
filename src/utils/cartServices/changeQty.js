import axios from "axios";

const changeQty = async (id, dispatchCartState, changeType) => {
  if (localStorage.getItem("token")) {
    console.log(changeType);
    try {
      const {
        data: { cart },
      } = await axios.post(
        `/api/user/cart/${id}`,
        { action: { type: changeType } },
        { headers: { authorization: localStorage.getItem("token") } }
      );

      dispatchCartState({
        type: "CHANGE_QTY",
        payload: { updatedQtyCart: cart },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export { changeQty };
