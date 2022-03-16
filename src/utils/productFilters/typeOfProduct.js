const typeOfProductFilter = (products, typeOfProductFlag) => {
  let totalProducts = [];
  if (typeOfProductFlag["men"]) {
    const men = [...products].filter((item) => item.type === "men");
    totalProducts = [...totalProducts, ...men];
  }

  if (typeOfProductFlag["women"]) {
    const women = [...products].filter((item) => item.type === "women");
    totalProducts = [...totalProducts, ...women];
  }

  if (typeOfProductFlag["kids"]) {
    const kids = [...products].filter((item) => item.type === "kids");
    totalProducts = [...totalProducts, ...kids];
  }
  if (totalProducts.length !== 0) return totalProducts;

  return [...products];
};

export { typeOfProductFilter };
