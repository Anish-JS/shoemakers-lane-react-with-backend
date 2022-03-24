import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../utils/FilterReducer";

const FilterContext = createContext();

const useFilters = () => useContext(FilterContext);

const initialState = {
  sort: "",
  fastDelivery: false,
  inStock: true,
  typeOfProduct: { men: false, women: false, kids: false },
  category: { running: false, sneakers: false, training: false },
  rating: "",
  priceRange: "5000",
  search: "",
};

const FilterProvider = ({ children }) => {
  const [filterState, dispatchFilter] = useReducer(FilterReducer, initialState);
  return (
    <FilterContext.Provider value={{ filterState, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilters, FilterProvider };
