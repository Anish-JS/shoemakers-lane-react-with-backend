const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sort: "LOW_TO_HIGH" };

    case "HIGH_TO_LOW":
      return { ...state, sort: "HIGH_TO_LOW" };

    case "TYPE_OF_PRODUCT":
      console.log(action.payload);
      return {
        ...state,
        typeOfProduct: {
          ...state.typeOfProduct,
          [action.payload]: !state.typeOfProduct[action.payload],
        },
      };
    case "FAST_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };

    case "OUT_OF_STOCK":
      return { ...state, inStock: !state.inStock };

    case "RATING":
      return { ...state, rating: action.payload };

    case "CATEGORY":
      return {
        ...state,
        category: {
          ...state.category,
          [action.payload]: !state.category[action.payload],
        },
      };

    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload };

    case "SEARCH":
      return { ...state, search: action.payload };

    case "RESET":
      return {
        sort: "",
        fastDelivery: false,
        inStock: true,
        typeOfProduct: { men: false, women: false, kids: false },
        category: { running: false, sneakers: false, training: false },
        rating: "",
        priceRange: "5000",
      };
  }
};

export { FilterReducer };
