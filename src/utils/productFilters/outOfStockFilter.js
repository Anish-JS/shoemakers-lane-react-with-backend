const outOfStockFilter = (products, inStock) => {
  if (!inStock) return [...products].filter((item) => item.inStock);
  else return [...products];
};

export { outOfStockFilter };
