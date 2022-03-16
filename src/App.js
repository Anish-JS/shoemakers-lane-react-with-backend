import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Card from "./components/Card/Card";
import ProductListing from "./components/Catalogue/ProductListing";
import Login from "./components/Login/Login";
import { sortProducts } from "./utils/productFilters/sortProducts";
import { typeOfProductFilter } from "./utils/productFilters/typeOfProduct";

import Header from "./components/Header/Header";
import Home from "./components/Homepage/Home/Home";
import { productData } from "./data/data";
import Signup from "./components/Login/Signup";
import { useFilters } from "./store/filter-context";
import { productCategory } from "./utils/productFilters/productCategory";
import { ratingFilter } from "./utils/productFilters/rating";
import { priceRangeFilter } from "./utils/productFilters/priceRangeFilter";
import { fastDeliveryFilter } from "./utils/productFilters/fastDeliveryFilter";
import { outOfStockFilter } from "./utils/productFilters/outOfStockFilter";

function App() {
  const [initialData, setInitialData] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => setInitialData(json.products));
  }, []);

  const { filterState } = useFilters();
  const {
    sort,
    typeOfProduct,
    category,
    rating,
    priceRange,
    fastDelivery,
    inStock,
  } = filterState;

  const sortedData = sortProducts(initialData, sort);
  const typeOfProductData = typeOfProductFilter(sortedData, typeOfProduct);
  const categoryData = productCategory(typeOfProductData, category);
  const ratingData = ratingFilter(categoryData, rating);
  const priceRangeData = priceRangeFilter(ratingData, priceRange);
  const fastDeliveryData = fastDeliveryFilter(priceRangeData, fastDelivery);
  const inStockData = outOfStockFilter(fastDeliveryData, inStock);
  const filteredInitialData = [...inStockData];

  return (
    <div className="App bg-dull">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home products={initialData.slice(0, 4)} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/product-listing"
          element={<ProductListing products={filteredInitialData} />}
        />
      </Routes>
      {/* <ProductListing products={productData.productList}></ProductListing> */}
      {/* <Login></Login> */}
      {/* <Card data={productData.productList[0]}></Card> */}
      {/* <Cart></Cart> */}
    </div>
  );
}

export default App;
