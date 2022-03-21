const cartDetails = (cartItems) => {
  const cartDetailsObj = cartItems.reduce(
    (acc, curr) => {
      acc.totalPrice += parseInt(curr.price) * parseInt(curr.qty);
      acc.discount +=
        parseFloat(curr.discount) * parseInt(curr.price) * parseInt(curr.qty);
      acc.deliveryCharges += parseInt(curr.deliveryCharges);
      return { ...acc };
    },
    {
      totalPrice: 0,
      discount: 0,
      deliveryCharges: 0,
    }
  );
  const totalAmount =
    cartDetailsObj.totalPrice -
    cartDetailsObj.discount +
    cartDetailsObj.deliveryCharges;

  return { cartDetailsObj, totalAmount };
};

export { cartDetails };
