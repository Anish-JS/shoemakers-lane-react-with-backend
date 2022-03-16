const sortProducts = (products, sortFlag) => {
  if (sortFlag === "LOW_TO_HIGH")
    return [...products].sort((item1, item2) => item1.price - item2.price);

  if (sortFlag === "HIGH_TO_LOW")
    return [...products].sort((item1, item2) => item2.price - item1.price);

  return [...products];
};

export { sortProducts };
