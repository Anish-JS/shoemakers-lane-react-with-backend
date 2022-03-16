const ratingFilter = (products, ratingFlag) => {
  if (ratingFlag === "4/5")
    return [...products].filter((item) => {
      const rating = parseInt(item.rating[0]);
      if (rating >= parseInt(ratingFlag[0])) return item;
    });
  if (ratingFlag === "3/5")
    return [...products].filter((item) => {
      const rating = parseInt(item.rating[0]);
      if (rating >= parseInt(ratingFlag[0])) return item;
    });
  if (ratingFlag === "2/5")
    return [...products].filter((item) => {
      const rating = parseInt(item.rating[0]);
      if (rating >= parseInt(ratingFlag[0])) return item;
    });
  if (ratingFlag === "1/5")
    return [...products].filter((item) => {
      const rating = parseInt(item.rating[0]);
      if (rating >= parseInt(ratingFlag[0])) return item;
    });
  return [...products];
};

export { ratingFilter };
