import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useFilters } from "./store/filter-context";
import {
  sortProducts,
  typeOfProductFilter,
  productCategory,
  ratingFilter,
  priceRangeFilter,
  fastDeliveryFilter,
  outOfStockFilter,
  searchFilter,
} from "./utils/productFilters/index";
import Cart from "./components/Cart/Cart";
import Mockman from "mockman-js";
import {
  ProductListing,
  Header,
  Home,
  Signup,
  Profile,
  Login,
  WishList,
  SingleProduct,
  About,
} from "./components/index";

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
    search,
  } = filterState;

  const searchData = searchFilter(initialData, search);
  const sortedData = sortProducts(searchData, sort);
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
        <Route path="/product/:productId" element={<SingleProduct />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/mock"
          element={
            <Mockman
              endpointsList={[
                "/api/test-todos",
                "/api/auth/signup",
                "/api/auth/login",
              ]}
            />
          }
        ></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
