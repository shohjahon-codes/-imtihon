import React from "react";
import { Route, Routes } from "react-router-dom";
import { Mainlayout } from "./layout/mainlayout";
import { Home } from "./pages/homepage/homepage";
import ProductList from "./components/products/product";
import ProductDetails from "./pages/shop/productdetails";
import ShopPage from './pages/shoppage/shoppage'; // Import

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} /> {/* Faqat ProductList */}
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Faqat ProductDetails */}
          <Route path="/shop" element={<ShopPage />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
