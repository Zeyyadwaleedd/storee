import React from "react";
import {Route,Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AllProducts } from "./pages/products";
import { Create } from "./CrudProduct/create";
import { Checkout } from "./pages/checkout";
import { Single_product } from "./pages/Single_product";
import { Cart } from "./pages/Cart";
import { Update } from "./CrudProduct/UpdateProduct";
import { Thanks } from "./pages/Thanks";

function App() {
  return (
    <>
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Singel_product/:id" element={<Single_product />} />
      <Route path="/Update/:id" element={<Update />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Thanks" element={<Thanks />} />
    </Routes>

    </>
  );
}

export default App;
