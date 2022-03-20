const cartDetails = (cartItems) => {
  const totalPrice = cartItems.reduce(
    (acc, curr) => (acc += parseInt(curr.price) * parseInt(curr.qty)),
    0
  );
  const discount = cartItems.reduce(
    (acc, curr) =>
      (acc +=
        parseFloat(curr.discount) * parseInt(curr.price) * parseInt(curr.qty)),
    0
  );
  const deliveryCharges = cartItems.reduce(
    (acc, curr) => (acc += parseInt(curr.deliveryCharges)),
    0
  );
  const totalAmount = totalPrice - discount + deliveryCharges;

  return { totalPrice, discount, deliveryCharges, totalAmount };
};

export { cartDetails };
