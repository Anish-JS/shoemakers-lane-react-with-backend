import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./store/filter-context";
import { AuthProvider } from "./store/auth-context";
import { WishListProvider } from "./store/wishlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WishListProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </WishListProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
