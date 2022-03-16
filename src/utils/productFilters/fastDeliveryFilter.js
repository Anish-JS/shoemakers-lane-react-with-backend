const fastDeliveryFilter = (products, fastDelivery) => {
  if (fastDelivery) return [...products].filter((item) => item.fastDelivery);
  return [...products];
};

export { fastDeliveryFilter };
