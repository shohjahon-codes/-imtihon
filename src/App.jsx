import React from "react";
import { Route, Routes } from "react-router-dom";
import { Mainlayout } from "./layout/mainlayout";
import { Home } from "./pages/homepage/homepage";
import ProductList from "./components/products/product";
import ProductDetails from "./pages/shop/productdetails";
import ShopPage from './pages/shoppage/shoppage'; 
import { Aboutpage } from "./pages/About/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} /> 
          <Route path="product/:id" element={<ProductDetails />} /> 
          <Route path="shop" element={<ShopPage />} />
          <Route path="about"element={<Aboutpage/>}/>
          

        </Route>
      </Routes>
    </>
  );
}

export default App;
