const searchFilter = (products, search) => {
  return search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;
};

export { searchFilter };
