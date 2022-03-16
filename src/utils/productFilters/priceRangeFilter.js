const priceRangeFilter = (products, priceRange) => {
  return [...products].filter(
    (item) => parseInt(item.price) <= parseInt(priceRange)
  );
};

export { priceRangeFilter };
