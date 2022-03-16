const productCategory = (products, productCategoryFlag) => {
  let totalProducts = [];
  if (productCategoryFlag.running) {
    const running = [...products].filter(
      (item) => item.categoryName === "running"
    );
    totalProducts = [...totalProducts, ...running];
    console.log(totalProducts);
  }

  if (productCategoryFlag.sneakers) {
    const sneakers = [...products].filter(
      (item) => item.categoryName === "sneakers"
    );
    totalProducts = [...totalProducts, ...sneakers];
  }

  if (productCategoryFlag.training) {
    const training = [...products].filter(
      (item) => item.categoryName === "training"
    );
    totalProducts = [...totalProducts, ...training];
  }

  if (totalProducts.length !== 0) return totalProducts;
  return [...products];
};

export { productCategory };
