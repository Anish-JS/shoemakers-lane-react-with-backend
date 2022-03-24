import { createContext, useContext } from "react";
import { useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState(false);
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);
export { SearchProvider, useSearch };
